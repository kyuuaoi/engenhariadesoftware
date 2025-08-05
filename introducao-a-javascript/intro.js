1. O que são constantes e variáveis?
Variáveis: São espaços na memória que podem armazenar valores que podem mudar ao longo do tempo. Em JavaScript, você pode declarar variáveis usando as palavras-chave var, let ou const.
Constantes: São variáveis cujo valor não pode ser alterado uma vez definido. Em JavaScript, você usa a palavra-chave const para declarar uma constante.
2. Tipos de declaração
var: É a forma mais antiga de declarar variáveis. O escopo de uma variável declarada com var é global ou de função, o que pode levar a comportamentos inesperados se não for usado corretamente. Por isso, seu uso não é mais recomendado nas boas práticas atuais.

let: Introduzido no ES6, let permite declarar variáveis com escopo de bloco. Isso significa que a variável só existe dentro do bloco onde foi definida, oferecendo mais segurança e evitando conflitos de nomes.

const: Também introduzido no ES6, const é usado para declarar constantes. Uma vez que um valor é atribuído a uma constante, ele não pode ser alterado. Isso é útil para garantir que certos valores permaneçam fixos durante a execução do código.

3. Boas práticas
Evitar var: Como mencionado, o uso de var não é recomendado. Prefira let e const para garantir um código mais limpo e seguro.
Usar const sempre que possível: Se você sabe que o valor de uma variável não vai mudar, declare-a como const. Isso ajuda a evitar erros acidentais de alteração de valor.
4. Exemplos
Aqui está um exemplo simples de como usar essas declarações:

const PI = 3.14; // constante
let radius = 5; // variável que pode mudar

function calculateArea() {
    var area = PI * radius * radius; // variável com escopo de função
    return area;
}

console.log(calculateArea()); // Saída: 78.5
Neste exemplo, PI é uma constante que não muda, enquanto radius é uma variável que pode ser alterada. A variável area é declarada com var, o que significa que seu escopo é limitado à função calculateArea.

