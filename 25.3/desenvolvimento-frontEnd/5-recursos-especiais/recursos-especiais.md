Observação: este site inclui um sistema de acessibilidade. Pressione Control-F11 para ajustar o site para pessoas com deficiências visuais que usam um leitor de tela; Pressione Control-F10 para abrir um menu de acessibilidade.
Pressione Enter para acessar acessibilidade para pessoas cegasque usam leitores de tela
Pressione Enter para Navegação pelo Teclado
Pressione Enter para acessar o menu de acessibilidade
Recursos Especiais
​Introdução

Nesta aula, vamos explorar alguns recursos especiais do CSS que são fundamentais para a estilização de páginas web. Começaremos pelo box-sizing, um conceito essencial para entender como as dimensões dos elementos são calculadas. Em seguida, discutiremos os degradês, técnicas que permitem criar transições suaves entre cores, tornando os elementos visuais mais atraentes. Vamos também abordar as animações, que adicionam dinamismo e interatividade às páginas. Por fim, aprenderemos sobre transições, que permitem mudanças suaves de estilo em resposta a ações do usuário.



Box Sizing

Hoje, abordaremos alguns recursos especiais necessários para entender a estilização de páginas usando CSS. Nosso foco será no conceito de box sizing. Existem duas formas de utilizar o box size e aprenderemos a diferença entre elas. Esse entendimento é fundamental para a correta aplicação de estilos em HTML e CSS.

Primeiramente, exploraremos as duas propriedades principais do box sizing: content-box e border-box. A principal diferença entre essas duas propriedades está na forma como a largura e a altura dos elementos são calculadas. No content-box, o tamanho definido para o elemento considera apenas o conteúdo, enquanto as bordas e o padding são adicionados a esse valor, aumentando o tamanho total do elemento. Já no border-box, o tamanho definido inclui as bordas e o padding, resultando em um cálculo diferente e, muitas vezes, mais intuitivo para o desenvolvimento de layouts.

Para exemplificar, imagine que temos um contêiner com largura definida de 200 pixels, 20 pixels de padding e 5 pixels de borda. Usando o content-box, a largura total do elemento será a soma de todas essas dimensões: 200 pixels (conteúdo) + 20 pixels (padding) + 10 pixels (bordas), resultando em 230 pixels de largura total. Já com o border-box, a largura total permanece em 200 pixels, pois o padding e a borda são incluídos dentro desse valor, não somados a ele.

Agora, vamos aplicar esses conceitos na prática. Suponha que temos um documento HTML com uma estrutura básica. No arquivo CSS associado, estilizamos o corpo da página definindo a fonte, a cor de fundo e o espaçamento. Criamos um contêiner principal e, dentro dele, duas caixas, uma utilizando content-box e outra border-box. A diferença visual entre as duas se torna evidente ao observarmos o tamanho final de cada caixa.

Por exemplo, no CSS, temos o seguinte código para estilizar um contêiner:

​


​E para as caixas:


Ao visualizar o resultado, percebemos que a caixa com content-box é maior devido à soma dos valores de padding e borda ao valor definido, enquanto a caixa com border-box mantém a largura total de 200 pixels, incluindo padding e borda dentro dessa medida.

Portanto, ao utilizar box-sizing, é crucial compreender como essas propriedades afetam o cálculo das dimensões dos elementos. Esta compreensão permite criar layouts mais precisos e controlados, garantindo que o design se comporte conforme o esperado em diferentes dispositivos e resoluções.


Degradês

Agora, vamos abordar um conceito muito utilizado na estilização de páginas: os degradês, ou gradientes, no CSS. Veremos os fundamentos dos degradês e como criar diferentes tipos, como lineares e radiais, explorando suas aplicações práticas.

Os degradês são transições suaves entre duas ou mais cores. Por exemplo, um gradiente linear começa com uma cor mais escura e gradualmente transita para uma cor mais clara. Já o gradiente radial tem sua cor mais escura no centro, tornando-se mais clara à medida que se aproxima das bordas. Vamos explorar como aplicar esses conceitos em nosso código CSS.

Primeiramente, precisamos de uma estrutura HTML básica. Suponha que temos duas divs, uma para exemplificar um gradiente linear e outra para um gradiente radial. No HTML, essas divs são definidas com classes específicas que serão estilizadas no CSS. No CSS, usamos seletores para aplicar os estilos. Aqui está um exemplo de como isso pode ser feito:

​


​No CSS, definimos as propriedades de gradiente para as divs:

​



