const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require('./util/generateSvg');

const questions = [
  {
    type: 'list',
    name: 'shape',
    message: 'What shape would you want your SVG logo to be?',
    choices: [
      'Circle',
      'Triangle',
      'Square'
    ]
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color would you want the shape to be?'
  },
  {
    type: 'input',
    name: 'text',
    message: 'What is your logo name? (must be 3 letters long)'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color would you like the text to be?'
  }
];

