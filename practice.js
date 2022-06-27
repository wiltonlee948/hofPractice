// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var counter = 0;
  _.each(numbers, function (number) {
    if (number % 5 === 0) {
      counter++;
    }
  });
  return counter;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var desiredFruit = _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
  return desiredFruit;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var wordsWithLetter = _.filter(fruits, function(fruit) {
    if (fruit[0] === letter) {
      return fruit;
    }
  })
  return wordsWithLetter;

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var cookies = _.filter(desserts, function(dessert) {
    if (dessert.type === 'cookie') {
      return dessert;
    }
  });
  return cookies;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var totalPrice = _.reduce(products, function(acc, item) {
    var price = Number(item.price.slice(1));
    return price + acc;
  },0);
  return totalPrice;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

  var dessertCategory = _.reduce(desserts, function(acc, item) {
    var type = item.type;
    if (acc[type]) {
      acc[type] += 1;
    } else {
      acc[type] = 1;
    }
    return acc;
  },{});
  return dessertCategory;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var ninetiesMovies = _.reduce(movies, function(acc, movie) {
    var year = movie.releaseYear;
    if (year >= 1990 && year <= 2000) {
      acc.push(movie.title);
    }
    return acc;
  }, []);
  return ninetiesMovies;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {

  var shorterRunTime = _.reduce(movies, function(acc, movie) {
    if (movie.runtime < timeLimit) {
      acc = true;
      return acc;
    }
    return acc;
  }, false);
  return shorterRunTime;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var upperCaseFruitStrings = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
  return upperCaseFruitStrings;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var dessertsWithGlutenTag = _.map(desserts, function(dessert) {
    if (dessert.ingredients.includes("flour")) {
      dessert.glutenFree = true;
    } else {
      dessert.glutenFree = false;
    }
    return dessert;
  });
  return dessertsWithGlutenTag;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var salePrices = _.map(groceries, function(item) {
    var price = item.price.slice(1);
    var salesPrice = (price - price * coupon).toFixed(2);
    item.salePrice = '$' + salesPrice;
    return item;
  })
  return salePrices;
};
