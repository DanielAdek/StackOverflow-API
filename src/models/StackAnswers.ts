import { model, Document, Model, Schema } from "mongoose";

export interface StackAnswers extends Document
{
  answerer: string;
  ans: string;
  answered: Date;
  vote: number;
}

const StackAnswersSchema = new Schema(
  {
    questionId: {
      type: Schema.Types.ObjectId,
      ref: "StackQuestions"
    },
    answerer: String,
    ans: String,
    answered: String,
    vote: {
      type: Number,
      default: 0
    }
  },
{
  timestamps: true
});

const StackAnswers: Model<StackAnswers> = model('StackAnswers', StackAnswersSchema);

export default StackAnswers;
