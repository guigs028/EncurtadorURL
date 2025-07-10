# Encurtador de URL

Este projeto é um sistema completo de encurtamento de URLs, com backend em Node.js/Express e frontend em React + Vite.

## Funcionalidades
- Encurtar URLs longas e gerar links curtos.
- Redirecionamento automático ao acessar o link curto.
- Interface web simples e responsiva.

## Tecnologias Utilizadas
- **Backend:** Node.js, Express, MongoDB, Mongoose (hospedado no Render)
- **Frontend:** React, Vite, TypeScript (hospedado no Vercel)

## Links de Produção
- **Frontend:** [https://encurtador-url-git-master-guigs-projects.vercel.app/](https://encurtador-url-git-master-guigs-projects.vercel.app/)
- **Backend:** [https://encurtadorurl-gyg8.onrender.com](https://encurtadorurl-gyg8.onrender.com)

## Como rodar o projeto localmente

### 1. Clone o repositório
```bash
git clone https://github.com/guigs028/EncurtadorURL.git
cd EncurtadorURL
```

### 2. Backend
```bash
cd backend
npm install
npm run dev
```
O backend estará rodando em `http://localhost:3000`.

### 3. Frontend
Abra outro terminal e execute:
```bash
cd frontend
npm install
npm run dev
```
O frontend estará rodando em `http://localhost:5173`.

## Como usar
- Acesse o frontend em produção: [https://encurtador-url-git-master-guigs-projects.vercel.app/](https://encurtador-url-git-master-guigs-projects.vercel.app/)
- Cole a URL que deseja encurtar e clique em "Encurtar".
- O link curto será exibido e pode ser compartilhado.

## Configuração do Banco de Dados
- O backend utiliza MongoDB (pode ser local ou MongoDB Atlas). No Render, configure a variável de ambiente `MONGO_URI`.

## Observações
- O backend já está configurado para aceitar requisições do frontend (CORS).
- O projeto pode ser facilmente implantado em serviços como Vercel (frontend) e Render (backend).
- O link encurtado terá o domínio do backend hospedado no Render.

---

Desenvolvido por Guilherme Dentzien.