IDE
​Introdução

Nesta aula, exploraremos o uso da Interface de Desenvolvimento Integrada (IDE) no contexto do desenvolvimento FrontEnd, com foco no Visual Studio Code (VS Code). A IDE é uma ferramenta essencial que nos auxilia na escrita, organização e execução do código HTML e CSS, facilitando o processo de desenvolvimento. Abordaremos desde a instalação e configuração do VS Code, até a personalização de sua interface e a utilização de extensões que aprimoram a produtividade.



Instalação

Hoje, vamos começar a trabalhar com a nossa Interface de Desenvolvimento Integrada (IDE). Uma IDE é um software que permite desenvolver aplicativos utilizando as tecnologias que abordaremos nesta disciplina, como HTML e CSS. Existem diversas ferramentas que podemos utilizar como IDE. Nesta aula, optamos por uma das principais do mercado: o Visual Studio Code (VS Code), desenvolvido e disponibilizado gratuitamente pela Microsoft. Além do VS Code, outras opções incluem NetBeans, Atom, Sublime Text e Notepad++. No entanto, a mais utilizada no mercado é o VS Code, especialmente para quem trabalha com desenvolvimento web.

Após a instalação do VS Code, você também precisará instalar o Node.js para executar códigos JavaScript fora do navegador. O Node.js é um ambiente de execução que permite o uso do JavaScript no lado do servidor, e sua integração com o VS Code torna o processo de desenvolvimento mais fluido.

A escolha do VS Code não foi aleatória. Pensando nisso, esta aula foi criada para ensiná-los a instalar, configurar e entender as principais interfaces do VS Code. Além disso, abordaremos como instalar extensões e plugins que facilitam nosso trabalho e deixam o código mais organizado. Vamos seguir um passo a passo para garantir que todos consigam configurar o VS Code adequadamente.

Primeiro, precisamos acessar a página do VS Code. Abra o navegador de sua preferência, como o Google Chrome, e faça uma busca por “VS Code”. O primeiro resultado geralmente será o site oficial do Visual Studio Code. Ao clicar no link, você será redirecionado para a página de download. Caso a página apareça em inglês, o navegador oferecerá a opção de traduzir para português, o que pode facilitar a compreensão para quem preferir.

Na página de download, selecione a versão apropriada para o seu sistema operacional, seja Windows, Linux ou Mac. No nosso exemplo, faremos a instalação no Windows. Clique no botão de download e aguarde até que o arquivo seja baixado. Uma vez concluído o download, localize o arquivo em seu computador e dê um duplo clique para iniciar a instalação.

Durante a instalação, você precisará aceitar o acordo de licença. Este é um passo padrão em muitas instalações de software. Em seguida, você verá algumas opções, como criar um atalho na área de trabalho e adicionar o VS Code ao caminho do sistema. É recomendável manter todas essas opções selecionadas. Depois, clique em “Instalar” e aguarde a conclusão do processo. Uma vez instalado, um ícone do VS Code aparecerá na sua área de trabalho.



Configuração

Na primeira parte da nossa aula, discutimos sobre a instalação da nossa IDE, o VS Code, que é uma das mais utilizadas no mercado. Realizamos o download e a instalação de maneira simples. Agora, vamos para o processo de configuração do VS Code para desenvolvimento FrontEnd.

Uma das ferramentas mais úteis do VS Code é a extensão Go Live, que permite renderizar automaticamente as páginas HTML no navegador. Com essa extensão, você pode dividir a tela do computador em duas partes: uma com o VS Code e outra com o navegador, visualizando as alterações em tempo real. Isso facilita o aprendizado e a prática de desenvolvimento web. Um exemplo prático seria escrever um código HTML no VS Code e, ao salvar, ver imediatamente o resultado no navegador, o que torna o processo de desenvolvimento mais interativo e eficiente.

Suponhamos que você esteja criando um servidor básico em Node.js. No VS Code, você pode abrir o terminal integrado (Ctrl + ) e rodar o comando ‘node server.js’ para executar seu servidor localmente. Além disso, com o debugger do VS Code, você pode definir pontos de interrupção no código, inspecionar variáveis e entender melhor como sua aplicação está funcionando.

