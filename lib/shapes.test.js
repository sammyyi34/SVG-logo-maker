const {Circle, Square, Triangle} = require('./shapes');

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

describe('Triangle', () => {
  it('should render the correct color, text and text color', () => {
    const shape = new Triangle(color, text, textColor);
    const color = 'green';
    const text = 'OMG';
    const textColor = 'yellow';
  
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,20 280,180 20,180" fill="${this.color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`)
  });
});

describe('Square', () => {
  it('should render the correct color, text and text color', () => {
    const shape = new Square(color, text, textColor);
    const color = 'blue';
    const text = 'WOW';
    const textColor = 'orange';

    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${this.color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`)
  });
});