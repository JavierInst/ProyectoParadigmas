//test básico
const BiesVM = require('./src/biesVM');

const program = [
  { type: 'LDV', value: 5 },    // Carga 5 en la pila
  { type: 'LDV', value: 10 },   // Carga 10 en la pila
  { type: 'ADD' },              // Suma los dos valores en la pila
  { type: 'PRN' },              // Imprime el resultado (15)
  { type: 'HLT' }               // Detiene la ejecución
];

const vm = new BiesVM();
vm.loadProgram(program);
vm.run();


//test de leer por consola
const readline = require('readline');
const BiesVM = require('./src/biesVM');
const parseToInstructions = require('./src/parser');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pregunta al usuario por el código a ejecutar
rl.question('Introduce un código (ejemplo: 5 + 10): ', (input) => {
  const instructions = parseToInstructions(input); // Traduce el input a instrucciones

  const vm = new BiesVM();
  vm.loadProgram(instructions); // Carga las instrucciones en la VM
  vm.run(); // Ejecuta las instrucciones

  rl.close(); // Cierra la interfaz
});
