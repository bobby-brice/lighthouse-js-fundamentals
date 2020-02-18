function  multiply(a, b) {
  return a * b;
}

const result = multiply(2,4);

console.log(result);

/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(width) {
  let triangle = "";
  for (let i = 1; i <= width; i++) {
    triangle += makeLine(i);
  }
  return triangle;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));

// function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

var laugh = function (num) {
  ha = "";
  for (let i = 1; i <= num; i++) {
    ha += "ha";
  }
  return ha + "!";
};

console.log(laugh(10));

function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return name + " " + "is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

function howManyHundreds(num) {
  let divide = num / 100;
  return Math.floor(divide);
};

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

function calculateRectangleArea(length, width) {
  if(length < 0 || width < 0) {
    return undefined;
  } else {
    return length * width;
  } 
}

function calculateTriangleArea(base, height) {
  if(base < 0 || height < 0) {
    return undefined;
  } else {
    return base * (height/2);
  } 
}

function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  } else {
    return Math.PI * Math.pow(radius, 2);
  }  
}

console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined