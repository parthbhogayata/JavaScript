// List of Operators in JS

// 1] Arithmatic => + , - , * , / , % , ++ , --
// 2] Logical => and , or , not
// 3] Relational => < , > , <= , >= , == , === , !=
// 4] 


let x = 5

console.log(x>>=2);

// Comma  Operator

let  a = b = c = 10
console.log(a,b,c);

function example_1() {
    console.log('first');
    return 'first';
}

function example_2() {
    return true;
}
let ax = (example_2(),example_1())
console.log(ax);

// Unary Operator

let nm
console.log(typeof nm);

// Unary : delete

let emp = {
    firstname : 'parth',
    salary : 30000,
    age : 22
}

console.log(delete emp.salary);
console.log(emp);
