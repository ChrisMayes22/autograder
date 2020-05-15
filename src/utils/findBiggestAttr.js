function findBiggestAttr(obj){
    /* Accepts an object and returns the attribute
    with the largest NUMERIC value.
    */
    const keys = Object.keys(obj);
    let output;
    for(let i = 0; i < keys.length; i++){
        if(!output){
            output = keys[i]
        } else if(obj[keys[i]] > output){
            output = keys[i]
        }
    }
    return output;
}

export default findBiggestAttr