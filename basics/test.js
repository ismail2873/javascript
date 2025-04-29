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

