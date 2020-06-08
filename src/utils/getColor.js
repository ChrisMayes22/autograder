function getColor(score, goal, classes){
    /**
     * @param {int} score
     * @param {int} score
     * @param {Object} classes; CSS module for the React component utilizing this function.
     */

    if(score >= goal || score >= 34 || score === (goal - 1)){
        return classes.green;
    } else if(score + 4 >= goal){
        return classes.orange
    } else {
        return classes.red
    }
}

export default getColor;