import { Router } from "express";
import { StackQuestion } from '@modules/controllers/StackQuestionAction';
import { StackAnswer } from '@modules/controllers/StackAnswerAction';

class StackRoutes {
  public readonly _router: Router;

  constructor() {
    this._router = Router();
    this.questionEndpoint();
    this.answerEndpoint();
  }
		
  private questionEndpoint = (): void => {
    this._router.post('/question/create', StackQuestion.createQuestion);
    this._router.get('/question', StackQuestion.retrieveQuestion);
  }

  private answerEndpoint = (): void => {
    this._router.post('/question/:questionId/answer', StackAnswer.createAnswer);
    this._router.patch('/answer/:answerId/vote', StackAnswer.voteAnswer);
  }
}
export default new StackRoutes();