const inquirer = require('inquirer');

// import shape classes
const { Triangle, Square, Circle } = require("./lib/shapes");

function generateLogo(response) {
    let shape;

    // create the shape based on user input
    switch (response.shape) {
        case "Triangle":
            shape = new Triangle(response.color, response.text, response.textColor);
            break;
        case "Square":
            shape = new Square(response.color, response.text, response.textColor);
            break;
        case "Circle":
            shape = new Circle(response.color, response.text, response.textColor);
            break;
    }

    shape.saveToFile("logo.svg");
}

function init() {
    inquirer.prompt([
        {
            type: "input",
            message: "What text sould be displayed on the logo?",
            name: "text"
        },
        {
            type: "input",
            message: "What color should the text be?",
            name: "textColor"
        },
        {
            type: "list",
            message: "What shape would you like to use?",
            name: "shape",
            choices: ["Triangle", "Square", "Circle"]
        },
        {
            type: "input",
            message: "What color should the shape be?",
            name: "color"
        }
    ]).then((response) => {
        if (response.text.length > 3) {
            response.text = response.text.substring(0, 3);
        }

        generateLogo(response);
    })
}

init();