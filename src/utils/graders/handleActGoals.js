import updateCSSOffset from '../CSShandlers/updateCSSOffset'
import updateCSSColors from '../CSShandlers/updateCSSColors'

function handleActGoals(state){

    console.log('state', state);

    ['english', 'math', 'reading', 'science', 'composite'].forEach(sectionKey => {
        let percentScore = Math.round((state[sectionKey].score/36 * 100) * 6/5  - 60); /* Converts percent to scale of -60 to 60 */
        let percentGoal = Math.round((state[sectionKey].goal/36 * 100) * 6/5  - 60);

        updateCSSOffset(sectionKey, 'goal', percentGoal);
        updateCSSOffset(sectionKey, 'score', percentScore);
        [[percentGoal, 'goal'], [percentScore, 'score']].forEach(score => {
            if(score[0] >= 40){
                updateCSSColors(sectionKey, score[1], '#04B14D')
            } else if(score[0] >= -15) {
                updateCSSColors(sectionKey, score[1], 'rgb(208, 134, 22)')
            } else {
                updateCSSColors(sectionKey, score[1], '#D0161E')
            }
        })
    })
}

export default handleActGoals
    