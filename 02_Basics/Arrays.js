// Colletion of Diffrent type of data in single varialble
// Arrays in JS is Object Type 

// 2 Ways to Declare Array 
    // 1.Array Constructor
    // 2.Array literal

// Creating an Array using Array Literal
    // Direct Assign VAlue
    let name = [];
    // console.log(name);

    let course = ["Java" , "Python" , "JavaScript"];
    // console.log(course);

// Creating an Array using Array Constructor (JavaScript new Keyword)

    // let array_name = new Array(size)

    let arr = new Array(3);
    arr[0] = "Parth"
    arr[1] = 21
    arr[2] = 'M'
    // console.log(arr);

    let arr2 = new Array("Krunal" , 22 , 'M');
    // console.log(arr2);

    // for(let i = 0 ; i < arr2.length; i++){
    //     console.log(arr2[i]+" ");
    // }

//Modified element
    // console.log(arr[0]);
    arr[0] = "Parth Bhogayata"
    // console.log(arr[0]);

//Adding Element to The Array 

    // console.log(arr);
        // 1 -> Add at Last => push();
        arr.push("Marwadi University")
        
        // 2 -> Add at Begining => unshift()
        arr.unshift(4052)

    // console.log(arr)

// Remove Element From Array

    // console.log(arr);

    // last Element => pop()
    arr.pop()

    //First Element => shift()
    arr.shift()

    // console.log(arr);

    //Remove 2 Element Start from 0 index => splice(start , how many)

    arr.splice(0,2)
    // console.log(arr);

// In JavaScript We can Done Increase or Decrease the Length of Element

    let cor = ["Html" , "css" , "js" , "java" , "python"]
        // console.log(cor);
    cor.length = 7
        // console.log(cor);
        // console.log(cor.length);

    cor.length = 2
        // console.log(cor);

//Concatination Of Array 

    let con = [1,2,3]
    let cat = [4,5,6]
    let concat = cat.concat(con)
    // console.log(concat);

//Array to String => toString()

    let arr4 = ["HTML", "CSS", "JavaScript", "React"]
    // console.log(arr4.toString());

// check this is array or not 
// 2 methods
    // --> Array.isArray(arr_object);

    // -->  arr_object instanceof Array 

        const arr5 = ["HTML", "CSS", "Javascript"]

        // console.log(Array.isArray(arr5));

        // console.log(arr5 instanceof Array);

// Join in Array 
    let arr6 = [1,2,3,4,5,6,7,8,9,10]

    // console.log(arr6.join('|'));
    
    let s = ""
    for(let i = 0 ; i < 11 ; i++){
        s += i + "|";
    }
    // console.log(s);