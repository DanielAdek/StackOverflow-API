import { model, Document, Model, Schema } from "mongoose";

export interface StackQuestions extends Document
{
  questionaire: string;
  ques: string;
  title: string;
  tags: Array<string>;
  viewed: number;
  asked: Date;
  active: string;
}

const StackQuestionsSchema = new Schema(
  {
    questionaire: String,
    title: String,
    ques: String,
    tags: [String],
    viewed: Number,
    asked: Date,
    active: String
  },
{
  timestamps: true
});

const StackQuestions: Model<StackQuestions> = model('StackQuestions', StackQuestionsSchema);

export default StackQuestions;
