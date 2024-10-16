import antlr4 from 'antlr4';
import BiesVMLexer from './Grammar/BiesVMLexer.js';  // Asegúrate de que la ruta sea correcta

/**
 * Código de entrada en formato de texto.
 * @type {string}
 */
const input = `LET x = 10;
LET y = 5;
ADD;
PRN x;
PRN y;
IF (x > y) {
    PRN x;
} ELSE {
    PRN y;
}
HLT;
`;

/**
 * Crea un flujo de entrada a partir del código de entrada.
 * @type {antlr4.InputStream}
 */
const chars = new antlr4.InputStream(input);

/**
 * Inicializa el lexer con el flujo de entrada.
 * @type {BiesVMLexer}
 */
const lexer = new BiesVMLexer(chars);

/**
 * Arreglo para almacenar los tokens generados por el lexer.
 * @type {Array<antlr4.Token>}
 */
const tokens = [];

let token;
do {
    token = lexer.nextToken();
    tokens.push(token);
} while (token.type !== antlr4.Token.EOF);

/**
 * Convierte un arreglo de tokens en instrucciones.
 * @param {Array<antlr4.Token>} tokens - El arreglo de tokens a convertir.
 * @returns {Array<string>} Instrucciones generadas a partir de los tokens.
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
 * Convierte los tokens en instrucciones y las imprime en consola.
 * @type {Array<string>}
 */
const instructions = convertTokensToInstructions(tokens);
console.log(instructions);

