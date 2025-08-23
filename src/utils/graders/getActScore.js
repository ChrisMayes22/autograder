import gradeTest from './gradeTest';

function getActScore(studentAnswers, test, goals, timing, guesses){
    let composite = 0;
    const scoreReport = {}
    const subjects = ['english', 'math', 'reading', 'science']

    subjects.forEach(subject => {
        if(studentAnswers[subject]){
            scoreReport[subject] = gradeTest(studentAnswers[subject], test[subject])
            if(scoreReport[subject].score < 10){
                scoreReport[subject].score = 10
            }
            scoreReport[subject].goal = goals[subject]
            scoreReport[subject].timing = timing[subject]
            scoreReport[subject].guesses = guesses[subject]
            composite += scoreReport[subject].score
        }
    
    })

    
    if(scoreReport.science){
        composite = Math.round(composite / 4)
        scoreReport.composite = {score: composite}
        scoreReport.composite.goal = ( scoreReport.english.goal + scoreReport.math.goal + scoreReport.reading.goal + scoreReport.science.goal ) / 4
    } else {
        composite = Math.round(composite / 3)
        scoreReport.composite = {score: composite}
        scoreReport.composite.goal = ( scoreReport.english.goal + scoreReport.math.goal + scoreReport.reading.goal) / 3
    }

    
    console.log('SCORE REPORT', scoreReport)

    return scoreReport
}


export default getActScore