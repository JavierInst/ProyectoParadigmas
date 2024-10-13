import antlr4 from 'antlr4';
import BiesVMLexer from './Grammar/BiesVMLexer.js';
import BiesVMParser from './Grammar/BiesVMParser.js';
import BiesVMVisitor from './Grammar/BiesVMVisitor.js';

/**
 * Parsea el código ensamblador y lo convierte en instrucciones utilizando ANTLR.
 * 
 * @param {string} input - El código fuente del programa ensamblador.
 * @returns {Array} Un array de instrucciones generadas por el visitor.
 */
function parseToInstructions(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new BiesVMLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new BiesVMParser(tokens);

    // Log tokens for debugging
    console.log('Tokens:', tokens.getTokens());

    const programContext = parser.program();

    const instructions = [];
    const visitor = new BiesVMVisitor();
    visitor.visit(programContext, instructions);

    return instructions;
}

/**
 * Convierte un árbol de sintaxis (AST) en una lista de instrucciones.
 * 
 * @param {Object} tree - El árbol de sintaxis generado por ANTLR.
 * @returns {Array} Un array de instrucciones en formato JSON.
 */
function convertTreeToInstructions(tree) {
    const instructions = [];

    // Implementa la lógica para recorrer el árbol y generar instrucciones
    tree.instruction().forEach(instr => {
        if (instr.ldvInstruction()) {
            let value = instr.ldvInstruction().NUMBER() || instr.ldvInstruction().STRING();
            value = value.getText();
            // Verificar si es una cadena o un número
            if (!isNaN(value)) {
                value = parseFloat(value);
            } else {
                value = value.replace(/\"/g, ''); // Eliminar las comillas dobles de las cadenas
            }
            instructions.push({ type: 'LDV', value });
        } else if (instr.addInstruction()) {
            instructions.push({ type: 'ADD' });
        } else if (instr.subInstruction()) {
            instructions.push({ type: 'SUB' });
        } else if (instr.mulInstruction()) {
            instructions.push({ type: 'MUL' });
        } else if (instr.divInstruction()) {
            instructions.push({ type: 'DIV' });
        } else if (instr.prnInstruction()) {
            instructions.push({ type: 'PRN' });
        } else if (instr.hltInstruction()) {
            instructions.push({ type: 'HLT' });
        } else if (instr.popInstruction()) {
            instructions.push({ type: 'POP' });
        } else if (instr.swpInstruction()) {
            instructions.push({ type: 'SWP' });
        } else if (instr.bldInstruction()) {
            instructions.push({ type: 'BLD' });
        } else if (instr.bstInstruction()) {
            instructions.push({ type: 'BST' });
        }
    });

    return instructions;
}

export default parseToInstructions;
