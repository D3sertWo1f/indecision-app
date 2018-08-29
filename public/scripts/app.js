'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: 'getGreeting',
    value: function getGreeting() {
      return 'Hi! I am ' + this.name;
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {

      return this.name + ' is ' + this.age + ' year' + (this.age === 1 ? '' : "s") + ' old';
    }
  }]);

  return Person;
}();

var me = new Person('Adolf', 30);
console.log(me);
console.log(me.getGreeting());

var him = new Person(undefined, 29);
console.log(him);
console.log(him.getGreeting());

var max = new Person('Max', 0);
console.log(max);
console.log(max.getDescription());
