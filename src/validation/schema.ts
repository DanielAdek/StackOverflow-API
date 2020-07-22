/**
 * @author DanielAdek
 * @desc REQUEST SCHEMA VALIDATOR
 */
export const formSchema = {
  question: {
    formType: 'create_question',
    topic: { field: 'title', required: true },
    username: { field: 'questionaire', required: true, isName: true },
    question: { field: 'ques', required: true },
    tags: { field: 'tags', required: true }
  }
};