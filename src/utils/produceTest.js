function parseDebrief(debrief){
    splitDebrief = debrief.replace( /\n/g, " " ).replace("  ", " ").split( " " )
    result = []
    answers = ['(A)', '(B)', '(C)', '(D)', '(E)', '(F)', '(G)', '(H)', '(J)', '(K)']
    for (let i = 0; i < splitDebrief.length; i++){
        if(answers.includes(splitDebrief[i])){
            result.push([splitDebrief[i].replace('(', "").replace(')', "")
            .replace('F', 'A').replace('G', 'B').replace('H', 'C').replace('J', 'D').replace('K', 'E'), 
            splitDebrief[i+1].toLowerCase()])
        }
    }
    result
    return result
}
console.log(`   


`.split('').filter(el => {
    return ['A','B','C','D','E','F','G','H','J','K'].includes(el)
}).map((el, i) => [el, '']));

/**
 * Takes a scorescale string and returns a scorescale array.
 * GO FROM 0 - 75 or REVERSE
 */
const scoreScale =`0-1 2-3 4-5 6 7-9 10-11 12-14 15-16 17-19 20-21 22-24 25-26 27-28 29-30 31-34 35-36 37-38 39-40
41-42 43-45 46-48 49-50 51-53 54-55 56-57 58-59 60 61-62 63 64-65 66 67 68-69 70 71-73 74-75`.replace( /\n/g, " " ).split( " " )
    .map(el => {
        if(el.length === 2){
            return [el];
        } else {
            return el.split('-')
        }
    });

const newScoreScale = []

scoreScale.forEach((el, i) => {
    console.log(el);
    if(el.includes('-')){
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