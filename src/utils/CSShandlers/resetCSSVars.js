const resetCSSVars = () =>{
    ['english', 'math', 'reading', 'science', 'composite'].forEach(section=> {
        document
            .documentElement.style.setProperty(`--${section}-score-offset`, 0)
        document
            .documentElement.style.setProperty(`--${section}-goal-offset`, 0)
        document
            .documentElement.style.setProperty(`--${section}-score-color`, 'rgb(208, 134, 22)')
        document
            .documentElement.style.setProperty(`--${section}-goal-color`, 'rgb(208, 134, 22)')
    })
}

export default resetCSSVars;