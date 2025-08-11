// Imagine que você está tentando aprender a andar de bicicleta.
// Você decide praticar até conseguir andar por pelo menos 10 minutos sem cair.

// Aqui, usaremos um loop do...while para simunar esse processo:

let tempoDeAndar = 0;
let caiu = false;

do {
  tempoDeAndar++;
  console.log("Andei de bicicleta por", tempoDeAndar, "minutos...");

  if (tempoDeAndar === 3) {
    caiu = true;
  }
} while (!caiu && tempoDeAndar < 10);
