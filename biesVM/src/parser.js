function parseToInstructions(code) {
  const instructions = [];
  const lines = code.split(';').map(line => line.trim()).filter(line => line);

  // Diccionario de variables para almacenar los valores
  const variables = {};

  const evaluateValue = (value) => {
    if (!isNaN(value)) {
      return parseInt(value, 10); // valor literal
    } else if (variables[value] !== undefined) {
      return variables[value]; // valor de variable
    } else {
      throw new Error(`Variable no definida: ${value}`);
    }
  };

  lines.forEach(line => {
    // Manejar las instrucciones 'print'
    if (line.startsWith('print(')) {
      const value = line.match(/print\(([^)]+)\)/)[1].trim();
      if (isNaN(value)) {
        // Si es una variable
        if (variables[value] !== undefined) {
          instructions.push({ type: 'LDV', value: variables[value] });
        } else {
          throw new Error(`Variable no definida: ${value}`);
        }
      } else {
        // Si es un valor literal
        instructions.push({ type: 'LDV', value: parseInt(value, 10) });
      }
      instructions.push({ type: 'PRN' }); // Instrucción para imprimir
    }

    // Manejar las declaraciones de variables
    else if (line.startsWith('let')) {
      const [_, varName, varValue] = line.match(/let\s+(\w+)\s*=\s*(.+)/);

      // Evalúa el valor si es una expresión
      const valueParts = varValue.split('+').map(part => part.trim());
      variables[varName] = valueParts.reduce((acc, part) => acc + evaluateValue(part), 0);
    }

    // Manejar operaciones aritméticas
    else if (line.includes('+')) {
      const [left, right] = line.split('+').map(part => part.trim());

      const leftValue = isNaN(left) ? evaluateValue(left) : parseInt(left, 10);
      const rightValue = isNaN(right) ? evaluateValue(right) : parseInt(right, 10);

      instructions.push({ type: 'LDV', value: leftValue });
      instructions.push({ type: 'LDV', value: rightValue });
      instructions.push({ type: 'ADD' }); // Instrucción para sumar
      instructions.push({ type: 'PRN' }); // Imprimir el resultado
    }
  });

  instructions.push({ type: 'HLT' }); // Agregar la instrucción de detener al final
  return instructions;
}

module.exports = parseToInstructions;
