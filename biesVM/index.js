const BiesVM = require('./src/biesVM');

// Definimos un programa de prueba
const program = [
  { type: 'LDV', value: 5 },    // Carga 5 en la pila
  { type: 'LDV', value: 10 },   // Carga 10 en la pila
  { type: 'ADD' },              // Suma los dos valores en la pila
  { type: 'PRN' },              // Imprime el resultado (15)
  { type: 'HLT' }               // Detiene la ejecución
];

// Instanciamos y ejecutamos la VM
const vm = new BiesVM();
vm.loadProgram(program);
vm.run();