Além disso, é fundamental conhecer alguns atalhos de teclado que otimizam o uso do VS Code. Recomendo que você anote esses atalhos em um post-it e o mantenha à vista até se familiarizar com eles. Por exemplo, utilizar a combinação de teclas para abrir rapidamente a barra de comando do VS Code pode economizar tempo e tornar seu fluxo de trabalho mais ágil. Esses pequenos truques são essenciais para melhorar a produtividade no desenvolvimento.

Para configurar o VS Code para o desenvolvimento em HTML, você pode utilizar um arquivo de configuração chamado settings.json. Esse arquivo permite personalizar o ambiente de desenvolvimento conforme suas necessidades. Embora isso seja mais avançado, é interessante saber que essa opção existe. Outra configuração inicial importante é instalar extensões específicas para HTML e CSS, que oferecem recursos adicionais, como autocompletar código e dicas de sintaxe.

Por fim, a criação de um repositório no GitHub é uma prática recomendada para todos os desenvolvedores. Com uma conta no GitHub, você pode armazenar seus códigos na nuvem, acessá-los de qualquer lugar e compartilhar com outros desenvolvedores. Para criar um repositório, basta acessar o site do GitHub, fazer login e seguir os passos para criar um novo repositório. Você pode optar por manter o repositório público ou privado, dependendo das suas necessidades.



Interface

Agora, vamos falar sobre a interface do VS Code. Quando você abre o VS Code, diversas janelas são exibidas, e é importante entender a função de cada uma. Não se preocupe, pode parecer muita informação inicialmente, mas são ferramentas simples e úteis. A interface do VS Code é composta por várias áreas que facilitam a organização e a navegação do código. Vamos explorar a barra lateral, os painéis e o editor, que é onde o código é escrito, além de aprender a personalizar a aparência da IDE para melhorar nossa produtividade.

​No Explorer, você pode organizar seus arquivos de projeto, como ‘app.js’ ou ‘server.js’, junto com as pastas ‘node_modules’ e ‘public’. Ao abrir um arquivo JavaScript que utilize Node.js, o VS Code destacará a sintaxe e oferecerá sugestões de código, facilitando a escrita e a depuração. Por exemplo, ao trabalhar com ‘require()’ para importar módulos, o VS Code ajuda na auto completação, economizando tempo e reduzindo erros.

Na barra lateral esquerda, temos a Activity Bar, que inclui ícones para diversas funcionalidades, como o Explorer, que permite visualizar e navegar pelos arquivos do projeto. Ao clicar no Explorer, você verá uma lista de arquivos e pastas. Também é possível realizar pesquisas, controlar o código fonte, depurar e instalar extensões. 

Para abrir um projeto no VS Code, você deve selecionar a opção “Abrir Pasta” e escolher o diretório onde está armazenado o seu projeto. Por exemplo, se você criou uma pasta chamada “frontend” na sua área de trabalho, basta selecioná-la para visualizar todos os arquivos e pastas nela contidos. No Explorer, você pode criar novos arquivos e pastas, atualizar a estrutura do diretório e recolher ou expandir as seções conforme necessário.

A área central do VS Code é o Editor, onde você escreve seu código. Ao abrir um arquivo HTML, por exemplo, o código será exibido com destaque de sintaxe, facilitando a leitura e a edição. Inicialmente, o código pode parecer complicado, mas à medida que você se familiariza com a estrutura HTML, verá que é simples e intuitivo. O VS Code permite personalizar o editor com diferentes temas de cores, tornando o ambiente de trabalho mais agradável e adaptado às suas preferências.

Na parte inferior do VS Code, temos a Status Bar, que fornece informações sobre o código e o ambiente de desenvolvimento. Se houver algum problema no código, ele será indicado na aba de problemas. Outras abas importantes incluem a de saída, o console de depuração, o terminal integrado e a visualização das portas. Uma funcionalidade muito útil é o botão “Go Live”, que permite executar e visualizar seu código HTML em um navegador, atualizando as mudanças em tempo real.

