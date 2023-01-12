const string = "ahb acb aeb aeeb adcb axeb";

const re = /a\Sb/gi;

console.log(string.match(re));

//Write regex that finds 2 + 3

const numString = "2 + 3 223 2223";

const reg = /2\s\+\s3/gi;

console.log(numString.match(reg));

//Get the date

const today = new Date();

const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

console.log(day);
console.log(month+1);
console.log(year);
