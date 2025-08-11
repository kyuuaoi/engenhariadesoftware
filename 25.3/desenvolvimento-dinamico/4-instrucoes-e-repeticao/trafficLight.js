// Função que recebe a cor do semáforo e decide a ação do pedrestre
function checkTrafficLight(lightCollor) {
  switch (lightCollor) {
    case "verde":
      console.log("Pode atravessar a rua.");
      break;
    case "amarelo":
      console.log("Prepare-se para parar.");
      break;
    case "vermelho":
      console.log("Pare! Não atravesse a rua!");
      break;
    default:
      console.log(
        "Cor inválida! Aguarde até que o semáforo esteja em uma cor válida!"
      );
  }

  // Logs

  // Pode atravessar a rua
  // Prepare-se para parar
  // Pare! Não atravesse a rua.
  // Cor inválida! Aguarde até que o semáforo esteja em uma cor válida
}

// Exemplos de uso
checkTrafficLight("verde");
checkTrafficLight("amarelo");
checkTrafficLight("vermelho");
checkTrafficLight("azul");
