import antlr4 from 'antlr4';
import BiesVMLexer from './Grammar/BiesVMLexer.js';  // Asegúrate de que la ruta sea correcta

const input = `LET x = 5;
IF (x > 0) { PRN x; } ELSE { HLT; }
`;

const chars = new antlr4.InputStream(input);
const lexer = new BiesVMLexer(chars);
const tokens = [];

let token;
do {
    token = lexer.nextToken();
    tokens.push(token);
} while (token.type !== antlr4.Token.EOF);

console.log("Tokens:", tokens.map(t => {
    return { type: t.type, text: t.text, line: t.line, column: t.column };
}));
