
let score = "33"

console.log(typeof score);
console.log(typeof(score));

let vauleinnum = Number(score)
console.log(typeof vauleinnum);
console.log(vauleinnum);
console.log('------------------------------');
// check for null and undefined converstaions

let value = null 
console.log(typeof value);
let ans = Number(value);
console.log(ans);
console.log(typeof ans);

console.log('------------------------------');
let value2 = undefined
console.log(value2);
console.log(typeof Number(value2));
console.log(Number(value2));


// "33" => 33
// "33abc" => NaN (Not a Number) but type of NaN is number
// true => 1; false => 0;
// null => 0
// undefined => NaN

let isLoggedin = -35
console.log(Boolean(isLoggedin));

//Boolean Convertion

// 1 to n => true
// 0 => flase
// "" [empty string] => false
// "parth" or " " => true