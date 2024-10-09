import parseToInstructions from './src/parser.js';

const jsCode = `PRINT(42);`;



const instructions = parseToInstructions(jsCode);
console.log(instructions);

