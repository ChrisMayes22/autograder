function updateGoals(score, goal){
    /* Accepts a test score and goal as ints
    and returns an array of the form [score, updatedGoal].
    */

    score = Math.round(parseInt(score));
    goal = Math.round(parseInt(goal));

    if(score === 36){
        return null
    } else if(score >= goal){
        switch(score){
            case score < 20:
                return score + 3;
            case score > 19 && score < 32:
                return score + 2;
            default:
                return score + 1
        }
    } else {
        return goal
    }
}

export default updateGoals;