import mongoose from 'mongoose';
import { config } from 'dotenv';
import StackQuestions from '@modules/models/StackQuestions';
import StackAnswers from '@modules/models/StackAnswers';

config();

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  socketTimeoutMS: 999999999,
  connectTimeoutMS: 30000,
};

mongoose
  .connect(
    (process.env.DB_URI! || process.env['MONGODB_URI_LOCAL']!),
    options
  )
  .then(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Mongodb connected!');
    }
  });

if (process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true);
} else {
  mongoose.set('debug', false);
}
mongoose.connection.on('error', (err: any) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

export default { StackQuestions, StackAnswers };
