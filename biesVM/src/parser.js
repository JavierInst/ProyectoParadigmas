function parseToInstructions(input) {
    const tokens = input.split(' '); // Divide el input por espacios
    const instructions = [];
  
    tokens.forEach((token) => {
      if (!isNaN(token)) {
        instructions.push({ type: 'LDV', value: parseInt(token) }); // Si es un número, lo carga en la pila
      } else if (token === '+') {
        instructions.push({ type: 'ADD' }); // Traduce "+" a una suma
      } else if (token === '-') {
        instructions.push({ type: 'SUB' }); // Traduce "-" a una resta
      } else if (token === '*') {
        instructions.push({ type: 'MUL' }); // Traduce "*" a una multiplicación
      } else if (token === '/') {
        instructions.push({ type: 'DIV' }); // Traduce "/" a una división
      }
    });
  
    instructions.push({ type: 'PRN' }); // Imprime el resultado
    instructions.push({ type: 'HLT' }); // Detiene la ejecución
    return instructions;
  }
  
  module.exports = parseToInstructions;
  