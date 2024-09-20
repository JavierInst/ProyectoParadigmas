const BiesVM = require('./src/biesVM');
const parseToInstructions = require('./src/parser');

// Nivel 1: print(666);
const nivel1 = `print(666)`;

// Nivel 2: let holamundo = 666; print(holamundo);
const nivel2 = `let holamundo = 666; print(holamundo)`;

// Nivel 3: let a1 = 1; let b1 = 665; print(a1 + b1);
const nivel3 = `let a1 = 1; let b1 = 665; print(a1 + b1)`;

// Cargar y ejecutar cada nivel
const runTest = (level, description) => {
  console.log(`--- ${description} ---`);
  const instructions = parseToInstructions(level);
  console.log("Instrucciones generadas:", instructions); // Imprimir las instrucciones generadas
  const vm = new BiesVM();
  vm.loadProgram(instructions);
  vm.run();
};

// Ejecutar las pruebas
runTest(nivel1, "Ejecución Nivel 1");
runTest(nivel2, "Ejecución Nivel 2");
runTest(nivel3, "Ejecución Nivel 3");
