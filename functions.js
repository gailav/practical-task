const car = {
  color: "black",
  power: "300",
  getPower(){
    console.log(this.power);
  }
};

car.color = "green";
console.log(car);

// Count number of fruits

const numberOfFruits = (pears, apples) => {return pears + apples};
const result = numberOfFruits(5, 30)
console.log(result);

//Name in the terminal

const enteredName = "John";

if (enteredName === "John"){
  console.log("Hello " + enteredName)
} else{
  console.log("There is no such name")
};

// Determine type of argument

function typeOf(x) {
    console.log(typeof(x));
}
typeOf("hello");

//Determine if number is prime or not

function primeOrNot(x){
  if (x % 2 === 1){
    console.log("Number is prime");
  } else{
    console.log ("Number is not prime")
}};
primeOrNot(9);