const {Square} = require('../lib/square');

// tests to make sure the new square class has been created correctly
describe('Square', () => {
  it('should render the correct color, text and text color', () => {
    const color = 'blue';
    const text = 'WOW';
    const textColor = 'orange';
    const shape = new Square(color, text, textColor);

    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${color}" />
    <text x="100" y="100" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`)
  });
});