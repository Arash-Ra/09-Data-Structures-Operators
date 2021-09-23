'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name1: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order to ** ${this.name1} ** received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}   `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta! ${ing1} , ${ing2} , ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const ingredients = [
  prompt('Lets make pasta! ingredient1'),
  prompt(' ingredient2'),
  prompt('ingredient3'),
];

restaurant.orderPasta(...ingredients);

restaurant.orderPizza('Mushrooms', 'Tomato', 'Onion', 'Olive');

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  time: '21:00',
  address: 'via del 21',
  mainIndex: 2,
});

// Short circutting
// Truthy value will be printed to the console
console.log(3 || 'arash');
console.log(undefined || 0 || 'Hello');
console.log(0 ?? 'Hello');

// Nullish coaliscing operator
const guest1 = restaurant.numberOfGuests || 10;
console.log(guest1);

console.log('----------- AND ------------');
// any time reaches to falsy value it will not check and will stop the process and send the falsy value
// If all values are truthy, then it will send the output value

console.log(23 && 'Hello' && 'arash' && 0);
/*
const { name1, openingHours, categories } = restaurant;
console.log(name1, openingHours, categories);

const {
  name1: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);
*/

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// mutating variables:
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested object
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(
//   restaurant.openingHours.fri.open,
//   restaurant.openingHours.fri.close
// );
// console.log(o, c);

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);
const [x, y, z] = arr;
console.log(x, y, z);

let [main, secondary] = restaurant.categories;

console.log(main, secondary);
// let temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive two return value from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);
*/
const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr1];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const ar = 'ARASH';
const letters = [...ar];
console.log(letters);

// Rest element
const [a, b, ...others] = [10, 20, 30, 40, 50];
console.log(a, b, others);

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(sum);
};

add(2, 4);
add(2, 4, 6);
