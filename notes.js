/* 

Node: 
-> Plataforma open source que permite a execução do JS no servidor
-> V8 + libuv(foco em I/O assíncrono) + módulos 
-> Arquirtetura Event loop
-   call stack
-   single thread
-   non blocking i/o
-   módulos próprios: http, dns, fs, buffer, etc. 
-> Frameworks: express, egg.js, Nest.js, Adonis.js, etc. 


API: 
-> Application Programming Interface 
-> Conjunto de especificações de possíveis interações entre aplicações
-> Deve fornecer uma documentação para orientar o desenvolvedor

REST: 
-> Moodelo de arquitetura
-> Representational State Transfer (Transferência representacional de estado)
-> 6 Regras: 
-   1) Client - Server (o client pode ser tanto o front-end quanto outro back-end)
-   2) Stateless: o servidor nao armazena nenhum estado
-   3) Cacheável
-   4) Interface uniforme
-          - Itendificação dos recursos
-              http://servidor.com.br/produtos
-              http://servidor.com.br/clients
-          - Representação dos recursos
-              JSON, XML...
-          - Mensagens autodescritivas
-          - HATEOAS: (Hypertext As The Engine of Application State)
-   5) Deve ser projetada para atuar em camadas
-   6) Código sob demanda: 
-       permite que as funcionalidades do client sejam extendidas por sprints ou por micro applicações


MÉTODOS DE REQUISIÇÕES - HTTP Verbs
-   GET
-   POST
-   DELETE
-   PUT
-   PATCH 


HTTP STATUS CODES: 
-> 1XX: Informativos
-> 2XX: Sucesso
-> 3XX: Redirecionamento
-> 4XX: Erro do cliente
-> 5XX: Erro no servidor



PARÂMETROS DAS REQUISIÇÕES 
-> Header Params 
-       Tokens
-       Controles de sessão, etc

-> Query params
-       na url
-       chave, valor, serparação: http://.../users?page=2&limit=50

-> Route Params
-       -http://.../users/{id}


-> Body Params
-       No corpo da requisição



BOAS PRÁTICAS API Rest

-> Utilização correta dos métodos HTTP
-> Utilização correta dos status nos retornos das requisições 
-> Padrão de nomenclatura nos recursos 



*/