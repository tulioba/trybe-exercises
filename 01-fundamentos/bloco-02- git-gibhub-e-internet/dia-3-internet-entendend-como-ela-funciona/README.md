# EMENTA - A INTERNET E SEUS PROTOCOLOS

## As Peças que Montam a Internet
Ao longo da sua carreira como desenvolvedor, você fará páginas incríveis que estarão disponíveis para usuários do mundo todo na **Internet**. Mas você já se perguntou como esse processo acontece? Antes de prosseguir na leitura, reflita um pouco sobre como você acredita que as suas páginas web funcionam!
O mundo **Web** é tão presente no nosso dia a dia que esquecemos o quão complexo ele é. Conhecê-lo será fundamental quando você começar a arquitetar o **backend** da sua aplicação, e muito importante para que você desenvolva páginas **web** que funcionem de fato.
Entender a Internet pode parecer intimidador pois há muitos termos específicos que são constantemente utilizados. Vamos começar a desmistificá-los fazendo aquilo que fazemos praticamente todos os dias ao abrir o nosso navegador: acesse **www.google.com**. O que está por trás desse acesso? Vamos listar primeiro os conceitos básicos para entendê-lo.

- **Cliente** - Firefox, Mozilla, Chrome... qual o navegador você utilizou para fazer a sua pesquisa? O termo técnico para ele é **cliente**. O **cliente** é uma aplicação que está conectada à Internet. A sua principal função é receber a interação do usuário e traduzi-la em uma requisição para outro computador chamado Servidor Web. Apesar de usarmos o navegador para acessar à Internet, você pode pensar no seu computador como sendo o Cliente no modelo **Cliente-Servidor**. Todo computador tem um número único, como o seu CPF, chamado **endereço IP**. É através desse endereço que computadores, celulares e tablets são identificados.

- **Servidor**: Como vimos no exemplo acima, nossa busca por www.google.com será enviada para um **Servidor**. O Servidor é um super computador conectado à Internet. Ele também tem o seu próprio endereço IP, assim como o seu computador. O Servidor espera por requisições de outras máquinas (clientes). Diferente do seu computador, um Servidor tem um software específico em execução que irá dizer como ele deve responder a uma requisição do seu navegador. A principal função do Servidor é **armazenar**, **processar** e **entregar** páginas web para os Clientes. Há diversos tipos de servidores, como **Web Servers, Database Servers, File Servers, Application Servers**. O servidor que usamos para fazer a busca por www.google.com é um Web Server.

- **Endereço IP** - A sigla **IP** refere-se a **Internet Protocol**. O endereço IP é um identificador numérico para um dispositivo (computador, celular, tablet, impressora, roteador, servidor...) conectado à rede **TCP/IP**. Todo dispositivo conectado à Internet tem um endereço IP único que irá identificá-lo, e será usado para comunicar com outros dispositivos. Os endereços IP tem quatro campos de dígitos separados por pontos (exemplo: 244.155.65.2). Esses números são chamados de endereço lógico. Para localizar um dispositivo conectado à Internet o endereço lógico é convertido em um endereço físico por um software. Esse endereço físico faz parte do seu hardware e é conhecido por endereço de controle de acesso à mídia (MAC address).

- **TCP/IP** - De forma simples, o **TCP/IP** é o **principal protocolo de envio e recebimento de dados na internet**. TCP significa Transmission Control Protocol (Protocolo de Controle de Transmissão), em suma, o TCP será responsável por definir como diferentes aplicações se comunicam na rede e também em como os dados enviados serão divididos em pacotes. E o **IP**, Internet Protocol (Protocolo de Internet), define como os dados divididos em pacotes devem ser enviados para chegar corretamente ao destinatário. O TCP/IP é a união dos protocolos TCP e IP, uma pilha de protocolos que é **dividida em quatro camadas**: **aplicação, transporte, rede e interface**. Cada uma dessas camadas tem uma responsabilidade específica, mas todas são conectadas entre si para garantir a segurança e a disponibilidade dos dados. Entenda mais a fundo.

- **ISP** - ISP ou Internet Service Provider é o seu provedor de Internet. É qualquer empresa que nos fornece acesso ao maravilhoso mundo Web. Sem os seus serviços, não conseguiríamos fazer a nossa busca por www.google.com pois não estaríamos -conectados à Internet.

- **DNS** - DNS ou Domain Name System é um dispositivo com uma base de dados distribuída que **gerencia os nomes de serviços**, computadores ou qualquer dispositivo conectado à Internet. Ele é usado para relacionar o **endereço nominal** (google.com) com o **endereço IP**. Os servidores DNS são **responsáveis por localizar e traduzir para números (um endereço IP)** as buscas por sites que digitamos no navegador.

