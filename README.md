# ces26-tarefa4

Utilizando Node e o módulo Express, desenvolva
uma aplicação no servidor que atenda os seguintes
requisitos:

1)Permite a exibição de arquivos estáticos.

2)Permite a realização de upload de arquivo
enviado através do comando POST.

3)Processa dados de um formulário enviados via
comando GET.

4)Suporta uma aplicação AJAX, que ao click de
mouse em um botão, acessa um conjunto de
dados em JSON e os exibe no lugar de um
parágrafo em uma página HTML.

### Executando em ambiente local

Após obter uma cópia do diretório deve-se executar:
```bash
npm i
```
para que as dependências sejam satisfeitas.

Em seguida, basta inicializar a aplicação em ambiente local com:

```bash
node server.js
```

Acessando o http://localhost:3009 a página inicial poderá ser visualizada com o browser.

### Estrutura geral
Cada um dos requisitos indicados foi tratado em uma rota diferente. A partir do menu apresentado cada item pode ser acessado com um click.

* No primeiro item tem-se a exibição de conteúdo estático
* No segundo item tem-se um mecaninsmo de upload de arquivos, o explorador de arquivos é aberto e o usuário após escolher o arquivo deve confirmar o envio, o arquivo é salvo no diretório do projeto 
* No terceiro item o usuário pode preencher um pequeno formulário e submeter as informações, o envio ao backend pode ser verificado com imporessão da informação no temrinal em que o servidor está rodando 
* No quarto item, com o click do botão é realizada a substituição de um parágrafo pelo conteúdo de um arquivo .json

### Detalhes adicionais
Maiores informações sobre a atividade podem ser encontradas no relatório e no código comentado.
