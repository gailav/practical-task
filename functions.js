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
