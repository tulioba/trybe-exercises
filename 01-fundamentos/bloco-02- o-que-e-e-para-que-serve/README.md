# Ementa - Neste bloco, aprendemos a manusear o GIT E GITHUB.


## PARTE 1 - Instalação e Configuração.
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






