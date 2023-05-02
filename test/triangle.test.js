const Triangle = require('../lib/triangle');

// tests to make sure the new triangle class has been created correctly
describe('Triangle', () => {
  it('should render the correct color, text and text color', () => {
    const color = 'green';
    const text = 'OMG';
    const textColor = 'yellow';
    const shape = new Triangle(color, text, textColor);
  
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,20 280,180 20,180" fill="${color}" />
    <text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`)
  });
});
