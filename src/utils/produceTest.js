// function parseDebrief(debrief){
//     splitDebrief = debrief.replace( /\n/g, " " ).replace("  ", " ").split( " " )
//     result = []
//     answers = ['(A)', '(B)', '(C)', '(D)', '(E)', '(F)', '(G)', '(H)', '(J)', '(K)']
//     for (let i = 0; i < splitDebrief.length; i++){
//         if(answers.includes(splitDebrief[i])){
//             result.push([splitDebrief[i].replace('(', "").replace(')', "")
//             .replace('F', 'A').replace('G', 'B').replace('H', 'C').replace('J', 'D').replace('K', 'E'), 
//             splitDebrief[i+1].toLowerCase()])
//         }
//     }
//     return result
// }

// // ENGLISH, READING, SCIENCE
// console.log(parseDebrief(`
// (A) Trend
// (F) Detail
// (C) Detail
// (H) Detail
// (B) Detail
// (J) Trend
// (D) Trend
// (G) Method
// (D) Detail
// (H) New Information
// (C) Detail
// (F) New Information
// (B) Trend
// (F) Detail
// (C) Detail
// (F) Detail
// (B) Trend
// (F) Method
// (A) Outside Information
// (J) Detail
// (D) Detail
// (H) Detail
// (A) Trend
// (J) Trend
// (B) Trend
// (J) Trend
// (B) Detail
// (G) Detail
// (D) Detail
// (F) Detail
// (C) Detail
// (H) Detail
// (B) Detail 

// (H) Trend
// (B) Method
// (H) Trend
// (D) Trend
// (F) Method
// (B) Detail
// (F) Outside Information



// `))


// FOR MATH SECTIONS
console.log(`   
(B) 
(J)
(C)
(J)
(D)
(G)
(D)
(H)
(B)
(G)
(A)
(G)
(B)
(H)
(C)
(G)
(B)
(F)
(E)
(H)
(E)
(J)
(E)
(H)
(E)
(H)
(D)
(F)
(D)
(J)
(C)
(K)
(D)
(J)
(B)
(H)
(A)
(F)
(A)
(K)
(A)
(J)
(D)
(F)
(B)
(F)
(C)
(F)
(C)
(G)
(C) 
(G)
(B)
(K)
(E)
(K)
(E)
(K)
(D)
(F)



`.split('').filter(el => {
    return ['A','B','C','D','E','F','G','H','J','K'].includes(el)
}).map((el, i) => {
    if(i < 20){
        return [el.replace('F', 'A').replace('G', 'B').replace('H', 'C').replace('J', 'D').replace('K', 'E'), '1-20'] 
    } else if( i < 40){
        return [el.replace('F', 'A').replace('G', 'B').replace('H', 'C').replace('J', 'D').replace('K', 'E'), '21-40']
    } else {
        return [el.replace('F', 'A').replace('G', 'B').replace('H', 'C').replace('J', 'D').replace('K', 'E'), '41- 60']
    }
}));

// FOR SCORE SCALES
/**
 * Takes a scorescale string and returns a scorescale array.
 * GO FROM 0 - 75 or REVERSE
 */
// const scoreScale =`0 - 1 2 - 3 4 5 6 7 8-9 10 11 12 13-14 15-16 17 18-19 20 21-22 23 24-25 26 27-28 29 30 31-32 - 33 34 35 36 - 37 38 39-40`.replace( /\n/g, " " ).split( " " )
//     .map(el => {
//         if(el.length === 2){
//             return [el];
//         } else {
//             return el.split('-')
//         }
//     });

// const newScoreScale = []

// scoreScale.forEach((el, i) => {
//     console.log(el);
//     if(el.includes('-')){
//         console.log('skipped');
//     } else if (el.length === 1) {
//         newScoreScale.push(i+1)
//     } else {
//         let start = parseInt(el[0]);
//         const end = parseInt(el[1]);
//         while(end >= start){
//             newScoreScale.push(i+1);
//             start++
//         }
//     }
// })

// console.log(newScoreScale);

const score = [
    [ 'B', '1-20' ],   [ 'D', '1-20' ],   [ 'C', '1-20' ],
    [ 'D', '1-20' ],   [ 'D', '1-20' ],   [ 'B', '1-20' ],
    [ 'D', '1-20' ],   [ 'C', '1-20' ],   [ 'B', '1-20' ],
    [ 'B', '1-20' ],   [ 'A', '1-20' ],   [ 'B', '1-20' ],
    [ 'B', '1-20' ],   [ 'C', '1-20' ],   [ 'C', '1-20' ],
    [ 'B', '1-20' ],   [ 'B', '1-20' ],   [ 'A', '1-20' ],
    [ 'E', '1-20' ],   [ 'C', '1-20' ],  [ 'E', '21-40' ],
   [ 'D', '21-40' ],  [ 'E', '21-40' ],  [ 'C', '21-40' ],
   [ 'E', '21-40' ],  [ 'C', '21-40' ],  [ 'D', '21-40' ],
   [ 'A', '21-40' ],  [ 'D', '21-40' ],  [ 'D', '21-40' ],
   [ 'C', '21-40' ],  [ 'E', '21-40' ],  [ 'D', '21-40' ],
   [ 'D', '21-40' ],  [ 'B', '21-40' ],  [ 'C', '21-40' ],
   [ 'A', '21-40' ],  [ 'A', '21-40' ],  [ 'A', '21-40' ],
   [ 'E', '21-40' ], [ 'A', '41- 60' ], [ 'D', '41- 60' ],
  [ 'D', '41- 60' ], [ 'A', '41- 60' ], [ 'B', '41- 60' ],
  [ 'A', '41- 60' ], [ 'C', '41- 60' ], [ 'A', '41- 60' ],
  [ 'C', '41- 60' ], [ 'B', '41- 60' ], [ 'C', '41- 60' ],
  [ 'B', '41- 60' ], [ 'B', '41- 60' ], [ 'E', '41- 60' ],
  [ 'E', '41- 60' ], [ 'E', '41- 60' ], [ 'E', '41- 60' ],
  [ 'E', '41- 60' ], [ 'D', '41- 60' ], [ 'A', '41- 60' ]
]

 console.log(score.length)