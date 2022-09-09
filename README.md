
  

# My Menu

  

Este projeto foi desenvolvido com o objetivo de colocar em prática o que foi aprendido sobre o ReactJs e testes. É uma aplicação que exibe o cardápio de um restaurante, separado por categorias. É possível selecionar os itens do menu e ver os itens do pedido, com o valor total. Esta aplicação foi desenvolvida 
tendo em mente que seu uso será por meio de celular, como acontece na maioria dos estabelecimentos.

  

## Requisitos

Para executar a aplicação, é necessário instalar o Node.js versão 14.19.1

  

- Node.js: 14.19.1

  

## Execução

Dentro da pasta do projeto, execute **npm install** para baixar todas as dependências do projeto e em seguida execute o seguinte comando para iniciar a aplicação
 
### `npm start`
  
A aplicação abrirá em seu navegador padrão no endereço

[http://localhost:3001](http://localhost:3001)

Para ser acessível a partir de outro dispositivo (celular/tablet), é necessário: - alterar o script "start-db-server" do package.json para "json-server --host <endereço IPV4 de sua máquina> db.json"
- alterar no arquivo src/config.json, o valor de "apiUrl", trocando localhost pelo endereço de IPV4 da sua máquina,
  ## Algumas Dependências utilizadas
  
 - Axios
 - React-router-dom
 - Json-server
 - MUI

  
## React Hooks e custom hook:

  - useState
- useEffect
- useContext
- useRef
- useDebounce (custom): usado para executar a busca de um item no campo de pesquisa somente após um determinado tempo desde a última digitação.

## Bilbiotecas para testes:

- React-testing-library
- Jest
- Mock Service Work