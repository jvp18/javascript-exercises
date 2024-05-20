const removeFromArray = function(array, ...items) {
    newArray = []
    for (const item of array) {
        if (!items.includes(item)) {
            newArray.push(item)
        } 
    } 
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
