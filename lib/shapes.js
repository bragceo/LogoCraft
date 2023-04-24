// shape.js

const fs = require('fs');

// Base class
class Shape {
    constructor(color = 'green', text = 'logo', textColor = 'black') {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
        this.svgWrapper = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="200" width="300" viewBox="0 0 300 200">SHAPE TEXT</svg>`;
    }

    // Abstract method
    render() {
        throw new Error('render() method must be implemented in child classes');
    }

    // Save the SVG to file using fs
    saveToFile(filename) {
        let className = this.constructor.name;
        // adjust the y position of the text based on the shape
        let yPercentage = className === 'Triangle' ? '60%' : '50%';

        const svgMarkup = this.svgWrapper.replace('SHAPE', this.render()).replace('TEXT', `<text x="50%" y="${yPercentage}" text-anchor="middle" dominant-baseline="central" font-size="25" fill="${this.textColor}">${this.text}</text>`);
        fs.writeFileSync(filename, svgMarkup);
        console.log(`SVG saved to ${filename}`);
    }

    // Setters
    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(color) {
        this.textColor = color;
    }
}

// Child classes
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect width="160" height="160" x="70" y="20" style="fill:${this.color}" />`;
    }
}


// Exports classes (Square, Triangle, Circle)
module.exports = { Triangle, Square, Circle };