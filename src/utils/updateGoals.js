function updateGoals(score, goal){
    /* Deprecated. Will be removed before next exam. */

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