import test from "./test.mjs";

//Square 

function square (n) {
    return n * n
}

//Inches to MM
function inchesToMM(inches) {
    return inches * 25.4
}

// Square root
function squareRoot(n) {
    if (n < 0 ) return null;
    let guess= n / 2;
    let precicison = 0.0001;
    while ((guess * guess - n < 0 ? - (guess * guess - n) : (guess * guess - n)) > precicison){
         guess = (guess + n / guess) / 2
      }

      let factor = 100000;
      return (guess * factor + 0.5) / factor | 0;
    }
       
    // Cube 
function cube (n) {
    return n * n * n;
}

// Circle given the raidus
function circleArea(radius) {
    return 3.141592653589793 * radius * radius
}

//Greeting

function greet(name) {
    return "Hello, " + name + "!";
}

//Flatten array

function flattenArray(arr) {
    let result = [];
    let stack = [];
    stack[0] = arr;

    let i = 0;
    while (i < stack.length) {
        let current = stack[i];

        if (current && current.length > 0) {
            let j = 0;
            while (j < current.length) {
                let value = current[j];

                if (value && value.length > 0) {
                    stack[stack.length] = value;
                } else {
                    if (typeof value === "number") {
                        result[result.length] = value;
                    }
                }
                j = j + 1;
            }
        }

        i = i + 1;
    }

    return result;
}

// Left and right up and down, away we go.

function procesTree(nodeData) { 
    let total = 0
    let maxDepth = 1
    let nodeCount = 0
    let pile = []
    pile[0] = { node: nodeData, level: 1 }

    let i = 0
    while (i < pile.length) {
        let item = pile[i]

        if (item.node && typeof item.node.value == "number") {
            nodeCount += 1
            total += item.node.value
            maxDepth = item.level > maxDepth ? item.level : maxDepth
        }

        if (item.node.left) pile[pile.length] = { node: item.node.left, level: item.level + 1 }
        if (item.node.right) pile[pile.length] = { node: item.node.right, level: item.level + 1 }

        i += 1
    }

    return { sum: total, deepestLevel: maxDepth, nodes: nodeCount }
}

export default procesTree


//Test
const tests = test("Test Function")

// Square test
tests.isEqual(square(5), 25,  "5 squared shoudl be 25");
tests.isEqual(square(-4), 16, "-4 squared shoudl be 16");
tests.isEqual(square(0),0, "0 squared should be 0");

// Inches to MM
tests.isEqual(inchesToMM(1), 25.4, "1 inch woudl be 25.4mm");
tests.isEqual(inchesToMM(2), 50.8, "2 inches would be 50.8mm");

// Square root
tests.isEqual(squareRoot(25), 5, "Square root of 25 should be ~5");
tests.isEqual(squareRoot(0), 0, "Square root of 0 should be 0");
tests.isEqual(squareRoot(-9), null, "square root of -9 should return null");

//Cube 
tests.isEqual(cube(3), 27, "3 cubed should be 27");
tests.isEqual(cube(-2), -8, "-2 cubed shoudl be -8");
tests.isEqual(cube(0), 0, "0 cubed should be 0");

// Circle area
tests.isEqual(circleArea(1), 3.141592653589793, "Area of circle with radius 1 should be π");
tests.isEqual(circleArea(2), 12.566370614359172, "ARea of a circle with radisu 2 should be 4π");

// Greet
tests.isEqual(greet("Danny"), "Hello, Danny!", "Greeting for Danny should be 'Hello, Danny!'");
tests.isEqual(greet("Joey"), "Hello, Joey!", "Greeting for Joey should be 'Hello, Joey!'");
tests.isEqual(greet("Jesse"), "Hello, Jesse!", "Greeting for Jesse should be 'Hello, Jesse!'");


// Array test

tests.isEqual(JSON.stringify(flattenArray([1, [2, [3, 4], 5], 6])), JSON.stringify([1, 2, 3, 4, 5, 6]), "Flatten array"); 


