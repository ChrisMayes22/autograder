function gradeTest(answers, section){
    /**
     * @param {Array} answers; array of student's answers
     * @param {string} section; i.e. "English" "Math" etc
     * @return {Object} contains wrong answers, types of questions 
     * missed (and how often missed), & a scaled score
     */ 

    const scorePkg = {
        wrong: [],
        ungraded:[],
        types: {},
        score: null
    }

    answers.forEach((el, i) => {
        console.log('questions:', section.questions);
        console.log('answers', answers)
        if(!section.questions[i][2]) {  // questions is ungraded
            const wasCorrect = el !== section.questions[i][0] ? 'correct' : 'wrong';
            scorePkg.ungraded.push(`#${i+1}: ${wasCorrect}`)
        } else if(el !== section.questions[i][0]) {   // section...[0] is right answer
            scorePkg.wrong.push(`#${i+1}`); 
            if(!scorePkg.types[section.questions[i][1]]){ // section...[1] is question type
                scorePkg.types[section.questions[i][1]] = 1
            } else {
                scorePkg.types[section.questions[i][1]] += 1;
            }
        }
    })

    const rawScore = section.questions.length - (scorePkg.wrong.length + scorePkg.ungraded.length);
    scorePkg.score = section.scoreScale[rawScore]

    return scorePkg
}

export default gradeTest