No exemplo acima, a classe ‘.linear’ aplica um gradiente linear que transita de uma cor para outra, da esquerda para a direita. A classe ‘.radial’ aplica um gradiente radial que começa no centro e se expande para fora. Alterar as cores ou a direção do gradiente é simples e pode ser ajustado conforme necessário para obter o efeito desejado.

Os gradientes são especialmente úteis para estilizar botões, caixas e outros elementos de interface, proporcionando um aspecto visual mais atraente e moderno. Eles são uma ferramenta poderosa no arsenal de um desenvolvedor front-end para criar designs dinâmicos e envolventes.​



Animações

Agora vamos falar de um assunto que provavelmente vocês vão adorar: animações. É difícil encontrar alguém que não se apaixone por animações. Embora não consigamos abordar todos os recursos disponíveis, esta introdução servirá como um ponto de partida para explorar o que podemos fazer com animações em HTML e CSS. Neste terceiro tópico, vamos aprender sobre animações, configurando keyframes.

As animações no CSS são configuradas principalmente usando keyframes. Os keyframes permitem definir estados intermediários e finais de uma animação, utilizando propriedades específicas do CSS. Vamos exemplificar com um código que mostra um quadrado se movendo e mudando de cor gradualmente.

Primeiro, vejamos a estrutura HTML básica. No head, definimos os metadados, o título da página e um link para o arquivo CSS externo que conterá as animações. No body, criamos uma div com a classe “animação”, que contém um texto “animar”. O HTML é simples, mas a mágica acontece no CSS.

No CSS, o componente fundamental para animações é o keyframes. Ele define como o elemento deve se comportar em cada estágio da animação. Por exemplo:

​


​Transições

Nesta aula, estamos falando sobre alguns recursos especiais que podemos utilizar para estilizar nossas páginas com CSS. No tópico 1, abordamos o box-sizing, explicando as duas propriedades principais e como elas funcionam. No tópico 2, falamos sobre o conceito de degradês, explorando como criar transições suaves de cor. No tópico 3, discutimos animações, um recurso especial que permite criar efeitos dinâmicos e interativos. Agora, vamos aprender sobre transições.

As transições no CSS permitem alterar gradualmente os valores das propriedades ao longo de um determinado período. Imagine uma imagem ou um botão que muda de cor ou forma quando você passa o mouse sobre ele. Esse efeito é criado usando transições, proporcionando uma mudança suave em vez de uma alteração brusca. Vamos explorar como configurar transições no CSS e diferenciar transições de animações.

Primeiro, vejamos um exemplo prático. Suponha que temos uma estrutura HTML simples com uma div chamada “caixa”. No arquivo CSS, estilizamos essa div e definimos as propriedades de transição. Aqui está o código HTML:

​


​No CSS, aplicamos as transições da seguinte forma:

​


​No exemplo acima, a classe “caixa” define a largura, altura, cor de fundo, cor do texto e alinhamento do texto. A propriedade ‘transition’ especifica que as mudanças no ‘background-color’ e ‘transform’ devem ocorrer ao longo de 2 segundos. Quando o usuário passa o mouse sobre a div, o seletor :hover é ativado, alterando a cor de fundo para vermelho e rotacionando a caixa em 360 graus. A transição suave entre essas mudanças proporciona uma experiência visual mais agradável.

As transições são ativadas apenas quando ocorre uma ação que altera as propriedades especificadas. No exemplo, a ação é o passar do mouse sobre a div. Isso difere das animações, que podem ser contínuas e independentes de ações do usuário.

É importante testar as transições em diferentes navegadores e dispositivos para garantir compatibilidade e desempenho consistente. Além disso, embora as transições possam melhorar a interatividade, é essencial usá-las de forma equilibrada para não sobrecarregar ou distrair o usuário.

Com isso, concluímos a nossa aula sobre recursos especiais do CSS. Revisamos box-sizing, degradês, animações e transições, cada um contribuindo para tornar nossas páginas web mais estilizadas e interativas. Ao combinar esses recursos, podemos criar layouts atraentes e funcionais que atendem às necessidades dos usuários.

​

​Conteúdo Bônus

Para se aprofundar no tema desta aula, sugiro que assista ao vídeo intitulado “Entendendo Box Sizing do CSS”, que está disponível no canal DevSuperior no YouTube.

​

​Referência Bibliográfica

BONATTI, D. Desenvolvimento de Sites Dinâmicos com Dreamweaver CC. Brasport: 2013.

BONATTI, D. Desenvolvimento de Jogos em HTML5. Brasport: 2014.

FLATSCHART, F. HTML 5 - Embarque Imediato. Brasport: 2011.

