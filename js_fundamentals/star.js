const read = require('readline-sync')

const n = read.question('Enter number of row: ')

for (let i = 1; i <= n; i++){
  let star = '';
  for (let j = 0; j < i; j++) {
    star += '*'
  }
  console.log(star);
}