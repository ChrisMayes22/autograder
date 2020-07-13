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
const scoreScale =`0 - 1 2 - 3 4 5 6 7-8 9 10 11 12 13 14 15-16 17 18 19-20 21-22 23-24 25 26-27 28-29
30 31 32 33 34 35 36 - 37 38 39-40`.replace( /\n/g, " " ).split( " " )
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

const score =[
    1,  3,  4,  6,  7,  8,
    9, 10, 10, 11, 12, 13,
   14, 15, 16, 17, 17, 18,
   19, 20, 20, 21, 21, 22,
   22, 23, 24, 24, 25, 25,
   26, 27, 28, 29, 30, 31,
   32, 34, 35, 36, 36
 ]

 console.log(score.length)