- **Port Number** - O número de porta é um número de **16 bits** utilizado para identificar uma porta específica no servidor, e está sempre associado ao endereço IP. O **Port number** é uma forma de identificar um processo específico encaminhado para o servidor.

- **Host** - O Host é qualquer dispositivo conectado à rede que pode transmitir ou receber pacotes IP, seja como cliente, servidor ou qualquer outro tipo de modelo, sendo que cada host tem um endereço IP único. Dentre esses dispositivos temos: computadores, tablets, smarts TV, smartpphones, entre outros. Para o site que estamos buscando, www.google.com, o host é o servidor web que hospeda a página na web. É comum confundir o host com o servidor. Lembre-se que eles são coisas diferentes! O Servidor é um tipo de host - uma máquina específica com endereço IP. Por outro lado, o host pode ser também uma organização inteira que fornece um serviço de hospedagem para manter inúmeros servidores web.

- **HTTP** - Hyper-text Transfer Protocol é o protocolo utilizado para a comunicação entre navegadores e servidores na Internet.

- **URL** - O URL é a sigla para Uniform Resource Locators e identifica um recurso web específico. Podemos, como exemplo, mudar a nossa busca para https://www.google.com/travel/flights para pesquisar por preços de passagens aéreas. O URL identifica o protocolo que será utilizado para comunicarmos com o servidor (https), o nome do host (google.com) e o recurso que queremos acessar (travel/flights).


## O Modelo Cliente-Servidor e a Estrutura de uma Aplicação Web
Agora você vai entender como funciona uma aplicação web, e como é possível torná-la **escalável**. Para isso, você precisa conhecer um pouco mais sobre o modelo **Cliente-Servidor** e sobre a estrutura de uma página Web. Até aqui você já aprendeu alguns conceitos básicos sobre o mundo Web. Você já tem uma ideia de como o cliente (seu computador) interage com um servidor. O próximo passo será ir um pouco mais a fundo para entender como todas as partes que vimos se relacionam para nos permitir navegar na Internet.
O modelo **cliente-servidor** é utilizado para descrever a forma com que um cliente (um computador conectado à Web) e um servidor se comunicam na rede. Você pode visualizar essa ideia no diagrama simplificado abaixo:


<img height="auto" src="https://assets.app.betrybe.com/fundamentals/internet/images/cliente-servidor-0b0f5e85c403671651c24f36b030f060.png">


                            

No entanto, essa representação é apenas um modelo. Há outras partes envolvidas que são importantes e que permitem com que você tenha acesso a esse conteúdo que está estudando agora, por exemplo. Para isso, vamos entender como as peças desse quebra cabeça se encaixam em uma aplicação web.
Aplicações web, como essa que você está usando em seus estudos aqui na Trybe, seguem uma estrutura básica muito similar. Elas são compostas por um **cliente, um servidor e uma base de dados**.
O cliente é responsável por interagir com o usuário. Em uma aplicação Web o cliente é responsável por definir a estrutura, a aparência e mecanismos para lidar com as interações do usuário (como um click, ou um campo para preenchimento).
A estrutura da sua página é definida por uma linguagem chamada **HTML**, que é a sigla para **Hyper text markup language**. O HTML te permite configurar a estrutura física da sua página web. Cada tag do HTML descreve um elemento específico do documento, como podemos ver abaixo:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <header>
    <h1>Minha página Web!</h1>
  </header>
  <p>Bem vindos! Essa é a estrutura básica da minha primeira página</p>
  <ul>O que estou aprendendo:
    <li>Git & GitHub</li>
    <li>Internet</li>
    <li>Shell</li>
  </ul>
</body>
</html>
```
- O conteúdo dentro de **<h1><h1>** descreve o título principal **(heading)**. Níveis diferentes de título são descritos por **<h2>**, **<h3>** e assim por diante. 
- O conteúdo dentro de uma tag **<p>** descreve um parágrafo.
- O conteúdo dentro de uma tag **<ul>** descreve uma lista não ordenada (unordered list), e cada item da lista está contido na tag **<li>**.

Há vários tipos de tags para descrever elementos diferentes da sua página web, como listas, imagens, links para navegação, botões...mas não se preocupe! Você irá utilizá-los com muita frequência, e a fluência virá com a prática.
A aparência da página é definida por uma outra linguagem chamada **CSS**, que significa **Cascading Style Sheets**. O **CSS** é uma linguagem que te **permite descrever como os elementos definidos pelo HTML devem ser estilizados**. O **CSS** te permite alterar a fonte, a cor, o tamanho e até mesmo incluir recursos como animações e áudio. Você pode adicionar um estilo para a sua página como no exemplo.
```
body {
  background-color: blue;
}

