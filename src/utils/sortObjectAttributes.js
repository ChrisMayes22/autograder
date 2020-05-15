function sortObjectAttributes(keys, obj){
    /* Accepts an array of keys and an object. Returns
    an array of keys sorted by the NUMERIC value of the 
    associated attribute in the object.
    */
   return keys.sort((a,b) => {
        return obj[b] - obj[a]
   })
}

export default sortObjectAttributes;