# EMENTA - Neste bloco aprendemos comandos para manipular versões entre arquivos de repositório LOCAL e REMOTO, bem como abrir Pull Request e compreender a dinâmica de trabalhar de forma assíncrona no mesmo projeto

## EXERCICIOS

1. Navegue até a raiz do projeto com o arquivo **.txt**.

2. Verifique se não existe nada sem **"commitar"** utilizando **git status**.
```Caso exista algo, verifique se é necessário e faça o commit, ou remova-o.
```

3. Crie uma nova branch com o nome **trybe-skills-changes** e faça **checkout** nela.
 
4. No arquivo **.txt**, ao final da lista de habilidades, adicione mais duas habilidades que serão desenvolvidas na Trybe, veja o exemplo abaixo.
```
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
- HTML
- CSS
```
- Faça um **git add nome-do-arquivo.extensao**.
- Você pode adicionar todos os arquivos que você modificou usando **git add .**, mas evite isso em commits com muitos arquivos para não adicionar nenhuma alteração por engano.
- Agora um **git commit -m "Mensagem que você gostaria"**.
- Uma boa prática é sempre resumir o que o seu **commit** está alterando, por exemplo, **git commit -m "Adiciona nova skill"**.
- Evite juntar muitas modificações em um único **commit**. Assim, caso haja algum erro no código, ficará mais fácil visualizar em qual alteração ele surgiu.
- E por último um **git push -u origin trybe-skills-changes**.
