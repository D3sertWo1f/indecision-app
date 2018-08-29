class Person {
  constructor(name = 'Anonymous', age = 0){
    this.name = name
    this.age = age
  }

  getGreeting(){
    return 'Hi! I am ' + this.name
  }

  getDescription(){

    return `${this.name} is ${this.age} year${this.age === 1?  '':"s"} old`
  }
}

const me = new Person('Adolf', 30)
console.log(me)
console.log(me.getGreeting())

const him = new Person(undefined , 29)
console.log(him)
console.log(him.getGreeting())


var max = new Person('Max', 0)
console.log(max)
console.log(max.getDescription())
