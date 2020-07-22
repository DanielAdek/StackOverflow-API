import { Model } from 'mongoose';
import { StackAnswers } from '@modules/models/StackAnswers';
import { StackQuestions } from '@modules/models/StackQuestions';

type StackDataType = StackQuestions | StackAnswers;

/**
 * @author DanielAdek
 * @desc CREATE FEATURE
 * @param {Document} database DATA-BASE TO RECEIVE DATA
 * @param {object} requestBody THE REQUEST BODY TO BE INSERTED
 * @param {object} data DATA FOR USER
 * @returns {object} JSON
 */
export const shouldInsertToDataBase = (database: Model<StackDataType>, requestBody: object) => database.create(requestBody);

/**
 * @author DanielAdek
 * @desc FIND FROM DB
 * @param {Document} database DATA-BASE TO RECEIVE DATA
 * @param {object} requestBody THE REQUEST BODY TO BE USED
 * @returns {object} JSON
 */
export const shouldFindOneObject = (database: Model<StackDataType>, requestBody: object) => database.findOne(requestBody);

/**
 * @author DanielAdek
 * @desc FIND FROM DB
 * @param {Document} database DATA-BASE TO RECEIVE DATA
 * @param {object} requestBody THE REQUEST BODY TO BE USED
 * @returns {object} JSON
 */
export const shouldFindObjects = (database: Model<StackDataType>, requestBody: object) => database.find(requestBody);