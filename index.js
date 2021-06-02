const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const manager = require('./lib/manager')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')

let team = []

