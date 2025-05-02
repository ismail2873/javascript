const myArray = [1,2,3,4,5]
const myArray2 = new Array(1,2,3,4,56,67,)
// console.log(myArray[1])
// console.log(myArray2)


//array methods


myArray.push(8);
// console.log(myArray)

myArray.pop();
// console.log(myArray)
myArray.unshift(0);
// console.log(myArray)
myArray.shift();
// console.log(myArray)
myArray.splice(2, 1);
// console.log(myArray)


//Arrays merging methods


//Wrong method

const heros1 = ["abs","bfjd","bewbd"]
const heros2 = ["abs","bfjd","bewbd"]

heros1.push(heros2)
// console.log(heros1);


// console.log(heros1[2][1]);


//True method


const allHeros = heros1.concat(heros2)
// console.log(allHeros);
const allHeros2 = [...heros1,...heros2]
// console.log(allHeros2);




//flatArray

const flatArray= [1,3,4,5,[1,1,6,8,[7,9,9]]]
const realFlatArray = flatArray.flat(Infinity)
// console.log(realFlatArray);


//from,isArray,of array type

console.log(Array.isArray("ismail"));
 console.log(Array.from("ismail"));


 //of type array

 let score1 =100
 let score2 =300
 let score3 =400
 console.log(Array.of(score1,score2,score3));
 
 
