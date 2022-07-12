# Ementa - Neste bloco aprendemos a manusear o GIT E GITHUB.


## PARTE 1 - Instalação e Configuração
Vamos começar realizando a instalação e configuração do **Git**. Siga o passo a passo para deixar o **Git** pronto em seu ambiente.

###### LINUX
Para instalar o **Git** abra o seu terminal e digite o seguinte comando.
```
sudo apt-get install git-all
```

###### CONFIGURAÇÃO
O **Git** vem com uma ferramenta chamada **git config** que permite ver e atribuir variáveis de configuração que controlam todos os aspectos de como o **Git** aparece e opera.

###### IDENTIDADE
O primeiro passo é configurar sua **identidade**, seu **nome** e **endereço de e-mail**, isso é importante pois cada **commit** usa esta informação, e ela é carimbada de forma imutável nos **commits** que você criar. Para configurar isso digite o comando abaixo em seu terminal.
```
git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.br
```

###### EDITOR
Um outro ponto legal de se configurar é o editor onde você poderá abrir o arquivo de configuração do **Git**, **.gitconfig**, fica fácil de você visualizar as configurações do **Git** e também adicionar outras que julgue necessário. Para isso execute o comando à seguir no seu terminal.
```
git config --global core.editor "code --wait"
```
Esse comando define o editor do **.gitconfig** como o **VS Code**, que é o editor que você usará ao longo curso. Caso queira abrir o arquivo de configuração no **VS Code** basta executar em seu terminal o comando abaixo. Para isso certifique-se que você se encontra no diretório onde o arquivo **.gitconfig** está localizado.
```
code .gitconfig
```

###### VERIFICANDO a INSTALAÇÃO e a CONFIGURAÇÃO
Agora que você já configurou tudo, vamos fazer uma validação e verificar se tudo está certinho.
No terminal digite **git --version** para saber qual versão do git está instalada.
No seu terminal deve aparecer algo parecido com:
```
git version 2.x.y
```
No seu terminal, digite **git config --list** e deve aparecer algo similar à isso:
```
user.email=seuemail@gmail.com
user.name=seunome
```
*O email deve ser o mesmo que você utilizou para se registrar no GitHub*.
Pronto, agora que tudo está devidamente instalado e configurado, vamos ao próximo passo.


## PARTE 2 - Criar nota no GitHub
Crie sua conta no **GitHub** ultilizando seu **e-mail pessoal** clicando no endereço abaixo.
```
https://github.com/
```


## PARTE 3 - Adicionando uma Chave SSH na sua Conta do GitHub
Neste passo, vamos aprender como adicionar uma chave **SSH** à sua conta do **GitHub**, o que vai te permitir fazer **pushes** e **pulls** sem ter que ficar digitando usuário e senha, como já explicamos. É de extrema importância que você siga **TODOS** os passos apresentados no artigo, apenas dessa forma você obterá o resultado esperado.

###### GERANDO uma CHAVE SSH
Abra seu terminal e digite o comando abaixo. Ele cria uma nova chave **SSH**, usando o seu email como rótulo.
É preciso que o e-mail informado seja o mesmo que você utilizou para criar a sua conta no **GitHub**.
```
ssh-keygen -t ed25519 -C "seuemail@gmail.com"
```
Durante o processo vai aparecer escrito no terminal **Enter a file in which to save the key**, quando isso acontecer pressione **Enter** para aceitar a localização padrão **/home/you/.ssh/id_ed25519**.
```
Enter a file in which to save the key (/home/you/.ssh/id_ed25519): [Press enter]
```
Agora você deve digitar uma senha segura.
```
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```

###### ADICIONANDO sua CHAVE SSH ao ssh-agent
Primeiro você deve iniciar o **ssh-agent** em **background**.
```
eval "$(ssh-agent -s)"
```
Agora você deve adicionar sua chave privada **SSH** ao **ssh-agent**. Para isso execute o comando abaixo no terminal.
```
ssh-add ~/.ssh/id_ed25519
```

