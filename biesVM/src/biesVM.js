class BiesVM {
  constructor() {
    this.stack = [];  // Pila (S)
    this.code = [];   // Código a ejecutar (C)
    this.env = [];    // Entorno de bindings (B)
    this.context = []; // Pila de contextos (D)
    this.currentInstruction = 0; // Para rastrear la instrucción actual
  }

  /**
   * Cargar el programa biesASM en la VM.
   * @param {Array} program - Arreglo de instrucciones en formato {type: "INSTRUCCION", ...}.
   */
  loadProgram(program) {
    this.code = program;
  }

  /**
   * Ejecuta el programa cargado en la VM.
   */
  run() {
    try {
      while (this.currentInstruction < this.code.length) {
        const instruction = this.code[this.currentInstruction];
        this.executeInstruction(instruction);
        this.currentInstruction++;
      }
    } catch (error) {
      console.error("Error durante la ejecución:", error);
    }
  }

  /**
   * Ejecuta una instrucción.
   * @param {Object} instruction - Objeto que representa una instrucción {type: "INSTRUCCION", ...}.
   */
  executeInstruction(instruction) {
    switch (instruction.type) {
      case 'LDV':  // Carga un valor en la pila
        this.stack.push(instruction.value);
        break;
      case 'ADD':  // Suma dos valores de la pila
        this.binaryOperation((a, b) => a + b);
        break;
      case 'SUB':  // Resta dos valores de la pila
        this.binaryOperation((a, b) => b - a);
        break;
      case 'MUL':  // Multiplica dos valores de la pila
        this.binaryOperation((a, b) => a * b);
        break;
      case 'DIV':  // Divide dos valores de la pila
        this.binaryOperation((a, b) => b / a);
        break;
      case 'PRN':  // Imprime el valor en la cima de la pila
        console.log(this.stack.pop());
        break;
      case 'HLT':  // Detiene la ejecución
        this.halt();
        break;
      case 'POP':  // Saca el valor de la pila
        this.stack.pop();
        break;
      case 'SWP':  // Intercambia los dos valores superiores de la pila
        this.swapTop();
        break;
      default:
        throw new Error(`Instrucción no reconocida: ${instruction.type}`);
    }
  }

  /**
   * Realiza una operación binaria en la pila.
   * @param {Function} operation - Función que realiza la operación (ej. suma, resta).
   */
  binaryOperation(operation) {
    if (this.stack.length < 2) {
      throw new Error("No hay suficientes elementos en la pila para realizar la operación.");
    }
    const a = this.stack.pop();
    const b = this.stack.pop();
    this.stack.push(operation(a, b));
  }

  /**
   * Intercambia los dos valores superiores de la pila.
   */
  swapTop() {
    if (this.stack.length < 2) {
      throw new Error("No hay suficientes elementos en la pila para intercambiar.");
    }
    const top = this.stack.pop();
    const subTop = this.stack.pop();
    this.stack.push(top);
    this.stack.push(subTop);
  }

  /**
   * Detiene la ejecución de la máquina virtual.
   */
  halt() {
    console.log("Ejecución terminada.");
    this.currentInstruction = this.code.length; // Forzar a salir del ciclo
  }
}

module.exports = BiesVM;
