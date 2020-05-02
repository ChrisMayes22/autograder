import * as actionTypes from '../actions/actions';

const initialState = {
    studentAnswers: null
}

export function rootReducer(state=initialState, action){
    switch(action.type){
        case actionTypes.RECORD_STUDENT_ANSWERS:
            return {
                studentAnswers: action.answers
            }
        default:
            return state;
    }
}