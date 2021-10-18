'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Delayed Departure from FAO to TXL (11h25)
// Arrival from BRU to FAO (11h45)
// Delayed Arrival from HEL to FAO 12h05
// Departure from FAO  to LIS 12h30

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type} ${from
    .slice(0, 3)
    .toUpperCase()} ${to} ${time.replace(':', 'h')}`;
  console.log(output);
}
// Data needed for first part of the section

const week_Days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [week_Days[3]]: {
    open: 12,
    close: 22,
  },
  [week_Days[4]]: {
    open: 11,
    close: 23,
  },
  [week_Days[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(openingHours);

const restaurant = {
  name1: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // This is anotehr way to use a function in the object, we remove the word "funcion" and the ":"
  // order(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

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

const properties = Object.keys(openingHours);
// property names of the object
console.log('-------- Object.keys----------');
console.log(properties);

let openStr = `We are open ${properties.length} days: `;
for (const day of properties) {
  openStr += [day] + ' ';
}

console.log(openStr);

// property values of the object
const values = Object.values(openingHours);
console.log('-------- Object.values----------');
console.log(values);

// Property names and values of the object
const enteries = Object.entries(openingHours);
console.log('-------- Object.entries----------');
// console.log(enteries);

for (const [day, { open, close }] of enteries) {
  console.log(`On ${day} restaurant opens at ${open} and closes at ${close}`);
}

console.log(restaurant.openingHours.mon?.open);

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

// entries() makes an array of the current item index and the current item
// for (const item of newMenu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);
for (const [i, el] of newMenu.entries()) console.log(`${i + 1}: ${el}`);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours?.[day]?.open ?? 'closed';
  console.log(`On ${day} restaurant opens at  ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderResoto?.(0, 1) ?? 'Method does not exist');

const users = [
  {
    name: 'jonas',
    email: 'jonas@import.com',
  },
];

console.log(users[1]);
console.log(users[0]?.name ?? 'User array empty');

// ************* SET **************************
const newSet = new Set(['ARASH', 'AMIR', 'ASHKAN', 'AMIR']);
console.log(newSet.has('Ray'));
newSet.add('Ebi');
console.log(newSet);
console.log(newSet.size);

const staff = ['waiter', 'cheff', 'manager', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log('Array values:');
console.log(staff);

console.log(
  '----To find out the number of unique values of the above array----'
);
console.log(new Set(staff).size);

// ************** Map *******************
const rest = new Map();

rest.set('name', 'Italiano Classico');
rest.set(1, 'Fiorenze, Italy').set(2, 'Lisbon, Portugal');
rest.set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']);
rest.set(true, 'We are open :)').set(false, 'We are closed :(');
rest.set('open', 11).set('close', 23);

console.log('=========== Map==========');
console.log(rest.get(2));
console.log(`*** Categories mapped to: ${rest.get('Categories')}`);

const time = 8;
// It maps every entry to its value in below
// open >> maps to 11
// close >> maps to 23
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('Categories'));
// rest.delete(2);
rest.size;
// rest.clear();

const arr3 = [1, 2];
rest.set(arr3, 'Test');
console.log(rest.get(arr3));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

// Quiz app

const question = new Map([
  ['question', 'What is the best programming language in the World?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct answer😀'],
  [false, 'Try again!'],
]);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3;
// const answer = Number(prompt('Your answer'));
console.log(answer);
// if (answer === question.get('correct')) console.log(question.get(true));
// else console.log(question.get(false));

// Using Turnary Operator
answer === question.get('correct')
  ? console.log(question.get(true))
  : console.log(question.get(false));

// console.log(question);

// Convert object to a Map
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

// Strings
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log('-----------Strings----------');
console.log(plane);
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('-- plane length --');
console.log(plane.length);
console.log(plane.indexOf('3'));
// indexOf is case sensitive

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got middle seat 🤣');
  else console.log('You got lucky 😀');
};

console.log(' -- 11B --');
checkMiddleSeat('11B');

console.log('-- 11A --');
checkMiddleSeat('11A');

console.log('-- 16B --');
checkMiddleSeat('16B');

console.log('-- 23E --');
checkMiddleSeat('23E');

console.log(new String('arash'));
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Coorect passenger name
const passenger = function (passengerName) {
  const passengerLower = passengerName.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};

passenger('federiCK');
passenger('biTA');
passenger('sassan');
passenger('alleX');

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io  \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

const priceGB = '278,45£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers go to boarding door 23. Boarding door 23!';
console.log(announcement.replace(/door/g, 'gate'));

// include
const plane1 = 'A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('A3'));
console.log(plane1.endsWith('neo'));

const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed to be onboard!!!');
  } else {
    console.log('Welcone a board');
  }
};

checkBaggage('I have a pocket of Knife');
checkBaggage('I have a gun');
checkBaggage('I have groceries');
checkBaggage('I have a sport tools');

const [firstName, lastName] = 'Jonas Shmedtmann'.split(' ');
const newName1 = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName1);

console.log('a+very+nice+weather'.split('+').join(' '));

const capitalizedName = function (name) {
  const splitName = name.split(' ');
  // console.log(splitName);
  const correctNewName = [];
  for (let n of splitName) {
    // correctNewName.push(n[0].toUpperCase() + n.slice([1]));
    correctNewName.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(correctNewName.join(' '));
};

capitalizedName('adrian fernandez lopez');

// PadStart , padEnd
console.log('PadStart , padEnd');
const message = 'This is a book';
console.log(message.padEnd(20, '+'));
console.log(message.padStart(20, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(3456765432));
console.log(maskCreditCard(7676735343098));
console.log(maskCreditCard('3456765432'));
console.log(maskCreditCard(76125777));

// repeat

const message2 = 'Bad weather... All flights delayed... ';
console.log(message2.repeat(3));

const inlinePlanes = function (n) {
  console.log(`${n} planes in line ${'✈'.repeat(n)}`);
};

inlinePlanes(3);
inlinePlanes(4);
inlinePlanes(2);
inlinePlanes(7);
