//test básico
const BiesVM = require('./src/biesVM');

const program = [
  { type: 'LDV', value: 5 }, // Carga 5 en la pila
  { type: 'LDV', value: 10 }, // Carga 10 en la pila
  { type: 'ADD' }, // Suma los dos valores en la pila
  { type: 'PRN' }, // Imprime el resultado (15)
  { type: 'HLT' }, // Detiene la ejecución
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
  output: process.stdout,
});

//pedir el codigo
rl.question('Introduce un código (ejemplo: 5 + 10): ', (input) => {
  const instructions = parseToInstructions(input); // Traduce el input a instrucciones

  const vm = new BiesVM();
  vm.loadProgram(instructions); // Carga las instrucciones en la VM
  vm.run(); // Ejecuta las instrucciones

  rl.close(); // Cierra la interfaz
});

//test a mano
ManualesTest(fuente);
{
  const instructions = parseToInstructions(funete);

  const vm = new BiesVM();
  vm.loadProgram(instructions);
  vm.run();
}

// Fuente holamundo nivel 1
print(666);

// Fuente holamundo nivel 2
let holamundo = 666;
print(holamundo);

// Fuente holamundo nivel 3
let a1 = 1;
let b1 = 665;
print(a + b);

// Fuente holamundo nivel 10 (nivel saiyajin)
let salude = (saludo) => print(saludo);
let a2 = 1;
let b2 = 656;
salude(a * 10 + b);
