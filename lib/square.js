const {Shape} = require('./shapes');

// takes in the constructor obj template to make a square class
class Square extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${this.color}" />
    <text x="100" y="100" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
  }
}

module.exports = {Square};