'use strict';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  const inputFromYou = document.querySelector('textarea').value;

  const splited = inputFromYou.split('\n');

  for (const [i, chars] of splited.entries()) {
    const [first, second] = chars.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(25)}${'🥝'.repeat(i + 1)}`);
    // should be camel case
  }
});
