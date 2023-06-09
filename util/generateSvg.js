const {Circle} = require('../lib/circle');
const {Triangle} = require('../lib/triangle');
const {Square} = require('../lib/square');

// this function takes the user imputs and creates the svg logo
function generateSvg(data) {
  let shape = undefined;
  if (data.shape === 'Circle') {
    shape = new Circle(data.shapeColor, data.text, data.textColor);
  } else if (data.shape === 'Triangle') {
    shape = new Triangle(data.shapeColor, data.text, data.textColor);
  } else {
    shape = new Square(data.shapeColor, data.text, data.textColor);
  }
  return shape.render();
}

module.exports = generateSvg;