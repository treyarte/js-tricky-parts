/**
 * 
 * @param {*} total
 * write a function that given a number will return a new function and given no arguments will return 
 * the sum of the numbers passed in. 
 */
function curriedAdd(total) {
    let sum = 0;

    function addToSum(total){
        
        if(total){
            sum += total
            return addToSum;
        } else {
            return sum
        }
    }

    return addToSum(total)
   
}

module.exports = { curriedAdd };
