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
// (A) Detail →Looking
// (H) Detail → “Same ti
// (D) Trend →Again look
// (H) Detail →The para
// (B) Trend →The easie
// (G) Detail →We have 


// Passage 2
// (D) Detail →Two part q
// (H) Trend →Another t
// (A) Trend →We’re spec
// (H) Detail →Just a q
// (A) Method →The last
// (F) Detail →A little

// Passage 3
// (D) Method→The quest
// (G) Method →Another M
// (C) New Info →Accord
// (G) Method→We have t
// (A) Detail →Careful,
// (J) Outside Info →We
// (B) New Info →Accord

// Passage 4
// (J) Detail →We need 
// (C) Method →Which qu
// (G) Trend →NP1 is th
// (C) Method →Differen
// (F) Detail →The para
// (C) New Info →They th
// (G) Outside Info →Lo

// Passage 5 - TEXT HEA
// (B) Detail →Individu
// (G) Inference →Stude
// (A) Outside Info →We
// (J) New Info →Studen
// (B) Inference →We ar
// (F) Inference →Stude
// (C) Trend →Individua

// Passage 6
// (F) Detail →Hottest p
// (A) New Info →For ea
// (G) New Info →Withou
// (A) New Info →Adding 
// (J) Method →Asking f
// (A) Method →200 plan
// (J) New Info →We’re g




// `))


// FOR MATH SECTIONS
// console.log(`   
// (D)
// (F)
// (B)
// (F)
// (D)
// (K)
// (B)
// (K)
// (B)
// (H)
// (B)
// (J)
// (B)
// (F)
// (C)
// (H)
// (B)
// (H)
// (A)
// (K)
// (C)
// (K)
// (B)
// (K)
// (C)
// (F)
// (E)
// (H)
// (B)
// (J)
// (E)
// (J)
// (D)
// (J)
// (E)
// (F)
// (D)
// (K)
// (B)
// (G)
// (E)
// (H)
// (A)
// (J)
// (D)
// (G)
// (B)
// (J)
// (B)
// (J)
// (D)
// (F)
// (C)
// (K)
// (E)
// (K)
// (A)
// (H)
// (D)
// (H)

// `.split('').filter(el => {
//     return ['A','B','C','D','E','F','G','H','J','K'].includes(el)
// }).map((el, i) => {
//     if(i < 21){
//         return [el.replace('F', 'A').replace('G', 'B').replace('H', 'C').replace('J', 'D').replace('K', 'E'), '1-20'] 
//     } else if(i < 41) {
//         return [el.replace('F', 'A').replace('G', 'B').replace('H', 'C').replace('J', 'D').replace('K', 'E'), '21-40']
//     } else { 
//         return [el.replace('F', 'A').replace('G', 'B').replace('H', 'C').replace('J', 'D').replace('K', 'E'), '41-60']
//     }
// }));

// console.log(` 6
// 146
// 2500
// 34
// 2.5 or 5/2 
// 6.25 or 25/4
// 293
// 9
// ` )

// FOR SCORE SCALES
/**
 * Takes a scorescale string and returns a scorescale array.
 * GO FROM 0 - 75 or REVERSE
 */
const scoreScale =`0-1 2 3-4 5 6-7 8-9 10-11 12-13 14-16 17-20 21-23 24-26 27-28 29-32 33-36 37-38 39-41 42-43 44-46 47-49 50-52 53-54 55-57 58-59 60-61 62 63 64 65 66 67 68 69 70 71-73 74-75`.replace( /\n/g, " " ).split( " " )
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

const score = [
    1,  1,  2,  3,  3,  4,  5,  5,  6,  6,  7,  7,
    8,  8,  9,  9,  9, 10, 10, 10, 10, 11, 11, 11,
    12, 12, 12, 13, 13, 14, 14, 14, 14, 15, 15, 15,
    15, 16, 16, 17, 17, 17, 18, 18, 19, 19, 20, 20,
    20, 21, 21, 21, 22, 22, 23, 23, 23, 24, 24, 25,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 35,
    35, 36, 36
 ]


 console.log(score.length)
