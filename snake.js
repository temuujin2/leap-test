const readline = require('readline')
const chalk = require('chalk')

const row = c => n => c.repeat(n)
const col = row => n => (row + '\n').repeat(n)
const newLine = () => '\033c'
const rnd = (min) => (max) => Math.round(Math.random() * (max - min))


setInterval(() => {
  // COLOR    
  const r = rnd(0)(255)
  const g = rnd(0)(255)
  const b = rnd(0)(255)

  // SNAKE TEXT
  let header = newLine()
  header += chalk.rgb(r, g, b)(row(' ')(12) + 'SNAKE' + row(' ')(12))
  console.log(header)

  let board = col(row('.')(30))(15)

  console.log(chalk.green(board))
}, 80)