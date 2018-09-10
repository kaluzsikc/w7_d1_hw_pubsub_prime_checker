const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('NumberChecker:number-checked', (event) =>{
    const primeNumber = event.detail;
    this.displayResult(primeNumber);
  })
};

ResultView.prototype.displayResult = function (diplayResult) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `${diplayResult} `;
};

module.exports = ResultView;
