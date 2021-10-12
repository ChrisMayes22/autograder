function parseDebrief(debrief){
    const splitDebrief = debrief.replace( /\n/g, " " ).replace("  ", " ").split( " " )
    const result = []
    const answers = ['(A)', '(B)', '(C)', '(D)', '(E)', '(F)', '(G)', '(H)', '(J)', '(K)']
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
// (C) Punctuation/Subject Verb Agreement:
// (J) Yes/No: Need to look at the followi
// (B) Parallelism: Look at previous words
// (H) Inference: F,G, J all introduce add
// (B) Conciseness/Pronouns: Replacing sub
// (J) Punctuation: 
// (D) Omit/Delete: Delete, since all othe
// (H) Adjectives/Adverbs: Describing Swea
// (B) Transitions: No transition needed. 
// (G) Placement: Place where author trans
// (D) Conciseness/Punctuation: Commas unn
// (F) Yes/No: G,H, J can be eliminated (i
// (A) Punctuation: Use offsetting comma t
// (H) Parallelism/Verb Tense: Look at pre
// (A) Inference: B and C can be eliminate

// Passage 2: Himalayan Garnets 

// (J) Punctuation: Don’t separate title f
// (C) Punctuation/Verb Tense: Offsetting 
// (F) Vocab in context: Go over what each
// (B) Yes/No: Needs to be Yes since addin
// (G) Inference: Pay attention to keyword
// (D) Parallelism/Subject Verb Agreement:
// (H) Vagueness/Word choice
// (B) Modifying clause: Need to make clea
// (F) Conciseness: Most concise answer wo
// (D) Conciseness/Punctuation: Only a lis
// (G) Vagueness: Choose most specific ans
// (A) Subject Verb Agreement: Referring t
// (F) Subject Verb Agreement: Referring t
// (C) Placement: Logical placement, trans
// (H) Yes/No: No, since focuses on the Hi

// Passage 3: Ports of Recall: Hudson Rive

// (D) Omit/Delete: Remind stud
// (H) Punctuation: two indepen
// (A) Inference: Need an answe
// (F) Punctuation/Conciseness
// (C) Inference - Clues tell 
// (H) Prepositions - 
// (A) Vocab in context - Comp
// (H) Punctuation/Conciseness
// (B) Inference - Look at the
// (G) Parallelism/Punctuation
// (D) Conciseness/Modifying c
// (H) Possessives - apostroph
// (D) Fixed Expressions- betw
// (F) Verb Tense/Parallelism 
// (D) Yes/No - Question tells on on sloops.

// Passage 4: Name That Tune

// (H) Vocab in context - The 
// (B) Placement - Introduces 
// (F) Punctuation - “Scientis
// (B) Verb Tense/Parallelism/
// (J) Omit/Delete/Conciseness
// (B) Yes/No - It is relevant
// (F) Modifying Clauses/Concis
// (A) Punctuation : explainin
// (H) Punctuation - These sen
// (D) Conciseness - classic c
// (J) Conciseness - Classic co
// (A) Prepositions/Elimination
// (H) Conciseness/Vocab in Con
// (B) Transitions - We want a 
// (J) Punctuation - The senten

// Passage 5: A Natural Comedia

// (C) Conciseness/Punctuation
// (F) Possessives/SVA - the 
// (D) Conciseness/Punctuation
// (F) Punctuation - “and more
// (B) Placement - focus on whe
// (G) Conciseness/Verb Tense/
// (D) Inference - Options A a
// (H) Transition Words - The p
// (A) Omit/Delete - “not only”
// (J) Punctuation - Options G 
// (A) Vocab in Context/Word Ch
// (G) Inference - G is the onl
// (B) Transitions - Paragraph 
// (F) Punctuation - F correctl
// (B) Yes/No - Would choose Y



// `))


// FOR MATH SECTIONS
// console.log(`   
// (D) 
// (F) 
// (E) 
// (H) 
// (C) 
// (H) 
// (C) 
// (K)
// (B)
// (H)
// (D)
// (G)
// (C)
// (K)
// (D)
// (F)
// (B)
// (G)
// (B)
// (J)
// (D)
// (K)
// (C)
// (F)
// (C)
// (H)
// (C)
// (F)
// (C)
// (G)
// (E)
// (J)
// (D)
// (G)
// (A)
// (K)
// (A)
// (G)
// (E)
// (J)
// (C)
// (J)
// (D)
// (K)
// (A)
// (J)
// (B)
// (F)
// (E)
// (F)
// (E)
// (G)
// (A)
// (G)
// (A)
// (J)
// (D)
// (F)
// (A)
// (K)


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
const scoreScale =`0 - 1 2 - 3 4 5 6 7 8 9 10-11 12 13 14-15 16 17 18-19 20 21-22 23-24 25 26-27 28 29-30 31 32 33 - 34 35 36 37 38 39-40`.replace( /\n/g, " " ).split( " " )
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
    1,  2,  3,  5,  6,  7,  8,  9, 10, 11,
    12, 12, 13, 14, 15, 15, 16, 17, 17, 18,
    19, 19, 20, 21, 22, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32, 33, 34, 34, 35,
    36
 ]


 console.log(score.length)
