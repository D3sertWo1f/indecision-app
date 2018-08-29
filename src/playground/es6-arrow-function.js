const arrow = function(x){
  return x * x;
}

console.log(arrow(8))

const squareArrow = (x) => {
  return x * x;
}

console.log(squareArrow(8))

const squareArr = (x) => x * x;

console.log(squareArr(4))

let getFirstName = (fullName) => {
  return fullName.split(' ')[0]
}

console.log(getFirstName('Mike Smith'))

getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));
