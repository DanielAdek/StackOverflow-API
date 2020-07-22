import { Request, Response } from 'express';
import { Form } from 'form-my-simple-validation';
import moment from 'moment';
import { ResponseFormat, successResponse, errorResponse } from '@modules/util/response';
import { formSchema } from '@modules/validation/schema';
import db from '@models/index';
import * as Messanger from '@modules/services/StackService';


/**
 * @class StackAnswer
 */
export class StackAnswer {
  /**
   * @method create
   * @desc Feature create user account
   * @author DanielAdek
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
   public static create = async (req: Request, res: Response): Promise<ResponseFormat | any> => {
     try {
      const validationResult = Form.validateFields('create_answer', formSchema, req.body);

      if (validationResult.error) {
        return res.status(400).jsend.fail(validationResult);
      }

      const { answerer, ans } = req.body;

      const ques = await Messanger.shouldFindOneObject(db.StackQuestionsDB, { _id: req.params.questionId });

      if (!ques) {
        const result = errorResponse('ErrDocNotFound', 404, 'questionId', 'create answer', 'You can not answer non-existing question', { error: true, operationStatus: 'Proccess Terminated!' });
        return res.status(404).jsend.fail(result);
      }

      const data = { questionId: req.params.questionId, answerer, ans, answered: moment(new Date()).format('ll') };

      // CREATE ANSWER
      const answer = await Messanger.shouldInsertToDataBase(db.StackAnswersDB, data);

      const result = successResponse('Answer Taken Successfully', 201, 'create answer', { error: false, operationStatus: 'Proccess Completed!', answer });
      return res.status(201).jsend.success(result);
    } catch (error) {
      const result = errorResponse(`${error.syscall || error.name || 'ServerError'}`, 500, `${error.path || 'No Field'}`, 'create cart', `${error.message}`, { error: true, operationStatus: 'Proccess Terminated!', errorSpec: error });
      return res.status(500).jsend.fail(result);
    }
  }
}