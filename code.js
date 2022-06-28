/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    /** a variale that default to empty string.
    * Loop through the characters .(char, index).
    *    Loop Through the strs.(str). 
    *   if str[index] == char
    * Otherwise we return prefix */
    
    let prefix = ''
    if(strs.length === 0) return prefix;
    for (let i = 0; i < strs[0].length; i++){
        const character = strs[0][i]
        for(let j = 0; j < strs.length; j++){
            if (strs[j][i] !== character) return prefix
        }
        prefix = prefix + character
    }
    
    return prefix
}
