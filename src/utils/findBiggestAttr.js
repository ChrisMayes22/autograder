function findBiggestAttr(obj){
    /**
     * @param {Object} obj; keys are strings, values ints
     * @return {string}
     * returns the key of the attribute with the largest value
    */
    const keys = Object.keys(obj);
    let output;
    for(let i = 0; i < keys.length; i++){
        if(!output){
            output = keys[i]
        }
        if(obj[keys[i]] > obj[output]){
            output = keys[i]
        }
    }
    return output;
}

export default findBiggestAttr