function getColor(score, goal, classes){
    /*  Accepts score and goal as ints,
        returns CSS class for appropriate color

        classes should always be passed in and gives
        function access to the component's CSS module
    */
    if(score >= goal || score >= 34 || score === goal + 1){
        return classes.green;
    } else if(score + 4 >= goal){
        return classes.orange
    } else {
        return classes.red
    }
}

export default getColor;