//Topic : Object singleton

const newUser ={}
newUser.id = "123444"
newUser.name = "xyz"
newUser.isLoggedIn = false
// console.log(newUser);



const regularUser = {
    name:"tttt",
    id:222,
    email:"hello@gmail.com",
    isLoggedIn:false,
    fullName:{
        userFullName:{
            firstName:"hello",
            lastName:"absed"
        }

    }

}
// console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {
    1:"a",2:"b",3:"c"
}
const obj2 = {
    4:"d",5:"e",6:"f"
}
// const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);



const UserData = [
    {
        id:1,
        name:"9hiuig",
        email:"eonowni@gmail.com"
    },
    {
        id:2,
        name:"9h",
        email:"ei@gmail.com"
    },
    {
        id:3,
        name:"iig",
        email:"owni@gmail.com"
    },
    {
        id:4,
        name:"9hig",
        email:"eono@gmail.com"
    },
]

UserData[1].email
console.log(UserData);
console.log(Object.keys(UserData));
console.log(Object.values(UserData));
console.log(Object.entries(UserData));
