const car = {
  color: "black",
  power: "300",
  getPower(){
    console.log(this.power);
  }
};

car.color = "green";
console.log(car);
