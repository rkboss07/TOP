function add7 (num) {
    return num + 7;
}
console.log(add7(10));

function multiply (num1, num2) {
    return num1 * num2;
}
console.log(multiply(5,3));

function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("hello world"));

function lastLetter (str) {
    return str.charAt(str.length - 1);
}
console.log(lastLetter("abcd"));