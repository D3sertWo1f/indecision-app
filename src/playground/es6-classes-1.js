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

class Student extends Person{
  constructor(name, age, major){
    super(name, age);
    this.major = major
  }

    hasMajor(){
      return !!this.major
    }

    getDescription(){
      let description = super.getDescription()

      if(this.hasMajor()){
        return description += ` Their major is ${this.major}`
      }
      return description
    }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation;
  }

    getGreeting(){
      let greeting = super.getGreeting()
      if(this.homeLocation){
        greeting += ` I'm visiting from ${this.homeLocation}.`;
      }
      return greeting
    }
}

const me = new Traveler('Adolf', 30, 'Mexico City')
console.log(me.getGreeting())

const him = new Traveler(undefined , 29)
console.log(him.getGreeting())


// var max = new Student('Max', 0)
// console.log(max)
// console.log(max.getDescription())
