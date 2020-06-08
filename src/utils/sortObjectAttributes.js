function sortObjectAttributes(keys, obj){
     /**
      * @param {Array} keys; all keys are strings
      * @param {Object} obj; all values are ints
      * @return {Array}; keys are sorted according to their value.
      * TODO: Could this be rewritten to just use Object.keys(obj).sort((a,b)...)?
      */

   return keys.sort((a,b) => {
        return obj[b] - obj[a]
   })
}

export default sortObjectAttributes;