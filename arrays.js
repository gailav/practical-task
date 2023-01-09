//Array of movies
const arr = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "12 Angry Men", "The Lord Of The Rings"];

for(i= 0; i<arr.length; i++){
  console.log(arr[i]);
};

// Convert array to string

const arr1 = ["Toyota", "Audi", "Porche", "Tesla"];
const toString = arr1.toString();

console.log(toString);

const toArray = toString.split(",");
console.log(toArray);

//Names of friends

const arrFriends = ["Tara", "Egle", "Julia", "John"]
const arrFriendsAdded = arrFriends.map((currentName)=>currentName+"hello");

console.log(arrFriendsAdded);

//Convert number array to boolean

const numberArray = [0,1,2,3,4,5];
const boolArray = numberArray.map((currentNumber)=>Boolean(currentNumber));

console.log(boolArray);

//Sort array in descending order

const array = [1,6,7,8,3,4,5,6];
array.sort().reverse();

console.log(array);

//Filter Array

const arr3 = [1,6,7,8,3,4,5,6];
const arr3Filtered = arr3.filter(currentNumber=>currentNumber>3);

console.log(arr3Filtered);

//Array and index

const animals = ["cat", "dog", "horse", "cow", "donkey"];

animals.forEach((element, index) => {
console.log("Element index: " + index + " Element name: " + element);
});

//Log number until it is less than 10

let a=0
for(a=0; a<10; a++){
  console.log([a]);
}
