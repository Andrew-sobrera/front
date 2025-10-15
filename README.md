# Gerenciador de Tarefas - Frontend

Aplicação frontend para gerenciamento de tarefas construída com Vue 3, TypeScript e Vite.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js**: versão 20.19.0 ou superior, ou versão 22.12.0 ou superior
- **npm**: gerenciador de pacotes (vem junto com Node.js)

## 🚀 Como Rodar o Projeto

### 1. Instalação das Dependências

Primeiro, instale todas as dependências do projeto:

```sh
npm install
```

### 2. Configuração do Backend

⚠️ **IMPORTANTE**: Este projeto frontend requer que o backend esteja rodando em `http://localhost:8000`.

Certifique-se de que a API backend está em execução antes de iniciar o frontend. A aplicação se conecta aos seguintes endpoints:

- `GET http://localhost:8000/api/tasks` - Listar tarefas
- `POST http://localhost:8000/api/tasks` - Criar tarefa
- `PUT http://localhost:8000/api/tasks/{id}` - Atualizar tarefa
- `DELETE http://localhost:8000/api/tasks/{id}` - Excluir tarefa

### 3. Executar em Modo de Desenvolvimento

Inicie o servidor de desenvolvimento com hot-reload:

```sh
npm run dev
```

A aplicação estará disponível em: `http://localhost:5173` (ou outra porta indicada no terminal)

## 📦 Build para Produção

### Verificar Tipos e Compilar

Para fazer o build completo da aplicação para produção:

```sh
npm run build
```

Este comando irá:
1. Verificar os tipos TypeScript
2. Compilar e minificar os arquivos
3. Gerar os arquivos otimizados na pasta `dist/`

### Apenas Compilar (sem verificação de tipos)

```sh
npm run build-only
```

### Preview do Build de Produção

Para testar o build de produção localmente:

```sh
npm run preview
```

## 🛠️ Comandos Úteis

### Verificação de Tipos

Verificar erros de TypeScript sem compilar:

```sh
npm run type-check
```

### Linting e Formatação

Executar ESLint e corrigir problemas automaticamente:

```sh
npm run lint
```

Formatar código com Prettier:

```sh
npm run format
```

## 🏗️ Tecnologias Utilizadas

- **Vue 3**: Framework JavaScript progressivo
- **TypeScript**: Superset JavaScript com tipagem estática
- **Vite**: Build tool e dev server rápido
- **ESLint**: Linter para JavaScript/TypeScript
- **Prettier**: Formatador de código

## 📁 Estrutura do Projeto

```
front/
├── src/
│   ├── components/      # Componentes Vue
│   │   ├── TaskForm.vue
│   │   ├── TaskItem.vue
│   │   └── TaskList.vue
│   ├── App.vue          # Componente principal
│   └── main.ts          # Ponto de entrada
├── public/              # Arquivos estáticos
├── index.html           # Template HTML
└── package.json         # Dependências e scripts
```

## 🐛 Solução de Problemas

### Erro de conexão com o backend

Se você receber erros de conexão, verifique:
- O backend está rodando em `http://localhost:8000`?
- Não há bloqueios de CORS na API?

### Erro de versão do Node.js

Se receber erros relacionados à versão do Node.js, verifique sua versão:

```sh
node --version
```

Certifique-se de estar usando Node.js >= 20.19.0 ou >= 22.12.0
