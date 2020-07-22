import { model, Document, Model, Schema } from "mongoose";

export interface StackQuestions extends Document
{
  questionaire: string;
  ques: string;
  title: string;
  tags: Array<string>;
  asked: string;
  viewed: number;
  createdAt: Date;
}

const StackQuestionsSchema = new Schema(
  {
    questionaire: String,
    title: String,
    ques: String,
    tags: [String],
    asked: String,
    viewed: { type: Number, default: 0 }
  },
{
  timestamps: true
});

StackQuestionsSchema.index({ title: 'text' }, { unique: true });

const StackQuestions: Model<StackQuestions> = model('StackQuestions', StackQuestionsSchema);

export default StackQuestions;
