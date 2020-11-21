import updateCSSOffset from '../CSShandlers/updateCSSOffset'
import updateCSSColors from '../CSShandlers/updateCSSColors'

function handleActGoals(state){
    const sectionKeys = ['satReading', 'satWriting', 'satMath1', 'satMath2']

    sectionKeys.forEach(sectionKey => {
        console.log('SECTION KEY', sectionKey)
        updateCSSOffset(sectionKey, 'goal', 0.5);
        updateCSSOffset(sectionKey, 'score', 0.5);
        ['score', 'goal'].forEach(score => {
            if((state[sectionKey].score >= state[sectionKey].goal) || score === 'goal'){
                updateCSSColors(sectionKey, score, '#04B14D')
            } else if(state[sectionKey].score >= (state[sectionKey].goal - 200)) {
                updateCSSColors(sectionKey, score, 'rgb(208, 134, 22)')
            } else {
                updateCSSColors(sectionKey, score, '#D0161E')
            }
        })
    })
}

export default handleActGoals