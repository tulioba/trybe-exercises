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
O modelo **cliente-servidor** é utilizado para descrever a forma com que um cliente (um computador conectado à Web) e um servidor se comunicam na rede.











<img height="auto" src="https://assets.app.betrybe.com/fundamentals/internet/images/cliente-servidor-0b0f5e85c403671651c24f36b030f060.png">



































