const testGrader = {
    gradeTest(answers, test){
        // `Recieves answer object and test object for a test SECTION
        // Returns scorePkg object with wrong answers and score
        // `
    
        function checkAnswers(answers, key){
            // `Helper function takes an answers array and a key array
            // and returns an array of wrong answers
            // `
            const wrong = []
            key.forEach((el,i) => {
                if (el[0] !== answers[i]) { 
                    wrong.push(key[i]) // key has the format [['a', 'type'],['b', 'type']...etc]
                }
            })
            return wrong;
        }
    
        let wrongAnswers;
    
        switch(answers.type){
            case 'english':
                wrongAnswers = checkAnswers(answers.letters, test.english.questions);
                return {
                    wrong: wrongAnswers,
                    score: test.english.scorescale[75 - wrongAnswers.length]  // Gives score @ the index i where i == number of CORRECT answers
                }
            case 'math':
                wrongAnswers = checkAnswers(answers.letters, test.math.questions);
                return {
                    wrong: wrongAnswers,
                    score: test.math.scorescale[60 - wrongAnswers.length]  
                }
            case 'reading':
                wrongAnswers = checkAnswers(answers.letters, test.reading.questions);
                return {
                    wrong: wrongAnswers,
                    score: test.reading.scorescale[40 - wrongAnswers.length]  
                }
            case 'science':
                wrongAnswers = checkAnswers(answers.letters, test.science.questions);
                return {
                    wrong: wrongAnswers,
                    score: test.science.scorescale[40 - wrongAnswers.length]  
                }
            default:
                console.log('Err: Answers input not English, Math, Reading, or Science')
        }
    }
}



export default testGrader