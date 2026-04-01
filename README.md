# Desafio: Façam essa API de tarefas parar de pegar fogo

Vocês receberam uma API de tarefas feita às pressas. Ela aparentemente funciona, mas vários problemas foram relatados:

- tarefas inválidas estão sendo criadas
- IDs duplicados são aceitos
- algumas rotas quebram quando a tarefa não existe
- atualizações aceitam dados errados
- exclusões retornam respostas inconsistentes
- os logs não ajudam em nada

O objetivo é analisar, testar e corrigir a API, sem reescrever tudo do zero.

## Regras

- Não trocar a stack
- Não apagar tudo para começar de novo
- Corrigir os problemas mantendo a ideia original da API
- Melhorar o comportamento das rotas
- Melhorar mensagens de erro e logs

## Objetivos de aprendizagem

Ao final do desafio, vocês devem conseguir:

- entender como uma API Express funciona
- validar dados de entrada
- tratar erros corretamente
- usar status HTTP adequados
- ler e depurar código
- melhorar logs
- deixar a API mais previsível

## Stack

- Node.js
- JavaScript puro
- Express

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Rode a aplicação:

```bash
npm run dev
```

ou

```bash
npm start
```

3. A API sobe em:

```txt
http://localhost:3000
```

## Rotas disponíveis

- `GET /health`
- `GET /tasks`
- `GET /tasks/:id`
- `POST /tasks`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

## Observação importante

O código atual foi deixado com problemas de propósito para o desafio. A ideia é investigar, reproduzir os bugs e corrigir o comportamento sem reconstruir tudo do zero.
