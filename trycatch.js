//Let not declared

try {
  console.log(a) ;
  let a = 3
}
catch {
  console.log ("Let must be declared before use")
};

//Number cannot be divided by zero

const b = 1/0

try{
b!=infinity
}
catch {
  console.log("Cannot be divided by 0")
}
