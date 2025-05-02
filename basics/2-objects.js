//Topic : Object singleton

const newUser ={}
newUser.id = "123444"
newUser.name = "xyz"
newUser.isLoggedIn = false
console.log(newUser);



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
console.log(regularUser.fullName.userFullName.firstName);
