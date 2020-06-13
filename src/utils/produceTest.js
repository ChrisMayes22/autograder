/**
 * Takes a string of capitalized answers
 * Returns an array of arrays, where
 * the first term of each array is the answer
 * And the second term if an empty string
 * 
 * @param string MUST contain no capital letters but the answers.
 * Answers must be capitalized.
 * All other chars can/will be ignored.
 */
console.log(`   


`.split('').filter(el => {
    return ['A','B','C','D','E','F','G','H','J','K'].includes(el)
}).map((el, i) => [el, '']));

/**
 * Takes a scorescale string and returns a scorescale array.
 */
const scoreScale =`

` .split('\n')
    .map(el => {
        if(el.length === 2){
            return [el];
        } else {
            return el.split('-')
        }
    }).reverse();

const newScoreScale = []

scoreScale.forEach((el, i) => {
    console.log(el);
    if(el.includes('—')){
        console.log('skipped');
    } else if (el.length === 1) {
        newScoreScale.push(i+1)
    } else {
        let start = parseInt(el[0]);
        const end = parseInt(el[1]);
        while(end >= start){
            newScoreScale.push(i+1);
            start++
        }
    }
})

console.log(newScoreScale);