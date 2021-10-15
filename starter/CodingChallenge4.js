'use strict';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  const inputFromYou = document.querySelector('textarea').value;

  const splited = inputFromYou.split('\n');

  for (const chars of splited) {
    const [first, second] = chars.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output);
    // should be camel case
  }
});
// camel
