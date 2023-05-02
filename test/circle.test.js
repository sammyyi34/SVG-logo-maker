const Circle = require('../lib/circle');

describe('Circle', () => {
  it('should render the correct color, text and text color', () => {
    const shape = new Circle(color, text, textColor);
    const color = 'red';
    const text = 'LUL';
    const textColor = 'black';

    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`)
  });
});