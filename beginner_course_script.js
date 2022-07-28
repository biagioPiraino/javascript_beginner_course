/* -------------- Arrow functions ----------------------------- */
const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];

const squarePositiveIntegerList = (arr) => {
  return arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
}

console.log(squarePositiveIntegerList(realNumberArray));
/* ------------------------------------------------------------ */

/* -------------- Rest Operator ------------------------------- */
const sumValue = (arr) => {
  return arr.filter(num => typeof num == 'number').
    reduce((a,b) => a + b, 0);
} // Typical case were you pass an array of numbers

const sumValueRest = (...args) => {
  return args.reduce((a,b) => a + b, 0);
} // Using Rest Operator "..." to allow multiple and not fixed of parameters to be procecssed

console.log(sumValue(realNumberArray));
console.log(sumValueRest(2,3,4,6));
/* ------------------------------------------------------------ */

/* -------------- Spread Operator ------------------------------- */
const array_00 = ['Jan', 'Feb', 'Mar'];

let array_01;
let array_02;
let array_03;

(() => {  // Self invoking anonymus function
  "use strict";
  array_01 = array_00;
  array_02 = array_00;
  array_03 = [...array_00]; // You only spread the contents
  array_00[0] = 'potato';
})(); 

console.log(array_00);
console.log(array_01);
console.log(array_02);
console.log(array_03);  // Content won't change
/* ------------------------------------------------------------ */

/* -------------- Destructuring ------------------------------- */
const LOCAL_FORECAST = {
  today: {min: 72, max: 83},
  tomorrow: {min: 70, max: 89}
};

// Destructuring to obtain property of an object
function getTomorrowMax(forecast){
  const {tomorrow : {max : temperature}} = forecast;
  return temperature;
}

console.log(getTomorrowMax(LOCAL_FORECAST));

// Destructuring for assign variable from arrays
let a = 7, b = 5;

(() => {
  "use strict";
  [a,b] = [b,a]; // Switch values of let variables
})();

console.log(a);
console.log(b);

// Destructuring with Rest operator to reassign array elements
const source = [1,2,3,4,5,6,7,8,9,10];

/* Remove the first two elements of an array, destructuring happens
   using commas inside the array to specify how many elements we want to remove
   from the array */

function removeFirstTwo(list){
  const [ , , ...arr] = list; 
  return arr;
}

console.log(source);
console.log(removeFirstTwo(source));

// Destructuring to pass an Object as function's parameters
const stats = {
  max: 56.78,
  standard_dev: 4.34,
  min: -0.75,
  avg: 35.6
};

// Destructure the stats object to use only the properties required
const half = function({max, min}){
  return (max + min) / 2;
}

console.log(stats);
console.log(half(stats));
/* ------------------------------------------------------------ */

/* ------------Template Literal with Strings ------------------ */
const person = {
  name: 'Biagio',
  age: 30
};

/* Used with ``, benefits are:
    . Multiline strings
    . Add "" or '' without escaping them
    . Use objects attributes by using $ sign */

const greetings = `Hello, my "name" is ${person.name}!
I am ${person.age} years old`

console.log(greetings);

const result = {
  failure: ["no-var", "var-on-top", "linebreak"]
};

// Code challenge
function makeList(arr){
  const htmlObj = "li";
  const className = "text-warning";
  const resultDisplayArray = [];

  for (let i in arr){
    let element = `<${htmlObj} class="${className}">${arr[i]}</${htmlObj}>`
    resultDisplayArray.push(element);
  }

  return resultDisplayArray;
}

console.log(makeList(result.failure));
/* ------------------------------------------------------------ */

/* ---------------------Simple field--------------------------- */
// Functions in objects
const bycycle = {
  gear: 2,
  setGear: function(newGear) { // Usual way
    "use strict";
    this.gear = newGear;
  }
};

const car = {
  gear: 2,
  setGear(newGear) { // Simpler and concise version
    "use strict";
    this.gear = newGear;
  }
}

bycycle.setGear(3);
console.log(bycycle.gear);

car.setGear(5);
console.log(car.gear);
/* ------------------------------------------------------------ */