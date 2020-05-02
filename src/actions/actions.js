export const RECORD_STUDENT_ANSWERS = 'RECORD_STUDENT_ANSWERS';

export const recordStudentAnswers = function(answers){
    return {type: RECORD_STUDENT_ANSWERS, answers}
}