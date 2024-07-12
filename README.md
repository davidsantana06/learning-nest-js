### 🎓 Learning NestJS

Repositório com os conceitos introdutórios do framework NestJS. O código foi desenvolvido nos seguintes conteúdos:
- 🔗 [**Programa em Node.js? Então conheça esse framework (NestJS do ZERO)**](https://www.youtube.com/watch?v=TRa55WbWnvQ)
- 🔗 [**NestJS - A progressive Node.js framework**](https://docs.nestjs.com/)

<br />


### 🤖 Comandos


#### NodeJS

##### ⚡ Instalar as Dependências da Aplicação

```bash
npm install
```


#### NestJS

##### ⚡ Instalar o Nest

```bash
npm i -g @nestjs/cli
```

##### ⚡ Criar uma Aplicação

```bash
nest new app-name
```

##### ⚡ Outros Comandos de Criação

```bash
nest g module <nome-do-modulo>
nest g controller <nome-do-controlador>
nest g service <nome-do-servico>
nest g resource <nome-do-recurso>
...
```


#### Prisma

##### ⚡ Migrar os Modelos do Prisma para SQLite

```bash
npx prisma init --datasource-provider SQlite
npx prisma migrate dev
```

##### ⚡ Inicilizar o Prisma Studio

```bash
npx prisma studio
```