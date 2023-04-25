# LogoCraft

## Description 

This code creates a Node.js command-line application that prompts the user for input to generate a logo and save it as an SVG file named `logo.svg`. 

## User Story

AS a freelance web developer <br>
I WANT to generate a simple logo for my projects <br>
SO THAT I don't have to pay a graphic designer <br>

## Acceptance Criteria

GIVEN a command-line application that accepts user input <br>
WHEN I am prompted for text <br>
THEN I can enter up to three characters <br>
WHEN I am prompted for the text color <br>
THEN I can enter a color keyword (OR a hexadecimal number) <br>
WHEN I am prompted for a shape <br>
THEN I am presented with a list of shapes to choose from: circle, triangle, and square <br>
WHEN I am prompted for the shape's color <br>
THEN I can enter a color keyword (OR a hexadecimal number) <br>
WHEN I have entered input for all the prompts <br>
THEN an SVG file is created named `logo.svg` <br>
AND the output text "Generated logo.svg" is printed in the command line <br>
WHEN I open the `logo.svg` file in a browser <br>
THEN I am shown a 300x200 pixel image that matches the criteria I entered <br>




## Deployed URL

Please find a walkthrough video of the application here:

https://watch.screencastify.com/v/RoobWkyapZaY5SrceGVX

https://watch.screencastify.com/v/RoobWkyapZaY5SrceGVX

Sample logo 

https://github.com/bragceo/LogoCraft/commit/36bbadafddecc7e9fa0b8eec33d0f11660cbe83e

![Sample SVG file logo](https://user-images.githubusercontent.com/119948453/234281929-9d48e92a-52d5-45dc-8124-4abb90935b74.svg)


## How the Code Works

Below are the relevant parts of the code and how they work:

Index.js
 
At start Init() function is called which asks user for all the inputs needed for generating the logo
Once user has given all the input, the data is passed to the generateLogo function
The shape object is created based on user input and then the svg is saved to a file
 
Shapes.js
 
The shape object construction saves the info passed to it
The actual shape is determined by the class that was created.
The save to fileToFile function combines the svg boilerplate code with the shape and text elements and saves it to a file.
 
Tests
 
The shapes.test.js page contains all the tests for jest
There is a test for each shape and its expected output
 

## How to run the application
 
You can run the application by running this command in the application directory
node index.js

The output will be saved to logo.svg file
 
Node.js must be installed to make it work.
The test can be run with 

npm test



## Special Thanks 

Shout out to the awesome Instructors and TAs who worked with me through numerous challenges. These indiviudals include: Diego, Enrique Gomes, and Erik Hoverstein. 



## Authors 

Lavell Juan<br>




## License 

Please refer to license in repo 
