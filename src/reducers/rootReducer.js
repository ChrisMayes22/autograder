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

                let english = gradeTest(action.payload.studentAnswers.english, action.payload.test.english);
                let math = gradeTest(action.payload.studentAnswers.math, action.payload.test.math);
                let reading = gradeTest(action.payload.studentAnswers.reading, action.payload.test.reading);
                let science = gradeTest(action.payload.studentAnswers.science, action.payload.test.science);
                let compositeScore = Math.round((english.score + math.score + reading.score + science.score)/4)

                if(english.score < 10){
                    english.score = 10
                }

                if(math.score < 10){
                    math.score = 10
                }

                if(reading.score < 10){
                    reading.score = 10
                }

                if(science.score < 10){
                    science.score = 10
                }

                if(compositeScore < 10){
                    compositeScore = 10;
                }


                let compositeGoal = Math.round((action.payload.goals.english + action.payload.goals.reading + action.payload.goals.math 
                                        + action.payload.goals.science)/4)
                compositeGoal = updateGoals(compositeScore, compositeGoal);


                const goals = {
                    english: updateGoals(english.score, action.payload.goals.english),
                    math: updateGoals(math.score, action.payload.goals.math),
                    reading: updateGoals(reading.score, action.payload.goals.reading),
                    science: updateGoals(science.score, action.payload.goals.science)
                }
                
                



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
            return newState;
            
        default:
            return state;
    }
}
