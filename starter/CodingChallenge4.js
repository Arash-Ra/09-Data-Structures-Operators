'use strict';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  const inputFromYou = document.querySelector('textarea').value;

  const lower = inputFromYou.toLowerCase();
  const splited = lower.split('\n');
  const newText = [];
  for (const chars of splited) {
    newText.push(chars.replace(chars[0], chars[0].toUpperCase()));
  }
  console.log(newText.join('\n'));
});
