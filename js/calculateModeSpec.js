var shallowEqualArrays = require('shallow-equal/arrays');
var calc = require("./calculateMode")

console.log(shallowEqualArrays(calc.calculateMode([1,2,3,3]),[3]))
console.log(shallowEqualArrays(calc.calculateMode([4.5, 0, 0]),[0]))
console.log(shallowEqualArrays(calc.calculateMode([1.5, -1, 1, 1.5]),[1.5]))
console.log(shallowEqualArrays(calc.calculateMode([1,1,2,2]),[1,2]))
console.log(shallowEqualArrays(calc.calculateMode([1,2,3]),[1,2,3]))
console.log(shallowEqualArrays(calc.calculateMode(["who", "what", "where", "who"]),["who"]))

