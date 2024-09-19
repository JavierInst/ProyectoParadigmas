const BiesVM = require('../src/biesVM');

test('should initialize with empty stack and context', () => {
  const vm = new BiesVM();
  expect(vm.stack).toEqual([]);
  expect(vm.context).toEqual([]);
});


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