h1 {
  color: purple;
  font-size: large;
}

p {
  color: green;
  font-weight: bold;
}

h2 {
  color: red;
  border: 3px solid black;
}
```

As interações com a pessoa usuária são definidas por uma terceira linguagem: o **JavaScript**. É o **JavaScript que confere à página um comportamento dinâmico**. Imagine que você esteja em uma página de e-commerce. Você pode clicar nos itens que quer comprar e salvá-los em um carrinho, você pode adicionar filtros às suas buscas, navegar entre as sessões do site, tudo isso graças ao Javascript! Você deve estar se perguntando: Beleza, eu consigo visualizar tudo o que está acontecendo no momento que faço as compras na loja online. Mas para onde vai o meu pedido no momento em que efetuo o pagamento? O que acontece nos bastidores de um e-commerce?
```
// Limpar o leitor com um click duplo
const clearButton = document.querySelector('.limpar');
clearButton.addEventListener('dblclick', function () {
  inputResultado.value = "";
});
```

O seu pedido é enviado como uma requisição para um servidor, que irá **armazenar, processar e encaminhar** as suas compras.
O servidor em uma aplicação Web é quem recebe as requisições do cliente. Lembra-se do protocolo HTTP? Pois bem, é aqui que ele entra em cena. É esse protocolo que define uma linguagem para que clientes e servidores se comuniquem. O servidor espera por requisições HTTP de uma porta específica, sempre associada a um endereço IP. Com as requisições, ele vai realizar ações e enviar a resposta via HTTP. Todos os dados que viajam entre o cliente e o servidor são enviados através da rede Internet usando o protocolo TCP/IP.
E por fim, o banco de dados de uma aplicação web é onde a informação é armazenada de forma acessível, gerenciável e em constante atualização. Imagine que você está lançando uma nova rede social, que em cinco anos contará com 500 milhões de usuários ativos no mundo todo. Você certamente irá precisar usar um banco de dados para armazenar informações sobre usuários, posts, comentários. E quando um visitante fizer uma requisição para acessar a página, as informações que serão retornadas para a página virão de um banco de dados. Assim, interações em tempo real, como vemos hoje no Instagram e Facebook, serão viáveis.
Passamos pelos conceitos chaves de uma aplicação Web, e vimos de forma simplificada o seu funcionamento. Mas a medida que a aplicação cresce, como um único servidor conseguirá lidar com milhares - ou até mesmo milhões! - de requisições de usuários em tempo real?
Agora, vamos entender como escalonar uma aplicação web. Uma forma para lidarmos com um grande volume de dados é distribuir o tráfego de informações entre servidores no backend. O responsável por gerenciar o trânsito de informações de uma aplicação entre vários servidores backend é o que chamamos de balanceador de carga.
**"Balanceamento de carga"** é um termo genérico para uma série de algoritmos que distribuem as requisições para o servidor. Caso você tenha curiosidade em conhecer alguns desses algoritmos, pesquise por dois que são muito populares no design de sistemas distribuídos: **Round Robin e Least Connections**. Resumidamente, através de algoritmos o balanceador de cargas divide para qual host as requisições serão direcionadas em um sistema de serviços distribuídos.

<img height="auto" src="https://assets.app.betrybe.com/fundamentals/internet/images/balanceador-carga-1909ad721538924dc3f2e342a81b4bf8.png">

Tudo tranquilo até aqui, certo?! O **balanceador de cargas** resolve o problema de tráfego de dados distribuindo as requisições para servidores **backend**. Mas replicar esse modelo ainda pode gerar problemas a medida que a sua aplicação cresce. À medida que adicionamos mais funcionalidades para a aplicação, sua complexidade é aumentada e a carga de trabalho solicitada ao servidor também cresce, este conjunto de fatores pode sobrecarrega-lo. Assim, para resolver esse problema, é necessário separar o servidor por funcionalidade. É aqui que serviços entra em ação.
Um serviço é apenas outro servidor capaz de interagir com servidores, o que não acontece com um servidor Web, que interage apenas com o cliente. Cada serviço tem uma funcionalidade, como um serviço para autenticação de usuário ou serviços de busca. Assim, é possível quebrar o servidor Web da sua aplicação em múltiplos serviços, cada um com uma funcionalidade específica. A grande vantagem dos serviços é que você pode escaloná-los de forma independente. Além disso, os times de uma empresa também podem trabalhar de forma independente em um determinado serviço, ao invés de ter uma equipe numerosa trabalhando em um único servidor, o que poderia se tornar um grande problema de gestão de projeto.
Tudo o que vimos até agora funciona muito bem para escalonar o tráfego de dados. Mas a sua aplicação ainda está centralizada em um único lugar. Quando usuários do mundo todo começarem a acessar o seu site, eles podem ter um tempo de resposta maior devido à grande distância entre cliente e servidor. Uma forma de resolvermos esse problema é usando o que chamamos de Rede de Distribuição de Conteúdo, ou Content Delivery Network (CDN). O CDN é um sistema de distribuição de servidores "proxy". Podemos entender um servidor proxy como sendo um intermediário entre cliente e servidor.
Empresas com uma grande quantidade de tráfego distribuído no mundo todo podem pagar por companhias que oferecem serviços de CDN. Assim, usuários de diversas localidades poderão acessar a aplicação com um tempo de resposta menor. Um exemplo é a Akamai, que tem sedes em pontos estratégicos no mundo todo para garantir uma melhor experiência ao usuário. Se o conteúdo da sua aplicação Web não precisa cruzar o oceano para que um usuário na China possa utilizá-lo, o tempo de resposta é muito menor. A Akamai, por exemplo, consegue reduzir esse tempo de latência ao armazenar cópias do conteúdo da aplicação (arquivos como o HTML, CSS, mídia) do servidor dos seus clientes. Assim, a Akamai consegue fornecer a aplicação para o usuário de seus clientes sem precisar ter acesso ao seu servidor de quem a contratou.


## O Protocolo HTTP
    O Protocolo **TCP/IP**, como vimos, é a base de envio e recebimento de dados de toda a Internet. É um conjunto de regras que permite a comunicação entre todas as máquinas conectadas à Internet.

    Vamos nos aprofundar um pouco mais sobre o que é o protocolo **HTTP**, quais seus principais verbos e o que significa ser **RESTful**?

    Você já aprendeu que, no modelo **Cliente-Servidor**, a troca de mensagens acontece através de requisições e respostas: o Cliente envia uma requisição ao Servidor, que irá lhe retornar uma resposta. Com o grande volume de dados envolvidos nessa operação, gerenciar essas mensagens não é uma tarefa fácil. Assim, Cliente e Servidor aderem a uma linguagem comum, com regras que alinham as expectativas de ambas as partes, de forma que eles sabem exatamente o que esperar. Essa linguagem é o que chamamos de **protocolo HTTP**.

    Cada requisição e resposta trocada entre Cliente e Servidor é uma única transação **HTTP**. O **HTTP é uma linguagem de texto**, o que significa que as mensagens trocadas **são quantificadas em bits**. Cada mensagem é **dividida em duas partes**: o **header** e o **body**.

    É importante ter em mente que o HTTP por si só não consegue transmitir dados. Ele ainda **depende do protocolo TCP/IP para pegar as requisições e respostas entre duas máquinas**. O **HTTP é uma camada de abstração que padroniza a forma com que os hosts se comunicam**.

    Uma requisição ou resposta HTTP pura não é encriptada, sendo vulnerável a vários tipos de ataques. Por outro lado, HTTPS é uma forma mais segura de comunicação que utiliza a encriptação. Para adicionar mais essa camada de segurança, o HTTPS utiliza um segundo mecanismo de segurança: o **SSL**. Não se preocupe em entender os detalhes e as diferenças entre cada protocolo. Por hora, é interessante saber que eles existem. Websites grandes com milhares de usuários, como o Google e o Facebook, utilizam o protocolo **HTTPS** para manter as nossas senhas, informações pessoais e até mesmo detalhes de cartão de crédito em segurança na rede.

    Vamos fazer uma segunda busca para entender sobre o protocolo HTTP. No seu navegador, busque por https://github.com/. Clique com o botão direito, selecione "Inspecionar" e procure por Network na barra superior. Navegue para o repositório da Trybe na sua barra de navegação com a janela de inspecionar aberta: https://github.com/betrybe/. Selecione o primeiro nome e a aba Headers. Você verá uma tela como a que é mostrada abaixo:


<img height="auto" src="https://assets.app.betrybe.com/fundamentals/internet/images/header-http-aa502d8f37acf8033dbcbbac9daef10c.png">

###### HTTP Headers
    Como vimos, o protocolo HTTP é composto por **Header** e **Body**. O **Header contém metadata (dados sobre dados)** que incluem o tipo de requisição **(GET, POST, PUT, DELETE)**, o caminho URL, o endereço IP dentre outros. Para a página que estamos usando como exemplo, na sessão Response Headers os mais importantes são:
1. **Content-Type** - **text/plain** Especifica como os dados são representados. Nesse exemplo, temos o texto sendo enviado como resposta no formato HTML.

2. **Server** - GitHub.com Servidor Web para onde as requisições estão sendo feitas.

3. **Status** - 200 OK Forma padrão para o servidor comunicar ao cliente sobre o resultado da requisição. O **código 200** significa que o servidor encontrou o recurso e está enviando o resultado da requisição.

4. **Host** - api.github.com Host da aplicação.

5. **cookie** - _octo=GH1.1.358825508.1593780201; _ga=GA1.2.60245099.1593780202; logged_in=yes; dotcom_user=isabellavjs; tz=America%2FSao_Paulo.

    Novamente, você não precisa saber todos os pares de nome-valor. Saber onde encontrá-los no seu navegador é o suficiente para você começar a explorá-los conforme a sua necessidade.


###### HTTP Body
    O servidor armazena então os dados (metadados) mais importantes para estabelecer uma comunicação com o cliente. O **Body** refere-se ao corpo da mensagem que está sendo transmitida. Você pode acessá-lo clicando em **Response** na barra superior. Para a requisição que fizemos, acessar a página https://github.com/, o body contém o HTML para a página que estamos querendo acessar. Para praticar, experimente navegar nos outros arquivos que foram retornados para o navegador após a requisição! Você pode acessá-los no menu disponível na barra lateral esquerda.

<img height="auto" src="https://assets.app.betrybe.com/fundamentals/internet/images/response-http-ecbc40cd13def957c71e055051bed268.png">


###### Métodos HTTP
    Os métodos HTTP são os verbos que dizem ao servidor o que fazer com os dados no URL. Como vimos, o endereço URL identifica recursos específicos. Quando o cliente utiliza o endereço URL combinado a um verbo HTTP, o servidor saberá qual será a ação necessária para cada recurso. Os exemplos mais comuns são:

1. **GET** - O método **GET** é o mais comum, e é utilizado para ler informações encaminhadas pelo servidor para uma URL específica. As requisições GET são apenas para leitura, o que significa que os dados nunca poderão ser modificados no servidor. O servidor irá apenas retornar os dados, sem modificá-los. Assim, esse tipo de requisição é considerada uma operação segura, pois o efeito retornado será sempre o mesmo, independentemente do número de requisições feitas. Assim sendo, dizemos que requisições **GET são idempotentes**, o que **significa que o efeito da requisição no servidor será sempre o mesmo** - fazer milhões de requisições GET para o mesmo URL tem o mesmo efeito que uma única requisição. O método GET apenas retorna dados.
Requisições **GET são respondidas com status 200 (OK)** se o recurso que estamos querendo acessar for encontrado com sucesso, ou **404 (NOT FOUND)** se a página não for encontrada.


<img height="auto" src="https://assets.app.betrybe.com/fundamentals/internet/images/not-found-386be3c6245b265f3908e816892e4630.png">


###### POST
    O método **POST** é utilizado para criar um novo recurso, como um formulário para login. Você usará o método **POST** para criar um recurso subordinado (ex: novo usuário) para a aplicação pai (ex: http://exemplo.com/usuario). Ao contrário do método **GET**, o **método POST não é nem seguro e nem idempotente**. Fazer duas ou mais requisições POSTS resultará em novos recursos criados (mesmo que idênticos). Requisições POST são retornadas com o status code 201 (CREATED) e um novo caminho no header com o Link do recurso criado.


###### PUT
    O método **PUT** é utilizado para atualizar o recurso identificado pelo URL. Esse método também pode ser utilizado para criar um novo recurso. **Requisições PUT não são consideradas operações seguras**, pois o estado da aplicação é modificado no servidor. No entanto, o método PUT é idempotente porque múltiplas requisições PUT para atualizar um recurso têm o mesmo efeito que uma única requisição.
A resposta a requisição é o status code 200 (OK) se o recurso foi atualizado com sucesso, ou 404 (NOT FOUND) se ele não for encontrado.


###### DELETE
    DELETE é utilizado para deletar um recurso identificado pelo URL. As requisições DELETE são idempotentes, pois quando deletamos um recurso ele será deletado. Você pode fazer milhares de requisições com o método DELETE que no fim o resultado será o mesmo: um recurso deletado.
A resposta requisição é o status code 200 (OK) se o recurso for deletado com sucesso, ou 404 (NOT FOUND) se o recurso que será deletado não existir.






































