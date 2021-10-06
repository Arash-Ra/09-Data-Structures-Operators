'use strict';
console.log('-------Coding Challenge 3--------');

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

let avg = 0;

for (const odd of Object.values(game.odds)) {
  avg += odd;
  avg /= avg / Object.values(game.odds).length;
}

console.log(`Average of oods: ${avg}`);

// Question 3

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'Draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const values1 = gameEvents.values();
// console.log(values1);
// Q1
const events = [...new Set(values1)];
console.log(events);

// Q2
gameEvents.delete(64);
console.log(gameEvents);

// Q3
const avg1 = 90 / gameEvents.size;
console.log(`An event happened, on
average, every ${avg1} minutes`);

// Q4
const gameEventsEntries = gameEvents.entries();

for (const [key, value] of gameEventsEntries) {
  let halfStr;
  key <= 45 ? (halfStr = '[First Half]') : (halfStr = '[Second Half]');
  console.log(`${halfStr} ${key}: ${value} `);
}
