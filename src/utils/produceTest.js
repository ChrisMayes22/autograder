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

// // ENGLISH, READING, SCIENCE
// console.log(parseDebrief(`
// Writing and Language 
// Passage 1
//  (A) Parallelism
//  (D) Inference 
//  (A) Punctuation
//  (A) Punctuation
//  (D) Inference
//  (A) Transitions
//  (C) Modifying Clauses
//  (D) Conciseness 
//  (D) Omit/Delete
//  (C) Punctuation
//  (C) Inference

// Passage 2
//  (D) Parallelism 
//  (A) Inference 
//  (D) Possessives
//  (C) Conciseness 
//  (B) Inference
//  (B) Vocab in Context
//  (A) Vocab in Context
//  (D) Punctuation
//  (B) Modifying Clauses
//  (C) Inference
//  (B) Inference

// Passage 3
//  (C) Subject/Verb Agreement
//  (A) Conciseness 
//  (A) Punctuation
//  (B) Prepositions 
//  (D) Inference
//  (B) Punctuation
//  (C) Inference 
//  (C) Inference/Transitions
//  (B) Inference
//  (B) Pronouns
//  (A) Inference

// Passage 4
//  (C) Inference/Transitions 
//  (D) Inference
//  (C) Possessives
//  (B) Subject/Verb Agreement
//  (C) Inference
//  (C) Punctuation
//  (D) Punctuation
//  (A) Vocab in Context
//  (D) Conciseness
//  (A) Prepositions
//  (D) Placement 




// `))


// FOR MATH SECTIONS
console.log(`   
(B) 
 (A)
 (B)
 (C)
 (C)
 (D)
 (B)
 (C)
 (C)
 (D)
 (A)
 (C)
 (C)
 (A)
 (B)
 (C)
 (D)
 (C)
 (D)
 (C)
 (B)
 (D)
 (A)
 (B)
 (A)
 (D)
 (A)
 (D)
 (D)
 (A)




// `.split('').filter(el => {
    return ['A','B','C','D','E','F','G','H','J','K'].includes(el)
}).map((el, i) => {
    if(i < 16){
        return [el.replace('F', 'A').replace('G', 'B').replace('H', 'C').replace('J', 'D').replace('K', 'E'), '1-15'] 
    } else if(i < 31) {
        return [el.replace('F', 'A').replace('G', 'B').replace('H', 'C').replace('J', 'D').replace('K', 'E'), '16-30']
    } else { 
        return []
    }
}));

console.log(` 6
146
2500
34
2.5 or 5/2 
6.25 or 25/4
293
9
` )

// FOR SCORE SCALES
/**
 * Takes a scorescale string and returns a scorescale array.
 * GO FROM 0 - 75 or REVERSE
 */
// const scoreScale =`0 - 1 - 2 3 - 4 5 6 7 8 9 10-11 12 13 14-15 16-17 18 19-20 21-22 23-24 25-26 27-28 29-30 31 32 33 34 35 - 36 37 - 38 39-40`.replace( /\n/g, " " ).split( " " )
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

// const score = [
//     1,  3,  5,  6,  8,  9,
//    10, 11, 12, 13, 14, 14,
//    15, 16, 17, 17, 18, 18,
//    19, 20, 20, 21, 21, 22,
//    22, 23, 23, 24, 24, 25,
//    25, 26, 27, 28, 29, 30,
//    32, 33, 35, 36, 36
//  ]

//  console.log(score.length)