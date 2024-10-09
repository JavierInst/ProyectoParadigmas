import antlr4 from 'antlr4';
import  BiesVMLexer  from './Grammar/BiesVMLexer.js';
import  BiesVMParser  from './Grammar/BiesVMParser.js';

function parseToInstructions(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new BiesVMLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new BiesVMParser(tokens);

    const tree = parser.program(); // Iniciar el parsing

    return convertTreeToInstructions(tree); // Función para convertir el árbol a instrucciones
}

function convertTreeToInstructions(tree) {
    const instructions = [];

    // Implementa la lógica para recorrer el árbol y generar instrucciones
    tree.instruction().forEach(instr => {
        if (instr.ldvInstruction()) {
            const value = instr.ldvInstruction().INT().getText();
            instructions.push({ type: 'LDV', value: parseInt(value) });
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

export default  parseToInstructions;
