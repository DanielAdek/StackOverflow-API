import { Request, Response } from 'express';
import moment from 'moment';
import { Form } from 'form-my-simple-validation';
import { ResponseFormat, successResponse, errorResponse } from '@modules/util/response';
import { formSchema } from '@modules/validation/schema';
import db from '@models/index';
import * as Messanger from '@modules/services/StackService';
import { StackQuestions } from '@modules/models/StackQuestions';

/**
 * @class StackQuestion
 */
export class StackQuestion {
  /**
   * @author DanielAdek
   * @method createQuestion
   * @desc Feature create user account
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
   public static createQuestion = async (req: Request, res: Response): Promise<ResponseFormat | any> => {
     try {
      const validationResult: ResponseFormat = Form.validateFields('create_question', formSchema, req.body);

      if (validationResult.error) {
        return res.status(400).jsend.fail(validationResult);
      }
      
      const { questionaire, title, ques, tags } = req.body;

      // Confirm no duplicate record exit
      const foundQues = await Messanger.shouldFindOneObject(db.StackQuestionsDB, { questionaire, title });

      if (foundQues) {
        const result = errorResponse('ErrDuplicateRecord', 422, 'ques', 'create question', 'You have asked this question already!', { error: true, operationStatus: 'Proccess Terminated!' });
        return res.status(422).jsend.fail(result);
      }

      const asked = moment(new Date()).fromNow();

      const arrayOfTags = tags.split(',').map((x: string) => x.trim());

      const data = { questionaire, title, ques, tags: arrayOfTags, asked };

      const question = await Messanger.shouldInsertToDataBase(db.StackQuestionsDB, data);

      const result = successResponse('Question Created Successfully', 201, 'create question', { error: false, operationStatus: 'Proccess Completed!', question });

      return res.status(201).jsend.success(result);
    } catch (error) {
      const result = errorResponse(`${error.syscall || error.name || 'ServerError'}`, 500, `${error.path || 'No Field'}`, 'create question', `${error.message}`, { error: true, operationStatus: 'Proccess Terminated!', errorSpec: error });
      return res.status(500).jsend.fail(result);
    }
  }

  /**
   * @author DanielAdek
   * @method retrieveQuestions
   * @desc Feature create user account
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
   public static retrieveQuestion = async (req: Request, res: Response): Promise<ResponseFormat | any> => {
     try {
      const foundQues = <StackQuestions> await Messanger.shouldFindOneObject(db.StackQuestionsDB, { title: req.query.search });

      if (!foundQues) {
        const result = errorResponse('ErrDocNotFound', 404, 'ques', 'retrieve question', 'Question does not exist', { error: true, operationStatus: 'Proccess Terminated!' });
        return res.status(404).jsend.fail(result);
      }

      foundQues.viewed += 1;

      foundQues.asked = moment((foundQues as StackQuestions).createdAt).fromNow();

      await foundQues.save();

      const result = successResponse('Question retrieved Successfully', 200, 'retrieve question', { error: false, operationStatus: 'Proccess Completed!', foundQues });

      return res.status(200).jsend.success(result);
    } catch (error) {
      const result = errorResponse(`${error.syscall || error.name || 'ServerError'}`, 500, `${error.path || 'No Field'}`, 'retrieve question', `${error.message}`, { error: true, operationStatus: 'Proccess Terminated!', errorSpec: error });
      return res.status(500).jsend.fail(result);
    }
  }
}