const { Circle, Square, Triangle } = require('./shapes');


test('Circle render() should generate a red circle SVG shape', () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="90" fill="red" />');
});

test('Triangle render() should generate a blue triangle SVG shape', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
});

test('Square render() should generate a green square SVG shape', () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual('<rect width="160" height="160" x="70" y="20" style="fill:green" />');
});