É importante se familiarizar com essas áreas principais do VS Code para aproveitar ao máximo suas funcionalidades. Conforme você pratica e utiliza a ferramenta, descobrirá atalhos e macetes que facilitarão seu trabalho diário. No início, concentre-se em abrir pastas, navegar pelo Explorer e editar código no Editor. Com o tempo, você dominará outras funcionalidades e personalizações da interface.



Extensões

A IDE é uma ferramenta essencial para o desenvolvimento, mas não devemos perder de vista o foco principal, que são as linguagens HTML e CSS. A IDE, neste caso, o VS Code, é o software que nos auxilia a escrever e organizar nosso código de forma eficiente. Esta IDE é amplamente utilizada no mercado, tanto para desenvolvimento front-end quanto back-end e full-stack. Depois de instalar o VS Code, abordamos a configuração inicial, como o download dos códigos do GitHub e a organização dos arquivos em pastas estruturadas.

Uma extensão fundamental para quem trabalha com Node.js é a ESLint. Esta extensão ajuda a manter a qualidade do código, verificando e corrigindo problemas de sintaxe e estilo de código em JavaScript. Outra extensão útil é a Node.js Modules Intellisense, que facilita a importação de módulos e dependências dentro do seu código, tornando o desenvolvimento com Node.js ainda mais intuitivo.

Em seguida, exploramos a interface do VS Code, conhecendo as principais áreas como o editor, a barra de status e a sidebar. Essas ferramentas são simples de usar e ajudam a manter o ambiente de desenvolvimento organizado. Agora, vamos focar nas extensões, que são pequenas APIs desenvolvidas para ampliar as funcionalidades do VS Code e melhorar nossa interação com a ferramenta.

As extensões são fundamentais para personalizar e otimizar o ambiente de desenvolvimento. Por exemplo, a extensão Português Brasil Language Pack permite que o VS Code seja exibido em português, facilitando o uso para quem prefere trabalhar na língua nativa. Outra extensão útil é a Auto Rename Tag, que automaticamente renomeia as tags HTML, evitando erros comuns durante a edição do código.

Para visualizar as cores no CSS de maneira mais intuitiva, a extensão Color Highlight é essencial. Ela destaca as cores no código, permitindo ver imediatamente como cada cor será exibida no navegador. Isso facilita a escolha e a verificação das cores durante o desenvolvimento. Outra extensão importante é a Image Preview, que exibe miniaturas das imagens referenciadas no código, ajudando a verificar se os arquivos de imagem estão corretos.

A extensão Live Server é indispensável para o desenvolvimento front-end. Ela permite que o código HTML seja executado em tempo real no navegador, facilitando a visualização das mudanças instantaneamente. Ao clicar em “Go Live”, você pode ver como o código é renderizado no navegador, o que agiliza o processo de desenvolvimento e testes.

Para melhorar a aparência e organização dos ícones no VS Code, a extensão Material Icon Theme estiliza os ícones dos arquivos, tornando a navegação mais intuitiva. E para personalizar a aparência do editor de código, a extensão Dracula Official aplica um tema escuro com cores contrastantes, melhorando a leitura do código e reduzindo a fadiga visual.

Instalar essas extensões é simples. Basta abrir o VS Code, acessar a aba de extensões, procurar pelo nome da extensão desejada e clicar em “Instalar”. Uma vez instaladas, essas extensões serão integradas ao VS Code, aprimorando a experiência de desenvolvimento. Lembre-se de que essas são apenas algumas das muitas extensões disponíveis, e você pode explorar outras conforme suas necessidades específicas.

Compreender e utilizar uma IDE como o Visual Studio Code é essencial para o desenvolvimento eficiente de projetos em HTML e CSS. Abordamos desde a instalação e configuração inicial até a personalização da interface e a utilização de extensões que otimizam o ambiente de trabalho. O VS Code oferece uma gama de ferramentas que facilitam o desenvolvimento web, tornando o processo mais organizado e produtivo.

​

​Conteúdo Bônus

Para se aprofundar no tema desta aula, sugiro que assista ao vídeo intitulado “Melhores IDE de Programação [ONLINE E OFFLINE] | Getting Started #13”, que está disponível no canal DIO no YouTube. 

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