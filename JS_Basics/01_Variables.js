// In JS var , let and const keywords to declare variable
// JS is  Dynamically type Programming Language

// 1] var : Functional or globally scope 
            // with var keyword we can redeclare or reassign varialble

var x = 10;
console.log(x);

var x = 20
console.log(x);

function myfun() {
    var x = 30
    console.log('Inside Function : '+x);
}
myfun()
console.log('Outside a Function : '+x);

// ------------------------------------------------------------------------------------------------

// 2] let : blocked Scope 
            // reassign is posible  but reeclaration is not possible

let y = 100;
console.log(y);
y = 200;
console.log(y);

function mysecfun() {
    let y = 2000;
    console.log(y);
}

console.log(y);
mysecfun()

// ------------------------------------------------------------------------------------------------

// 3] Const : in This no one possible reassign or redeclare.
                // Bloked Scope

const z = 250

function mythrd() {
    const z = 2500
    console.log(z);
}
mythrd()
console.log(z);