###### ADICIONANDO a CHAVE SSH na sua CONTA GITHUB
Para conseguir adicionar a chave **SSH** no **Github**, execute o comando abaixo.
```
cat ~/.ssh/id_ed25519.pub
```
Ele vai imprimir no terminal o **nome do algoritmo (ssh-ed25519)**, **seu e-mail** e uma **sequência de caracteres aleatórios** (sua chave), exemplo:
```
ssh-ed25519 <chave-ssh> seu.email@email.com
```
Copie a chave manualmente.
Entre no seu **GitHub** e siga os passos abaixo.
1. No canto superior direito do **GitHub**, clique na sua foto de perfil e clique em **Settings**.

2. Na barra **lateral esquerda**, clique em **SSH and GPG keys**.

3. Clique em **New SSH key** ou **Add SSH key**.

4. No campo Título, adicione um descrição para a nova chave.

5. Cole sua chave dentro do **campo Key**.

6. Clique em **Add SSH key**.

7. Caso seja solicitado, confirme sua senha do **Github**.
Se tiver problemas ao seguir o tutorial acima, consulte a lista de documentação do **Github** no link abaixo.
```
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
```


## PARTE 4 - O seu REPOSITÓRIO no GITHUB
Pronto! Agora que você já é capaz de gerenciar **localmente** seus códigos e também enviá-los para o **GitHub** (REMOTO), é hora de colocar a casa em ordem.
Durante seu curso na **Trybe**, seus projetos serão entregues através de **pushes** nos repositórios do **GitHub**. Para podermos simular um exercício feito, você criará um arquivo **.txt** com um nome de sua escolha (Exemplo: trybe-skills.txt) e utilizará o conteúdo abaixo.
```
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
```
No final, ao executar o comando **ls -l** na pasta de arquivos deste dia, você deverá receber um retorno parecido com.
```ls -l

total 0
-rw-r--r--  1 tryber  staff  0 Jan 27 00:34 trybe-skills.txt
```
Agora vamos transformar essa pasta em um repositório **Git**, seguindos os passos abaixo.
1. Retorne para a raiz da pasta de exercícios.

2. Inicialize o repositório com **git init**.

3. Crie um arquivo de **README** utilizando o comando **touch README.md**.

4. Crie um **commit** inicial utilizando.
```
git add .
git commit -m "Initial commit"
```
Vá até o seu **GitHub** e crie um repositório **público**, onde você irá guardar todos os exercícios que desenvolverá ao longo do curso.

5. Dê ao repositório um nome descritivo, como por exemplo **trybe-exercicios**.

6. Lembre-se de não inicializar o repositório com um arquivo **README.md**, **pois você já criou um nos passos anteriores**.

7. Clique no botão **SSH** e então copie a **URL** do repositório.

8. Execute o comando para adicionar a **URL** ao repositório local **git remote add origin "URL_DO_REPOSITÓRIO"**.

9. Verifique se tudo está certo com sua **URL** remota utilizando o comando **git remote -v**. Seu terminal deve conter algo similar a isso.
```
Verifique se tudo está certo com sua URL remota utilizando o comando git remote -v. Seu terminal deve conter algo similar a isso:
```
Em que **john-snow** corresponde ao seu **username** e **know-nothing** ao nome que você deu ao seu repositório.

Agora que tudo está devidamente configurado e verificado, é hora de subir seu primeiro **commit** para o **GitHub**.

Execute o comando **git push origin master** no terminal;

Vá até o seu **GitHub** e verifique as novas alterações.

Agora vamos adicionar adicionar uma descrição do que é seu repositório no **README.md**.

**O README.md** que você recriou é referente ao repositório **trybe-exercicios**, tendo isso em mente é interessante que você adicione informações relacionadas ao curso da Trybe e o que você está desenvolvendo e o que irá desenvolver.

Uma outra coisa interessante a se fazer é adicionar um **README.md** dentro do diretório de exercícios do dia para colocar a descrição dos exercícios que você desenvolveu.

Lembre-se de fazer um **commit** quando terminar de alterar os arquivos;

Depois do **commit**, faça sempre um **push**;

Confira as alterações no **GitHub**.






































































































