import * as actionTypes from '../actions/actions';
import resetCSSVars from '../utils/CSShandlers/resetCSSVars'
import getSatScore from '../utils/graders/getSatScore';
import getActScore from '../utils/graders/getActScore';
import handleActGoals from '../utils/graders/handleActGoals';
import handleSatGoals from '../utils/graders/handleSatGoals';


const initialState = {
    english: null,
    math: null,
    reading: null,
    science: null
}

export function rootReducer(state=initialState, action){
    switch(action.type){
        case actionTypes.RECORD_STUDENT_RES:

                resetCSSVars();
                
                const { studentAnswers, test, timing, goals, guesses } = action.payload
                const sections = Object.keys(studentAnswers)
                let scoreReport = {};
                if(sections.includes('satWriting')){
                    scoreReport = getSatScore(studentAnswers, test, goals, timing, guesses)
                } else {
                    scoreReport = getActScore(studentAnswers, test, goals, timing, guesses)
                }
            
                const newState = {
                    ...scoreReport,
                    test, 
                    timing,
                    availableSections: sections
                };

                if(sections.includes('satWriting')){
                    handleSatGoals(newState)
                } else {
                    handleActGoals(newState)
                }


            // return newState
            return newState
            
        default:
            return state;
    }
}
