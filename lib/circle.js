const Shape = require('./shapes');

// takes in the constructor obj template to make a circle class
class Circle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.color}" />
    <text x="150" y="115" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
  }
}

module.exports = Circle;