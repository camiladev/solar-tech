# X Solar Tech

X Solar Tech é uma empresa ficticia que precisa de um sistema de gestão de seus clientes.

**Telas**

![Screenshot_2021-04-28 X Solar Tech](https://user-images.githubusercontent.com/63053569/116457982-776af580-a83a-11eb-9d5d-5056941f2995.png)

![Screenshot_2021-04-28 X Solar Tech(1)](https://user-images.githubusercontent.com/63053569/116457987-79cd4f80-a83a-11eb-9fbe-98b0a9393899.png)

### :page_with_curl: Informações sobre o Projeto

O sistema precisa que seja possivel cadastras clientes, onde cada cliente pode ter mais de um endereço em seu cadastro.

Mostrar uma lista de todos os clientes cadastrados e ainda que seja possível editar os dados dos clientes e excluir um cliente, caso necessário.

### :clipboard: Resolução

As funcionaliades de CRUD foram realizadas com axios e com Context API, para que os dados pudessem ser acessados qualquer componente.

Na parte da listagem utilizei uma abordagem diferente, onde os dados do cliente são mostrados de forma resumida e para ver mais o componente expande exibindo o restante dos dados.

Para cada cliente é possivel ter mais de um endereço cadastrado, e por isso criei uma funcionalidade que quando acionada acrescenta mais campos de endereços para ser cadastrados. E oferecer essa função me gerou uma demanda maior de tempo para realizar, e a funcionalidade de editar os dados não está funcionando corretamente, mas irei estudar para resolver.

### :hammer_and_wrench: Tecnologias usadas

- React.js (Hooks, Contaxt API)
- HTML5
- CSS3
- Axios para as requisições
- API Fake com Json-Server

### :computer: Execução

Para você rodar o projeto localmente é necessário que realize o clone do projeto e executar o comando:

```bash
npm install
```

Antes de executar a aplicação é necessário startar o server, usando o comando:

```bash
npm run server
```

E para executar a aplicação de o seguinte comando:

```bash
npm start
```

Agora no navegar acesse [http://localhost:3000/](http://localhost:3000/)
