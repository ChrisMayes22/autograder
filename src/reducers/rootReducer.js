import * as actionTypes from '../actions/actions';
import gradeTest from '../utils/gradeTest';
import updateGoals from '../utils/updateGoals';

const initialState = {
    english: null,
    math: null,
    reading: null,
    science: null
}

export function rootReducer(state=initialState, action){
    switch(action.type){
        case actionTypes.RECORD_STUDENT_RES:

                const english = gradeTest(action.payload.studentAnswers.english, action.payload.test.english);

                const math = gradeTest(action.payload.studentAnswers.math, action.payload.test.math);
                const reading = gradeTest(action.payload.studentAnswers.reading, action.payload.test.reading);
                const science = gradeTest(action.payload.studentAnswers.science, action.payload.test.science);
                const compositeScore = (english.score + math.score + reading.score + science.score)/4
                const compositeGoal = (action.payload.goals.english + action.payload.goals.reading + action.payload.goals.math 
                                        + action.payload.goals.science)/4
                const goals = {
                    english: updateGoals(english.score, action.payload.goals.english),
                    math: updateGoals(math.score, action.payload.goals.math),
                    reading: updateGoals(reading.score, action.payload.goals.reading),
                    science: updateGoals(science.score, action.payload.goals.science)
                }
                
                console.log('GOALS', goals)

                const newState = {
                    english,
                    math,
                    reading,
                    science,
                    compositeScore,
                    compositeGoal,
                    goals,
                    test: action.payload.test.id,
                    timing: action.payload.timing,
                    guesses: action.payload.guesses
                }
                console.log('NEW STATE', newState);
            return newState;
            
        default:
            return state;
    }
}
