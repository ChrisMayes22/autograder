function getColor(score, goal, classes){
    /**
     * @param {int} score
     * @param {int} score
     * @param {Object} classes; CSS module for the React component utilizing this function.
     */

    if(score >= goal){
        return classes.green;
    } else if(score/goal >= 0.8){
        return classes.orange
    } else {
        return classes.red
    }
}

export default getColor;