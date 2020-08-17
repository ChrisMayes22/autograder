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


// (C) Detail
// (F) Detail
// (B) Trend
// (J) Detail
// (D) Detail 
// (F) New Information 
// (B) Detail
// (J) Method
// (D) Method
// (J) Detail
// (A) Outside Information
// (F) Trend
// (B) Trend
// (H) Detail
// (A) New Information
// (F) Method 
// (A) Method
// (J) Detail 
// (B) Method
// (H) Detail
// (D) Detail
// (F) Detail
// (B) Detail
// (H) Trend
// (C) Detail
// (F) Detail
// (A) New Information
// (H) detail
// (B) Trend
// (H) New Information 
// (D) New Information
// (J) Detail
// (D) New Information
// (F) Trend 
// (B) Inference 
// (G) Trend
// (B) New Information
// (H) Outside Information
// (D) Detail
// (H) Trend





// `))


// FOR MATH SECTIONS
console.log(`   
(A)
(K)
(D)
(G)
(C)
(F)
(A)
(K)
(E)
(F)
(D)
(K)
(A)
(K)
(D)
(H)
(B)
(K)
(B)
(H)
(D)
(G)
(C)
(G)
(A)
(G)
(C)
(J)
(C)
(G)
(B)
(G)
(B)
(H)
(A)
(K)
(C)
(G)
(D)
(J) 
(E) 
(J) 
(E) 
(F) 
(D) 
(H) 
(C) 
(J) 
(D) 
(G) 
(B) 
(H) 
(D) 
(J)
(A)
(F)
(A)
(K)
(C)
(K)



`.split('').filter(el => {
    return ['A','B','C','D','E','F','G','H','J','K'].includes(el)
}).map((el, i) => {
    if(i < 21){
        return [el.replace('F', 'A').replace('G', 'B').replace('H', 'C').replace('J', 'D').replace('K', 'E'), '1-20'] 
    } else if( i < 42){
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
// const scoreScale =`0 - 1 2 - 3 4 5 6 7 8 9 10-11 12 13-14 15 16-17 18 19-20 21 22-23 24 25-26 27 28-29 30 31 32 33 - 34 35 36 37 38 39-40`.replace( /\n/g, " " ).split( " " )
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
    [ 'A', '1-20' ],   [ 'E', '1-20' ],   [ 'D', '1-20' ],
    [ 'B', '1-20' ],   [ 'C', '1-20' ],   [ 'A', '1-20' ],
    [ 'A', '1-20' ],   [ 'E', '1-20' ],   [ 'E', '1-20' ],
    [ 'A', '1-20' ],   [ 'D', '1-20' ],   [ 'E', '1-20' ],
    [ 'A', '1-20' ],   [ 'E', '1-20' ],   [ 'D', '1-20' ],
    [ 'C', '1-20' ],   [ 'B', '1-20' ],   [ 'E', '1-20' ],
    [ 'B', '1-20' ],   [ 'C', '1-20' ],   [ 'D', '1-20' ],
   [ 'B', '21-40' ],  [ 'C', '21-40' ],  [ 'B', '21-40' ],
   [ 'A', '21-40' ],  [ 'B', '21-40' ],  [ 'C', '21-40' ],
   [ 'D', '21-40' ],  [ 'C', '21-40' ],  [ 'B', '21-40' ],
   [ 'B', '21-40' ],  [ 'B', '21-40' ],  [ 'B', '21-40' ],
   [ 'C', '21-40' ],  [ 'A', '21-40' ],  [ 'E', '21-40' ],
   [ 'C', '21-40' ],  [ 'B', '21-40' ],  [ 'D', '21-40' ],
   [ 'D', '21-40' ],  [ 'E', '21-40' ],  [ 'D', '21-40' ],
  [ 'E', '41- 60' ], [ 'A', '41- 60' ], [ 'D', '41- 60' ],
  [ 'C', '41- 60' ], [ 'C', '41- 60' ], [ 'D', '41- 60' ],
  [ 'D', '41- 60' ], [ 'B', '41- 60' ], [ 'B', '41- 60' ],
  [ 'C', '41- 60' ], [ 'D', '41- 60' ], [ 'D', '41- 60' ],
  [ 'A', '41- 60' ], [ 'A', '41- 60' ], [ 'A', '41- 60' ],
  [ 'E', '41- 60' ], [ 'C', '41- 60' ], [ 'E', '41- 60' ]
]

 console.log(score.length)