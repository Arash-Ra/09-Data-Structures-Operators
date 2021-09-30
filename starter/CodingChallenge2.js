'use strict';
console.log('-------Coding Challenge 2--------');

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Question 1
const scoredPlayer = game.scored;

for (const [i, goalScore] of scoredPlayer.entries()) {
  console.log(`Goal ${i + 1}: ${goalScore} `);
}

// Question 2
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

let sum = 0;

for (const total of game.odds.entries()) {
  sum += total;
}

const avg = sum / odds.entries().length;

console.log(`Average odds = ${avg}`);

const printGoals = function (...playerName) {
  console.log(playerName);
  console.log(`${playerName} scored ${playerName.length} goals `);
};

printGoals('Roberto', 'Bagio', 'Nanio');

const [players1, players2] = game.players;

const [gk, ...fieldPlayes] = players1;

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(team1, draw, team2);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// // practive for myself
// const name1 = prompt('Enter name1');
// const name2 = prompt('Enter name2');

// name1.length < name2.length &&
//   console.log(`The name ${name1} is shorther name than ${name2}`);
// name1.length > name2.length &&
//   console.log(`The name ${name1} is longer name than ${name2}`);
