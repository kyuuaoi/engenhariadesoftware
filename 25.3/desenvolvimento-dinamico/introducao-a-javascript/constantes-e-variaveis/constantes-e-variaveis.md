//Constantes e Variáveis

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

// Anotações no Código

1. O que são anotações no código?
Anotações no código, também conhecidas como comentários, são trechos de texto que você pode adicionar ao seu código para explicar o que ele faz. Elas são extremamente úteis para documentar o seu raciocínio e facilitar a manutenção do código no futuro.

2. Por que usar anotações?
Facilitam a compreensão: Quando você volta ao seu código após um tempo, pode ser difícil lembrar o que cada parte faz. Comentários ajudam a refrescar a memória.
Melhoram a manutenção: Se outras pessoas (ou você mesmo) forem trabalhar no código mais tarde, as anotações ajudam a entender rapidamente a lógica por trás das implementações.
Documentação: Elas servem como uma forma de documentar regras de negócio, funções e variáveis, tornando o código mais legível.
3. Tipos de comentários em JavaScript
Existem duas principais formas de fazer comentários em JavaScript:

Comentários de linha única: Usando //. Tudo que estiver após // na mesma linha será ignorado pelo interpretador.

// Este é um comentário de linha única
let x = 5; // Atribui 5 à variável x
Comentários de múltiplas linhas: Usando /* ... */. Tudo que estiver entre /* e */ será ignorado.

/* Este é um comentário
   de múltiplas linhas */
let y = 10;
4. Boas práticas para anotações
Seja claro e conciso: Use uma linguagem simples e direta. O objetivo é que qualquer pessoa (ou você mesmo no futuro) consiga entender rapidamente.
Comente o que é necessário: Não comente cada linha de código, mas faça anotações onde a lógica não é óbvia.
Atualize os comentários: Se você mudar a lógica do código, não se esqueça de atualizar os comentários para que eles continuem relevantes.
5. Exemplo de uso
Aqui está um exemplo simples que ilustra como usar comentários no código:

// Função que soma dois números
function somar(a, b) {
    return a + b; // Retorna a soma de a e b
}

/* Chamada da função somar
   e exibição do resultado no console */
console.log(somar(5, 3)); // Saída: 8
Neste exemplo, os comentários ajudam a entender rapidamente o que a função faz e qual é a saída esperada.