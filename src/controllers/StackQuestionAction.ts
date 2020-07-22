import { Request, Response } from 'express';
import moment from 'moment';
// import { Form } from 'form-my-simple-validation';
import { ResponseFormat, successResponse, errorResponse } from '@modules/util/response';
// import { formSchema } from '@modules/validation/schema';
import db from '@models/index';
import * as Messanger from '@modules/services/StackService';

/**
 * @class StackQuestion
 */
export class StackQuestion {
  /**
   * @method create
   * @desc Feature create user account
   * @author DanielAdek
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
   public static createQuestion = async (req: Request, res: Response): Promise<ResponseFormat | any> => {
     try {

      const { questionaire, title, ques, tags } = req.body;

      // Confirm no duplicate record exit
      const foundQues = await Messanger.shouldFindOneObject(db.StackQuestionsDB, { questionaire, title });

      if (foundQues) {
        const result = errorResponse('ERRDuplicateRecord', 422, 'ques', 'create question', 'You have asked this question already!', { error: true, operationStatus: 'Proccess Terminated!' });
        return res.status(422).jsend.fail(result);
      }

      const asked = moment(new Date()).format('ll');

      const data = { questionaire, title, ques, tags, asked, active: asked };

      const question = await Messanger.shouldInsertToDataBase(db.StackQuestionsDB, data);

      const result = successResponse('Question Created Successfully', 201, 'create question', { error: false, operationStatus: 'Proccess Completed!', question });

      return res.status(201).jsend.success(result);
    } catch (error) {
      const result = errorResponse(`${error.syscall || error.name || 'ServerError'}`, 500, `${error.path || 'No Field'}`, 'create question', `${error.message}`, { error: true, operationStatus: 'Proccess Terminated!', errorSpec: error });
      return res.status(500).jsend.fail(result);
    }
  }
}