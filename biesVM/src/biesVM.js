class BiesVM {
  constructor() {
    // Inicialización de la VM
    this.stack = [];  // Pila (S)
    this.code = [];   // Código a ejecutar (C)
    this.env = [];    // Entorno de bindings (B)
    this.context = []; // Pila de contextos (D)
    this.currentInstruction = 0; // Instrucción actual
  }

  // Cargar el programa en la VM
  loadProgram(program) {
    this.code = program;
  }

  // Ejecutar el programa
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

  // Ejecutar una instrucción
  executeInstruction(instruction) {
    switch (instruction.type) {
      case 'LDV':  // Cargar valor en la pila
        this.stack.push(instruction.value);
        break;
      case 'ADD':  // Sumar valores
        this.binaryOperation((a, b) => a + b);
        break;
      case 'SUB':  // Restar valores
        this.binaryOperation((a, b) => b - a);
        break;
      case 'MUL':  // Multiplicar valores
        this.binaryOperation((a, b) => a * b);
        break;
      case 'DIV':  // Dividir valores
        this.binaryOperation((a, b) => b / a);
        break;
      case 'PRN':  // Imprimir valor
        console.log(this.stack.pop());
        break;
      case 'HLT':  // Detener ejecución
        this.halt();
        break;
      case 'POP':  // Sacar valor de la pila
        this.stack.pop();
        break;
      case 'SWP':  // Intercambiar valores
        this.swapTop();
        break;
      default:
        throw new Error(`Instrucción no reconocida: ${instruction.type}`);
    }
  }

  // Operación binaria en la pila
  binaryOperation(operation) {
    if (this.stack.length < 2) {
      throw new Error("No hay suficientes elementos en la pila.");
    }
    const a = this.stack.pop();
    const b = this.stack.pop();
    this.stack.push(operation(a, b));
  }

  // Intercambiar los dos valores superiores de la pila
  swapTop() {
    if (this.stack.length < 2) {
      throw new Error("No hay suficientes elementos para intercambiar.");
    }
    const top = this.stack.pop();
    const subTop = this.stack.pop();
    this.stack.push(top);
    this.stack.push(subTop);
  }

  // Detener la ejecución
  halt() {
    console.log("Ejecución terminada.");
    this.currentInstruction = this.code.length; // Forzar salida
  }
}

module.exports = BiesVM;
