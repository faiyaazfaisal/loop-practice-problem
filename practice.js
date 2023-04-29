var moneyGiven = 1000;
var applePrice = 400;
var orangePrice = 300;

var expense = applePrice + orangePrice;
console.log(expense);
 var moneyBack = moneyGiven - expense;
 console.log(moneyBack);



//  /////
var fruits = ['apple', 'banana', 'orange'];
var bananaIndex = fruits.indexOf('banana');
console.log(bananaIndex);
fruits[bananaIndex] = 'mango'
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('watermelon');
console.log(fruits);

// ///////
var side1 = 9;
var side2 = 8;
var side3 = 9;
 if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('somodibahu trivuj hobe');
 } 
  else{
    console.log('somodibahu hbena');
  }