// primative data type




// 7 types [string,null,number,boolean,undefined,symbol,bigint]


const id = Symbol('1234')
const anotherId =Symbol('1234')
console.log (id==anotherId)

//Reference [non permitive data type]

// Array,function,Object

let myObj={
    name :'xyz',
    age :22
}
console.log(myObj)



//function


const myFunction = function(){
    console.log("hello world")
}

console.log(myFunction)

//how to check type


console.log(typeof myFunction);


//Memory in js

// Stack (premitive type)
//Heap (non premitive type)

let myNameIs = "abcd"
let anotherNameIs = myNameIs
anotherNameIs = "xyz"

console.log(myNameIs);
console.log(anotherNameIs);



//Heap (Reference)


let userOne = {
    Email : "abcd@gmail.com",
    name: "abcd",
    age:23
}
let userTwo = userOne

userTwo.Email = "xyz@gmail.com"
console.log(userOne.Email);
console.log(userTwo.Email);
