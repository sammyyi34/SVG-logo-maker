const {Square} = require('../lib/square');

describe('Square', () => {
  it('should render the correct color, text and text color', () => {
    const color = 'blue';
    const text = 'WOW';
    const textColor = 'orange';
    const shape = new Square(color, text, textColor);

    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`)
  });
});