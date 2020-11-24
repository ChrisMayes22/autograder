// TODO: Combine ACT and SAT Utils
import gradeTest from './gradeTest';

function getSatScore(studentAnswers, test, goals, timing, guesses){
    console.log('GUESSES', guesses)
    const scoreReport = {}
    const standardSubjects = ['satReading', 'satWriting']
    standardSubjects.forEach(subject => {
        scoreReport[subject] = gradeTest(studentAnswers[subject], test[subject])
        scoreReport[subject].goal = goals[subject]
        scoreReport[subject].timing = timing[subject]
        scoreReport[subject].guesses = guesses[subject]
    })


    const mathAnswers = studentAnswers['satMath1'].concat(studentAnswers['satMath2'])
    const mathTest =  {
        questions: [...test['satMath1'].questions, ...test['satMath2'].questions],
        scoreScale: [...test['satMath1'].scoreScale, ...test['satMath2'].scoreScale]
    }
    const mathReport = gradeTest(mathAnswers, mathTest)

    const math1Errors = []
    const math2Errors = []

    mathReport.wrong.forEach(questionNum => {
        if(questionNum <= "#20"){
            math1Errors.push(questionNum)
        } else {
            math2Errors.push(questionNum)
        }
    })

    const satMath1 = {
        score: mathReport.score,
        goal: goals.satMath1,
        timing: timing.satMath1,
        wrong: math1Errors,
        guesses: guesses.satMath1,
        types: {}
    }

    const mathTypeKeys = Object.keys(mathReport.types)

    mathTypeKeys.forEach(key => {
        if(key.includes('no-calc')){
            satMath1.types[key] = mathReport.types[key]
        }
    })

    const satMath2 = {
        score: mathReport.score,
        goal: goals.satMath2,
        timing: timing.satMath2,
        wrong: math2Errors,
        guesses: guesses.satMath2,
        types: {}
    }

    console.log('MATH 2', satMath2)

    mathTypeKeys.forEach(key => {
        if(!key.includes('no calculator')){
            satMath2.types[key] = mathReport.types[key]
        } else {
            satMath1.types[key] = mathReport.types[key]
        }
    })

    console.log('MATH1', satMath1, 'MATH2', satMath2)

    scoreReport.satMath1 = satMath1;
    scoreReport.satMath2 = satMath2;

    const composite = {
        goal: goals.satReading + goals.satWriting + goals.satMath1,
        score: scoreReport.satReading.score + scoreReport.satWriting.score + scoreReport.satMath1.score
    }

    scoreReport.composite = composite;
    
    return scoreReport
}

// function getActScore(gradedTests, goals, timing, guesses){
//     let composite = 0;
//     const scoreReport = {}
//     const subjects = ['english', 'math', 'reading', 'science']

//     gradedTests.forEach((report, i) => {
//         if(report.score < 10){
//             report.score = 10
//         }
        
//         composite += report.score
//         scoreReport[subjects[i]] = report
//     })

//     subjects.forEach(sectionKey => {
//         scoreReport[sectionKey].guess = guesses[sectionKey]
//         scoreReport[sectionKey].timing = timing[sectionKey]
//         scoreReport[sectionKey].goal = goals[sectionKey]
//     })

//     console.log('COMPOSITE', composite)

//     composite = Math.round(composite / 4)

//     scoreReport.composite = {score: composite}

//     scoreReport.composite.goal = ( scoreReport.english.score + scoreReport.english.score + scoreReport.english.score + scoreReport.english.score ) / 4
    
//     return scoreReport
// }

export default getSatScore