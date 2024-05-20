const leapYears = function(year) {
    if (year%100){
        if (year%4) {
            return false
        } else {
           return true
        }
    } else {
        if (year%400) {
            return false
        } else {
            return true
        }
    }
};

// Do not edit below this line
module.exports = leapYears;
