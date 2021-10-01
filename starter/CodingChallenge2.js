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
// printGoals('Roberto', 'Bagio', 'Nanio');

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayes] = players1;

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
