import { model, Document, Model, Schema } from "mongoose";

interface StackAnswers extends Document
{
  answerer: string;
  ans: string;
  answered: Date;
  likes: number;
}

const StackAnswersSchema = new Schema(
  {
    questionId: {
      type: Schema.Types.ObjectId,
      ref: "StackQuestions"
    },
    answerer: String,
    ans: String,
    answered: Date,
    likes: Number
  },
{
  timestamps: true
});

const StackAnswers: Model<StackAnswers> = model('StackAnswers', StackAnswersSchema);

export default StackAnswers;
