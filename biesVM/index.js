import parseToInstructions from './src/parser.js';



const instructions = parseToInstructions('LET x = 5; IF (x > 0) { PRN x; } LDV x; ADD; SUB; MUL; DIV; POP; SWP; BLD; BST; HLT;');
console.log(instructions);

