# Node JWT API

API RESTful construída com Node.js, Express e MongoDB (via Prisma ORM), com autenticação baseada em JSON Web Tokens (JWT) e gerenciamento de usuários.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Prisma ORM](https://www.prisma.io/)
- [JWT (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/node-jwt.git
cd node-jwt
npm install




PORT=3000
JWT_SECRET=sua_chave_secreta
DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/seubanco?retryWrites=true&w=majority"



Configure o banco e gere o client Prisma:
npx prisma init
# Edite o arquivo .env com sua conexão DATABASE_URL
npx prisma migrate dev --name init

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}



# Inicia o servidor com watch mode (modo de desenvolvimento)
npm run dev

# Inicia o servidor manualmente
node src/server.js

