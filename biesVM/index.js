import parseToInstructions from './src/parser.js';



const instructions = parseToInstructions("LET x = 5; IF (x > 0) { PRN x; }");
console.log(instructions);

