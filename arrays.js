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
