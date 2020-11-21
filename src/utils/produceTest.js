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
// (A) Punctuation → c
// (C) Inference → ne
// (B) Inference → ne
// (A) Omit / Delete 
// (B) Conciseness → 
// (A) Inference → ne
// (B) Punctuation → 
// (D) Transitions → 
// (C) Punctuation →
// (B) Placement → se
// (D) Subject / Verb

// Passage 2
// (A) Punctuation → 
// (B) Vocab in Conte
// (D) Placement → Si
// (C) Punctuation → 
// “By regulating wat
// (C) Yes/No → First
// (A) Vocab in Conte
// (B) Subject/Verb A
// (A) Verb Tense → W
// (A) Inference → In
// (C) Inference → Ou
// (C) Punctuation → 

// Passage 3
// (A) Possessives/Co
// (B) Prepositions 
// (C) Vocab in Conte
// (D) Pronouns → No 
// (B) Ambiguity/Vagu
// (C) Keep/Delete → 
// (B) Verb Tense/Par
// (B) Placement → Th
// (D) Inference → On
// (C) Conciseness → 
// (A) Inference → Ou

// Passage 4
// (C) Inference → Th
// (D) Punctuation → 
// (B) Punctuation → 
// (C) Inference → In
// (C) Passive Voice 
// (B) Transitions → 
// (D) Inference → If
// (A) Inference → Th
// (D) Vocab in Conte
// (C) Prepositions/P
// (D) Pronouns → The


// `))


// FOR MATH SECTIONS
console.log(`   
(C) 
(A) 
(D) 
(C) 
(C) 
(D) 
(A) 
(B) 
(B) 
(C) 
(A) 
(C) 
(B) 
(C) 
(B) 
(D) 
(D) 
(B) 
(D) 
(B) 
(B) 
(A) 
(D) 
(C) 
(A) 
(C) 
(A) 
(D) 
(A) 
(D) 
11 Simplify → 
10 Simplify →
½, .5 Simplif
2 Simplify → 
20 Simplify →
65 Simplify → 
88 Simplify → 1 hour.
2.1,21/10 Sim





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