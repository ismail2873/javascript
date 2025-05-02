

const sym = Symbol("xyzs")

const userDetail={
name:"abcd",
"full name":"abcd efg",
location:"hhdhdh",
[sym]:"xyzs1",
email:"abcd0890@gmail.com",
age:28,
isLoggedIn:false
}


console.log(userDetail["email"]);
console.log(userDetail.email);

// console.log(userDetail.full name); //Wrong

console.log(userDetail["full name"]); //True
console.log(userDetail.isLoggedIn);
console.log(userDetail[sym]);



