// 2 types of  Memmorys 

//     1.Stack
            // --> Primitive Type.
            // --> It gives us Copy of Variable
//     2.Heap 
            // Refrence Type (Non-Primitive)
            // it give Refrance of Variable 

let name = "parth"
let newname  = name 

console.log(newname);

newname = "bhogayata"

console.log(newname);
console.log(name);

// Referace DataType

let userone = {
    email : "parth@gmail.com",
    upi : "parth@123"
}

console.log(userone);
let usertwo = userone
usertwo.email = "phb@gmail.com"
console.log(`userone : ${userone.email}  and Usertwo : ${usertwo.email}`)