JOÃO, B. do N. (Org.). Informática aplicada. 2.ed. Pearson: 2019.

MARINHO, A. L.; CRUZ, J. L. da. Desenvolvimento de aplicações para Internet. 2.ed. Pearson: 2020

NEVES, M. C. B. de A. Sites de Alta Performance. Contentus: 2020

SOUSA, R. F. M. CANVAS HTML 5 - Composição gráfica e interatividade na web. Brasport: 2018.

TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. J. Redes de computadores. 6.ed. Pearson: 2021.

​

​Atividade Prática 5 - Recursos especiais

Título da Prática: Animação com CSS

Objetivos:

Objetivo 1 – programação com CSS;

Objetivo 2 – programação com interação com CSS;

Objetivo 3 – programação animando elementos em posição, rotação e escala em CSS;



Materiais, Métodos e Ferramentas:

Ferramenta 1 – IDE;
Método 1 – Atividade Prática;
Materiais 1 – Acesso ao material complementar de aula.


Atividade Prática

CSS permite adicionar animações para melhorar a experiência visual em páginas web. As animações podem ser aplicadas para mover elementos, mudar cores, escalas, opacidades, entre outros. Nesta atividade, você irá criar uma animação simples que faz um elemento (uma caixa) se mover de um lado para o outro na página.



Tarefa:
Crie uma página HTML com uma caixa quadrada de 100x100 pixels e aplique uma animação CSS que mova essa caixa da esquerda para a direita em 3 segundos, de forma contínua.

Publique o arquivo no navegador para verificar o movimento da caixa.



Passos a seguir:

1 - Crie um arquivo HTML com a extensão .html (por exemplo, animacao_caixa.html).

2 - Adicione a estrutura básica de um documento HTML.

3 - Crie uma div para representar a caixa.

4 - Defina o estilo da caixa usando CSS (largura, altura, cor de fundo).

5 - Use as regras de animação no CSS para mover a caixa da esquerda para a direita.

6 - Abra o arquivo no navegador para visualizar o resultado.



Gabarito Atividade Prática

Passo 1:
Crie um arquivo HTML com a estrutura básica e adicione o seguinte código CSS para animar a posição de uma caixa:

html

Copiar código

<!DOCTYPE html>

<html lang=“pt-BR”>

<head>

    <meta charset=“UTF-8”>

    <meta name=“viewport” content=“width=device-width, initial-scale=1.0”>

    <title>Animação de Posição</title>

    <style>

        /* Definindo o corpo da página /

body {

margin: 0;

padding: 0;

display: flex;

justify-content: center;

align-items: center;

height: 100vh;

/ Definindo a caixa /

        .caixa {

            width: 100px;

            height: 100px;

            background-color: blue;

            position: relative;

            animation: moverCaixa 3s infinite;

        }

        / Criando a animação */

        @keyframes moverCaixa {

            0% {

                left: 0;

            }

            50% {

                left: 300px;

            }

            100% {

                left: 0;

            }

        }

    </style>

</head>

<body>

    <div class=“caixa”></div>

</body>

</html>



Explicação:

Estrutura HTML: A tag <div> com a classe caixa representa o elemento que será animado.
Estilização do corpo da página: O uso de display: flex; justify-content: center; align-items: center; height: 100vh; alinha a caixa ao centro da tela.
Estilização da caixa: A caixa tem 100x100 pixels, cor de fundo azul, e está em uma posição relativa, o que permite que seja movida.
Animação (@keyframes): A regra @keyframes define o movimento da animação:
○ Em 0%, a caixa começa no lado esquerdo (left: 0).

○ Em 50%, ela se move para 300 pixels à direita (left: 300px).

○ Em 100%, ela retorna à posição inicial.

○ A animação dura 3 segundos (animation: moverCaixa 3s infinite), e o ciclo se repete indefinidamente (infinite).



Passo 2:
Salve o arquivo com a extensão .html.



Passo 3:
Abra o arquivo no navegador para visualizar a animação da caixa se movendo de um lado para o outro.

Erros Comuns:

Esquecer de usar a posição relativa na caixa: Sem a propriedade position: relative;, o left não funcionaria corretamente.
Definir um valor inadequado para a duração da animação: Verifique se a duração está correta (3s neste caso) e se o ciclo está configurado para repetir (infinite).
Não abrir o arquivo no navegador: Lembre-se de visualizar o arquivo no navegador para garantir que a animação esteja funcionando.
Essa atividade prática ensina a criar animações simples usando CSS, aplicando o movimento de posição com a regra @keyframes, oferecendo uma introdução ao uso de transições dinâmicas em páginas web.