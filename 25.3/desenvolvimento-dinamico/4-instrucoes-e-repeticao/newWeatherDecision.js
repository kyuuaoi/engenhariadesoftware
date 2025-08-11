// Variável que representará a previsão do tempo
// Pode ser "rainy", "sunny" ou "cloudy"

let weatherForecast = "cloudy";

// Analogia com a vida real: Decidindo se devemos levar um guarda-chuva
// Vamos adicionar uma condição extra para cobrir outro cenário

if (weatherForecast === "rainy") {
  // Se
  console.log("Devemos levar um guarda-chuva");
} else if (weatherForecast === "cloudy") {
  // Senão se

  console.log("Devemos levar um guarda-chuva só por segurança");
} else {
  // Senão
  console.log("NÃO precisamos levar um guarda-chuva");
}
