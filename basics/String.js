const name = "aabbcc"
const repoCount = "100"

// console.log(`my name is ${name} and my repoCount is ${repoCount}`)


const gameName = new String ("abcddc")
// console.log(gameName[0]);
// console.log(gameName.__proto__);



//touppercase charAt indexof


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('b'))





//slice & substring

const newString = gameName.substring(0,3)
// console.log(newString)

const anotherString = gameName.slice(-3,3)
// console.log(anotherString);




//trim

const newStringOne = "     abcdef      ";
// console.log(newStringOne);
// console.log(newStringOne.trim());





//Replace include & split

const url ="http://ismailniazi.com/gudyrs%20gu)"
// console.log(url.replace("%20" , "_"))
// console.log(url.includes("niazi"));
// console.log(gameName.split("-"));


//number & Maths


const score =400
// console.log(score);


const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length);


//after decimal digits
// console.log(balance.toFixed(1));



const otherNumber = 23.444;
// console.log(otherNumber.toPrecision(2))


//number declaration

const hundred = 100000000
// console.log(hundred.toLocaleString());


//Maths
console.log("absolute value");

console.log(Math.abs(2.33));
console.log("maximum value");
console.log(Math.max(3.33));
console.log("Random value");
console.log(Math.random());
console.log("floor value");
console.log(   Math.floor(22.2));
console.log("ciel value");
console.log(Math.ceil(234.4444));




