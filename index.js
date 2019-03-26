#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

//Local Modules
const files = require('./lib/files');

const [,, ...args] = process.argv

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Skotha', { horizontalLayout: 'full' })
  )
);

console.log(`Hello World ${args}`)