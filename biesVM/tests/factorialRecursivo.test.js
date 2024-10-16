import antlr4 from 'antlr4';
import BiesVMLexer from '../src/Grammar/BiesVMLexer.js';  // Asegúrate de que la ruta sea correcta

/**
 * Cadena de entrada que contiene instrucciones en lenguaje BiesVM.
 * @type {string}
 */
const input = ` LDV 5     ; 
LDV 120   ; 
PRN;
HLT;
`;

/**
 * Crea un flujo de entrada a partir de la cadena de entrada y genera tokens utilizando el lexer BiesVM.
 * @type {antlr4.InputStream}
 */
const chars = new antlr4.InputStream(input);
const lexer = new BiesVMLexer(chars);
const tokens = [];

/**
 * Genera tokens del lexer hasta que se alcance el final del archivo (EOF).
 * @type {antlr4.Token}
 */
let token;
do {
    token = lexer.nextToken();
    tokens.push(token);
} while (token.type !== antlr4.Token.EOF);
// console.log("Tokens:", tokens.map(t => { return { type: t.type, text: t.text, line: t.line, column: t.column };}));

/**
 * Convierte un array de tokens en instrucciones para la máquina virtual BiesVM.
 * 
 * @param {antlr4.Token[]} tokens - Array de tokens generados por el lexer.
 * @returns {string[]} Array de instrucciones generadas a partir de los tokens.
 */
function convertTokensToInstructions(tokens) {
    const instructions = [];
    let currentVariable = null;

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        switch (token.type) {
            case 2: // LET, PRN, HLT
                if (token.text === 'LET') {
                    currentVariable = tokens[++i].text; // Obtiene el nombre de la variable
                    const operator = tokens[++i].text; // Obtiene el operador
                    if (operator === '=') {
                        const value = tokens[++i].text; // Obtiene el valor
                        instructions.push(`PUSH ${value}`); // Almacena el valor
                        instructions.push(`ASSIGN ${currentVariable}`); // Asigna a la variable
                    } else if (operator === '-') {
                        const value = tokens[++i].text; // Obtiene el valor
                        instructions.push(`PUSH ${value}`);
                        instructions.push(`SUB ${currentVariable}`); // Resta a la variable
                    }
                } else if (token.text === 'PRN') {
                    currentVariable = tokens[++i].text; // Obtiene la variable a imprimir
                    instructions.push(`PRN ${currentVariable}`); // Instrucción de impresión
                } else if (token.text === 'HLT') {
                    instructions.push('HLT'); // Instrucción de detener
                }
                break;

            case 22: // ';'
                instructions.push('END_STATEMENT'); // Fin de la instrucción
                break;

            case 1: // Número
                instructions.push(`PUSH ${token.text}`); // Almacena el número
                break;

            default:
                // Ignorar otros tipos no reconocidos
                break;
        }
    }

    return instructions;
}

/**
 * Convierte los tokens generados en instrucciones y las imprime en la consola.
 * 
 * @type {string[]} Array de instrucciones generadas a partir de los tokens.
 */
const instructions = convertTokensToInstructions(tokens);
console.log(instructions);
