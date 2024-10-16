import antlr4 from 'antlr4';
import BiesVMLexer from '../src/Grammar/BiesVMLexer.js';  // Asegúrate de que la ruta sea correcta

/**
 * Entrada de instrucciones en lenguaje BiesVM.
 * @type {string}
 */
const input = `LET a = 5;
LET b = 10;
PRN MAX(a, b); 
HLT;
`;

/** @type {antlr4.InputStream} */
const chars = new antlr4.InputStream(input); // Crea un flujo de entrada a partir de la cadena de entrada.
/** @type {BiesVMLexer} */
const lexer = new BiesVMLexer(chars); // Inicializa el lexer con el flujo de entrada.
/** @type {Array<antlr4.Token>} */
const tokens = []; // Inicializa un array para almacenar los tokens generados.

let token; // Declara una variable para almacenar el token actual.
do {
    token = lexer.nextToken(); // Obtiene el siguiente token del lexer.
    tokens.push(token); // Agrega el token al array de tokens.
} while (token.type !== antlr4.Token.EOF); // Continúa hasta que se alcance el final del archivo (EOF).

// Opcionalmente, puedes imprimir los tokens generados para depuración.
// console.log("Tokens:", tokens.map(t => { return { type: t.type, text: t.text, line: t.line, column: t.column }; }));

/**
 * Convierte un array de tokens en instrucciones para la máquina virtual BiesVM.
 * @param {Array<antlr4.Token>} tokens - El array de tokens generados por el lexer.
 * @returns {Array<string>} - Un array de instrucciones en formato de texto.
 */
function convertTokensToInstructions(tokens) {
    const instructions = []; // Inicializa un array para almacenar las instrucciones generadas.
    let currentVariable = null; // Variable para almacenar el nombre de la variable actual.

    // Itera sobre todos los tokens generados.
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i]; // Obtiene el token actual.

        // Procesa el token según su tipo.
        switch (token.type) {
            case 2: // Tipo de token correspondiente a LET, PRN, HLT.
                if (token.text === 'LET') { // Si el token es 'LET', comienza a procesar una declaración de variable.
                    currentVariable = tokens[++i].text; // Obtiene el nombre de la variable.
                    const operator = tokens[++i].text; // Obtiene el operador.
                    // Verifica si el operador es '=' y procesa la asignación.
                    if (operator === '=') {
                        const value = tokens[++i].text; // Obtiene el valor a asignar.
                        instructions.push(`PUSH ${value}`); // Almacena el valor en la pila.
                        instructions.push(`ASSIGN ${currentVariable}`); // Asigna el valor a la variable.
                    } else if (operator === '-') { // Si el operador es '-', procesa la resta.
                        const value = tokens[++i].text; // Obtiene el valor a restar.
                        instructions.push(`PUSH ${value}`); // Almacena el valor en la pila.
                        instructions.push(`SUB ${currentVariable}`); // Resta el valor de la variable.
                    }
                } else if (token.text === 'PRN') { // Si el token es 'PRN', procesa una instrucción de impresión.
                    currentVariable = tokens[++i].text; // Obtiene la variable a imprimir.
                    instructions.push(`PRN ${currentVariable}`); // Genera la instrucción de impresión.
                } else if (token.text === 'HLT') { // Si el token es 'HLT', genera la instrucción de detener.
                    instructions.push('HLT'); // Instrucción de detener.
                }
                break;

            case 22: // Tipo de token correspondiente al punto y coma ';'.
                instructions.push('END_STATEMENT'); // Indica el final de la instrucción.
                break;

            case 1: // Tipo de token correspondiente a un número.
                instructions.push(`PUSH ${token.text}`); // Almacena el número en la pila.
                break;

            default:
                // Ignorar otros tipos de tokens no reconocidos.
                break;
        }
    }

    return instructions; // Retorna el array de instrucciones generadas.
}

// Convierte los tokens generados en instrucciones y las imprime en la consola.
const instructions = convertTokensToInstructions(tokens);
console.log(instructions); // Imprime las instrucciones generadas.
