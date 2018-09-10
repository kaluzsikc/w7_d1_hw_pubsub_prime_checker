const PubSub = require('../helpers/pub_sub.js');

const NumberChecker = function () {

};

NumberChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) =>{
    const inputtedNumber = event.detail
    console.log('Number in NumberChecker:', inputtedNumber);
    const result = this.checkNumbers(inputtedNumber);
    // console.log(result);
    PubSub.publish('NumberChecker:number-checked', result);
  });
};

NumberChecker.prototype.checkNumbers = function (num) {
  if (num < 2) return "not prime";

  for (var i = 2; i < num; i++) {
    if (num % i == 0) return "not prime";
  }

  return "prime";
};

module.exports = NumberChecker;
