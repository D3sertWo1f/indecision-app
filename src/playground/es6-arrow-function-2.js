let add = function(a,b){
  console.log(arguments)
  return a + b;
}

console.log(add(55, 1))

add = (a,b) => {
  // console.log(arguments)
  return a + b;
}

console.log(add(55, 1))

const user = {
  name: 'Adolf',
  cities: ['Mexico City', 'Chicago', 'CU'],
  printPlacesLived(){
    return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
  };

console.log(user.printPlacesLived());

const multiplier = {
  numbers : [1,2,3],
  multiplyBy : 2,
  multiply(){
    return this.numbers.map((x) => this.multiplyBy * x)
  }
}

console.log(multiplier.multiply());
