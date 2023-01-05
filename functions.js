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
