//topic :  Object leterals

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

userDetail.email="idhegugdugug.com"
// Object.freeze(userDetail)       //freeze
userDetail.email="ihweihwih.com"
console.log(userDetail);

userDetail.greeting=function(){
    console.log("hello user");
    
}
userDetail.greetingTwo=function(){
    console.log(`hello user ${this.name}`);
    
}

console.log(userDetail.greeting());
console.log(userDetail.greetingTwo());



