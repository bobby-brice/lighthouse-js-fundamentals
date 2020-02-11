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