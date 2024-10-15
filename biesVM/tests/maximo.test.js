// maximo.test.js
import BiesVM from '../src/biesVM.js';

describe('Prueba de Máximo', () => {
    it('debería encontrar el máximo de dos números', () => {
        const biesVM = new BiesVM();
        const program = `
            LET a = 5;
            LET b = 10;
            PRN MAX(a, b); 
            HLT; 
        `;
        
        biesVM.loadProgram(program);
        
        // Sobreescribe console.log para capturar la salida
        const consoleOutput = [];
        console.log = (output) => consoleOutput.push(output);

        biesVM.run();

        // Verifica si se imprimió la salida correcta
        expect(consoleOutput).toEqual(['10']); // Esperando que imprima '10'
    });
});
