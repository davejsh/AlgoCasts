// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // 1
  // return str.split('').reverse().join('');

  // 2
  // const n = str.length;
  // let reversed = '';
  // for (let i = 0; i < n; i++) {
  //   reversed = str[i] + reversed;
  // }
  // return reversed;

  // 3
  // let reversed = '';
  // for (let character of str){
  //   reversed = character + reversed;
  // }
  // return reversed;

  // 4
  // return str.split('').reduce((reversed, character) => {
  //   return character + reversed;
  // },'');

  // 5
  return str.split('').reduce((rev, char) => char + rev,'');
}

module.exports = reverse;
