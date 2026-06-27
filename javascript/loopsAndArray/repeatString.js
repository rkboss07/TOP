const repeatString = function(string, times) {
    string2=""
    if (times<0) return "ERROR";
    for (let i = 0; i < times; i++) string2+=string;
    return string2;
};

// Do not edit below this line
module.exports = repeatString;