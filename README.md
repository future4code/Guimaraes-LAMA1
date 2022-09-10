
<!-- TITLE -->
 <h1 align="center" id="top"> Labenu Music Awards</h1>
 
 
 <!-- SOBRE -->
<h2> Sobre </h2>
<p align="justify">
 Como você deve saber muito bem, o nosso querido chefinho Astrodev é uma pessoa com Networking incrível e ele conhece vários artistas estrelados. Além disso, ele também é um grande ~~megalomaníaco~~ visionário e está planejando fazer um grande evento: o **LAMA**, *Labenu Musical Awards*, um festival  com várias bandas famosas para a formatura da sua turma e, no final, vocês podem eleger a banda que mais gostaram! Entretanto, na opinião dele, vocês só serão merecedores se entregarem um sistema impecável que permita o gerenciamento completo desses shows.

<p align="justify">
Para isso já deixamos algumas tabelas prontas para vocês não precisarem se preocupar com a modelagem do banco. Deixamos também um template do projeto já com a estrutura da parte de usuários. Vocês podem usá-las a vontade, mas, se quiser fazer do zero sem esse auxílio, também pode. </p>


<h2 id="site"> Tecnologias</h2>

* Nodejs
* Typescript
* Express
* Jest
* Uuid
* Jwt
* Bcryptjs

<h2>Rodar o projeto</h2>

Primeiro clone no repositório

    git clone https://github.com/future4code/Guimaraes-LAMA1

Instalar todas as dependências 

    npm install

Criar arquivo .env com variváveis
```

  DB_USER = 
  DB_PASSWORD = 
  DB_HOST =
  DB_PORT = 3306
  JWT_KEY = 
  DB_DATABASE_NAME = 
  ACCESS_TOKEN_EXPIRES_IN = 10min
  ```

Rodar o projeto

    npm start



<h2>Endpoints</h2>


<h3>Cadastro:</h3> O nosso sistema deve permitir o registro os usuários que irão usá-lo. Para se cadastrar, é necessário passar um email, um nome e uma senha, e também uma função dentro do sistema. Você pode ser um cliente (usuário normal) ou um administrador do sistema (admin). O usuário deve poder se logar automaticamente após o cadastro. Caso tenha interesse, tente tornar o código de cadastro mais testável utilizando a inversão de dependência.


<h3>Login:</h3> Para realizar o login, basta informar seu e-mail e a sua senha. O retorno deve conter o token de autenticação do usuário. Caso tenha interesse, tente tornar o código de cadastro mais testável utilizando a inversão de dependência.

<h3>Registrar banda</h3> O nosso sistema deve deixar registrado todas as bandas que participarão dos três dias de shows. Para uma banda ser criada, precisamos das informações: nome, gênero musical principal a qual ela se identifica e o nome de um responsável (que pode ser qualquer membro dela). Não podem existir duas bandas com o mesmo nome. **Somente administradores** podem registrar bandas. Faça ao menos dois testes para checar se os dados estão corretos, sendo um em caso de erro e outro em caso de acerto.

<h3>Detalhes sobre a banda:</h3> Esse endpoint deve receber o id ou o nome da banda e retornar as todas as informações salvas sobre ela.

Permite o usuario ter acesso as informações da banda salvos no banco de dados, precisa informar nome ou id da banda. Qualquer usuário logado tem acesso
Adicionar um show a um dia

<h3>Adicionar um show a um dia:</h3>
Para cadastrar um show, o endpoint precisa do id da banda, o dia (sexta, sábado ou domingo) e o horário em que ela irá se apresentar. Deve haver uma validação para indicar se o horário é válido (ou seja, se está entre 08h e 23h). Além disso os shows só podem ser marcados em horários redondos, ou seja, pode ser 08h - 09h ou 09h - 13h mas não pode ser 09h - 10h30 ou 10h30 - 14h.

Caso já exista um show marcado para o dia e o horário em questão, o seu endpoint deve retornar um erro. Faça ao menos dois testes para checar se os dados estão corretos, sendo um em caso de erro e outro em caso de show em data repetida.

<h3>Pegar todos os shows de uma data</h3>
Recebe um dia (sexta, sábado ou domingo) e retorna todos os shows daquela data (ordenados pelo horário), mostrando somente o nome da banda e o gênero musical principal.


<h2 id="site"> Link do site </h2>
<p>🔗 <a href=""> LAMA</a>  </p>

