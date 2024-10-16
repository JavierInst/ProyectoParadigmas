import antlr4 from 'antlr4';
import BiesVMLexer from './BiesVMLexer.js';
import BiesVMParser from './BiesVMParser.js';

/**
 * Clase BiesVM que representa la máquina virtual.
 */
class BiesVM {
    /**
     * Constructor de la máquina virtual BiesVM.
     * Inicializa la pila, el entorno de variables y el puntero de la instrucción actual.
     */
    constructor() {
        this.stack = [];
        this.env = {}; // Entorno para variables
        this.currentInstruction = 0;
    }

    /**
     * Cargar el programa en la máquina virtual.
     * Usa el lexer y parser generados por ANTLR para analizar el código ensamblador.
     * 
     * @param {string} input - El código fuente del programa ensamblador.
     */
    loadProgram(input) {
        const chars = new antlr4.InputStream(input); // Entrada de texto
        const lexer = new BiesVMLexer.BiesVMLexer(chars); // Lexer
        const tokens = new antlr4.CommonTokenStream(lexer); // Tokens
        const parser = new BiesVMParser.BiesVMParser(tokens); // Parser
        this.code = parser.program().instruction(); // Obtener las instrucciones
    }

    /**
     * Ejecuta el programa cargado en la máquina virtual.
     * Itera sobre las instrucciones y las ejecuta secuencialmente.
     */
    run() {
        while (this.currentInstruction < this.code.length) {
            const instruction = this.code[this.currentInstruction];
            this.executeInstruction(instruction);
            this.currentInstruction++;
        }
    }

    /**
     * Ejecuta una instrucción específica.
     * 
     * @param {Object} instruction - La instrucción generada por ANTLR.
     */
    executeInstruction(instruction) {
        if (instruction.ldvInstruction()) {
            let value = instruction.ldvInstruction().NUMBER() || instruction.ldvInstruction().STRING();
            if (!isNaN(value)) {
                this.stack.push(parseFloat(value.getText())); // Si es un número, convertir a flotante
            } else {
                this.stack.push(value.getText().replace(/\"/g, '')); // Si es una cadena, eliminar comillas
            }
        } else if (instruction.addInstruction()) {
            this.binaryOperation((a, b) => a + b);
        } else if (instruction.subInstruction()) {
            this.binaryOperation((a, b) => b - a);
        } else if (instruction.mulInstruction()) {
            this.binaryOperation((a, b) => a * b);
        } else if (instruction.divInstruction()) {
            this.binaryOperation((a, b) => b / a);
        } else if (instruction.prnInstruction()) {
            const valueToPrint = this.stack.pop();
            console.log(valueToPrint);
        } else if (instruction.hltInstruction()) {
            this.halt();
        } else if (instruction.popInstruction()) {
            this.stack.pop();
        } else if (instruction.swpInstruction()) {
            this.swapTop();
        } else if (instruction.bldInstruction()) {
            const env = instruction.bldInstruction().ID(0).getText();
            const key = instruction.bldInstruction().ID(1).getText();
            const value = this.env[env]?.[key];
            if (value !== undefined) {
                this.stack.push(value);
            } else {
                throw new Error(`Valor no encontrado en el entorno: ${env}, ${key}`);
            }
        } else if (instruction.bstInstruction()) {
            const condition = this.stack.pop();
            if (condition) {
                this.currentInstruction = parseInt(instruction.bstInstruction().NUMBER().getText(), 10) - 1;
            }
        } else if (instruction.stkInstruction()) { 
            const k = parseInt(instruction.stkInstruction().NUMBER().getText(), 10);
            if (k < 0 || k >= this.stack.length) {
                throw new Error(`Índice fuera de rango en STK: ${k}`);
            }
            this.stack.push(this.stack[k]); // Empuja el K-ésimo elemento en la cima de la pila
        } else if (instruction.srkInstruction()) {  
            const k = parseInt(instruction.srkInstruction().NUMBER().getText(), 10);
            if (k < 0 || k >= this.stack.length) {
                throw new Error(`Índice fuera de rango en SRK: ${k}`);
            }
            const rest = this.stack.slice(k); // Tomar todos los elementos desde K
            this.stack.push(...rest); // Apilar los elementos seleccionados
        }
    }

    /**
     * Realiza una operación binaria (suma, resta, etc.) en los dos elementos superiores de la pila.
     * 
     * @param {Function} operation - Función que define la operación a realizar (suma, resta, etc.).
     * @throws {Error} Si no hay suficientes elementos en la pila.
     */
    binaryOperation(operation) {
        if (this.stack.length < 2) {
            throw new Error('No hay suficientes elementos en la pila.');
        }
        const a = this.stack.pop();
        const b = this.stack.pop();
        this.stack.push(operation(a, b));
    }

    /**
     * Intercambia los dos elementos superiores de la pila.
     * 
     * @throws {Error} Si no hay suficientes elementos en la pila.
     */
    swapTop() {
        if (this.stack.length < 2) {
            throw new Error('No hay suficientes elementos para intercambiar.');
        }
        const top = this.stack.pop();
        const subTop = this.stack.pop();
        this.stack.push(top);
        this.stack.push(subTop);
    }

    /**
     * Detiene la ejecución del programa.
     * Establece el puntero de instrucción en el final del programa.
     */
    halt() {
        console.log("Ejecución terminada.");
        this.currentInstruction = this.code.length; // Detener la ejecución
    }
}

export default BiesVM;
