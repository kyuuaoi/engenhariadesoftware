// Exemplos de Operadores Lógicos em Javascript

// Operador E lógico (&&)

const a = true;
const b = false;

const resultadoE1 = a && b; // False
const resultadoE2 = a && true; // True

console.log(`true && false: ${resultadoE1}`); // Saída: false
console.log(`true && true: ${resultadoE2}`); // Saída: true

// Operador OU lógico (||)

const resultadoOU1 = a || b;
const resultadoOU2 = a || false;

console.log(`true || false: ${resultadoOU1}`); // Saída: true
console.log(`false || false: ${resultadoOU2}`); // Saída: false

// Operador NÃO lógico (!)

const resultadoNao1 = !a;
const resultadoNao2 = !b;

console.log(`!true: ${resultadoNao1}`); // Saída: false
console.log(`!false: ${resultadoNao2}`); // Saída: true

// Combinações de operadores lógicos

const resultadoComb1 = (a || b) && !b;
const resultadoComb2 = (a && b) || a;

console.log(`(true || false) && !false: ${resultadoComb1}`); // Saída: true
console.log(`!(true && false) || true: ${resultadoComb2}`) // Saída: true