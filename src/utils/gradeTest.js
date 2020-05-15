function gradeTest(answers, section){
    /* Accepts array of student answers and a test section object
    (e.g. a11.english, a11.math, etc). Returns an object w/ wrong answers, 
    types of questions missed and how often, & a scaled score.
    */

    const scorePkg = {
        wrong: [],
        types: {},
        score: null
    }

    answers.forEach((el, i) => {
        if(el !== section.questions[i][0]) {   // section...[0] is right answer
            scorePkg.wrong.push(`#${i+1}`); 
            if(!scorePkg.types[section.questions[i][1]]){ // section...[1] is question type
                scorePkg.types[section.questions[i][1]] = 1
            } else {
                scorePkg.types[section.questions[i][1]] += 1;
            }
        }
    })

    const rawScore = section.questions.length - scorePkg.wrong.length;
    scorePkg.score = section.scorescale[rawScore]

    return scorePkg
}

export default gradeTest