import * as actionTypes from '../actions/actions';
import gradeTest from '../utils/gradeTest';
import updateCSSOffset from '../utils/updateCSSOffset';
import updateCSSColors from '../utils/updateCSSColors'

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

                let compositeScore = Math.round((english.score + math.score + reading.score + science.score)/4);
                compositeScore = compositeScore < 10 ? 10 : compositeScore;
                let compositeGoal = Math.round((action.payload.goals.english + action.payload.goals.reading + 
                    action.payload.goals.math + action.payload.goals.science)/4);
                const composite = {
                    score: compositeScore,
                    goal: compositeGoal
                };

                [[english, 'english'], [math, 'math'], [reading, 'reading'], [science, 'science']].forEach(el => {
                    if(el[0].score < 10){
                        el[0].score = 10
                    }
                    el[0].goal = action.payload.goals[el[1]];
                    el[0].guesses = action.payload.guesses[el[1]];
                    el[0].timing = action.payload.timing[el[1]];
                })

                const newState = {
                    english,
                    math,
                    reading,
                    science,
                    composite,
                    test: action.payload.test.id,
                    timing: action.payload.timing,
                };

                ['english', 'math', 'reading', 'science', 'composite'].forEach(section => {
                    let percentScore = Math.round((newState[section].score/36 * 100) * 6/5  - 60); /* Converts percent to scale of -60 to 60 */
                    let percentGoal = Math.round((newState[section].goal/36 * 100) * 6/5  - 60);
                    console.log('PERCENT GOAL', percentGoal);
                    updateCSSOffset(section, 'goal', percentGoal);
                    updateCSSOffset(section, 'score', percentScore);
                    [[percentGoal, 'goal'], [percentScore, 'score']].forEach(score => {
                        if(score[0] >= 40){
                            updateCSSColors(section, score[1], '#04B14D')
                        } else if(score[0] >= -15) {
                            updateCSSColors(section, score[1], 'rgb(208, 134, 22)')
                        } else {
                            updateCSSColors(section, score[1], '#D0161E')
                        }
                    })
                })

            return newState;
            
        default:
            return state;
    }
}
