let string = "hello";
let bool = true;
let num = 2;

// Add string and boolean
const result1 = string + bool
console.log(result1);

// Add a string an a number
const result2 = string + num;
console.log(result2);


//Add number and boolean
const result3 = num + bool;
console.log(result3)

//Multiply string and boolean
const result4 = string*bool;
console.log(result4);

//Multiply sting and number
const result5 = string*num
console.log(result5);

//Multiply number and boolean
const result6 = num*bool
console.log(result6);

//Divide string and boolean
const result7 = string/bool
console.log(result7);

//Divide string and number
const result8= string/num
console.log(result8);

//Divide string and boolean
const result9 = num/bool
console.log(result9);

//EXPLICIT CONVERSIONS

//Convert number
const res1 = String("23");
console.log(res1);
console.log(typeof(res1));

//Convert string
const res2 = Number("123");
console.log(res2);
console.log(typeof(res2));

//Convert boolean
const res3 = String(false);
console.log(res3);
console.log(typeof(res3));
