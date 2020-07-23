import mongoose from 'mongoose';
import redis from 'redis';
import util from 'util';
import { config } from 'dotenv';
 
config();

interface OptionType {
  time: number;
  key?: any
}

const client = redis.createClient(process.env.REDIS_URL!);

client.hget = <any> util.promisify(client.hget);

const exec = mongoose.Query.prototype.exec;

(mongoose.Query as any).prototype.cache = function(options: OptionType = { time: 60 }) {
  this.useCache = true;
  this.time = options.time;
  this.hashKey = JSON.stringify(options.key || this.mongooseCollection.name);

  return this;
};

(mongoose.Query as any).prototype.exec = async function() {
  if (!(this as any).useCache) {
    return await exec.apply(this, (arguments as any));
  }

  const key = JSON.stringify({
    ...this.getFilter()
  });

  const cacheValue = <any> await client.hget(this.hashKey, key);

  if (cacheValue) {
    const doc = JSON.parse(cacheValue);

    console.log(Array.isArray(doc));
    return Array.isArray(doc) ? doc.map(d => new this.model(d)) : new this.model(doc);
  }

  const result = await exec.apply(this, (arguments as any));

  client.hset(this.hashKey, key, JSON.stringify(result));
  client.expire(this.hashKey, this.time);

  return result;
};

export default {
  clearKey(hashKey: any) {
    client.del(JSON.stringify(hashKey));
  }
}