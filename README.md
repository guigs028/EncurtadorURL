# Encurtador de URL

Este projeto é um sistema completo de encurtamento de URLs, com backend em Node.js/Express e frontend em React + Vite.

## Funcionalidades
- Encurtar URLs longas e gerar links curtos.
- Redirecionamento automático ao acessar o link curto.
- Interface web simples e responsiva.

## Tecnologias Utilizadas
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React, Vite, TypeScript

## Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/guigs028/EncurtadorURL.git
cd seu-repositorio
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
1. Acesse o frontend em `http://localhost:5173`.
2. Cole a URL que deseja encurtar e clique em "Encurtar".
3. O link curto será exibido e pode ser compartilhado.

## Configuração do Banco de Dados
- Certifique-se de ter o MongoDB rodando localmente ou configure a string de conexão no arquivo `.env` do backend.

## Observações
- O backend já está configurado para aceitar requisições do frontend (CORS).
- O projeto pode ser facilmente implantado em serviços como Vercel, Heroku, Render, etc.

---

Desenvolvido por Guilherme Dentzien.