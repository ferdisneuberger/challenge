# Exemplos com curl

Considere que a API esteja rodando em:

```txt
http://localhost:3000
```

## Health

```bash
curl http://localhost:3000/health
```

## Listar tarefas

```bash
curl http://localhost:3000/tasks
```

## Buscar tarefa existente

```bash
curl http://localhost:3000/tasks/1
```

## Buscar tarefa inexistente

```bash
curl http://localhost:3000/tasks/999
```

## Criar tarefa válida

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d "{\"id\":3,\"title\":\"Escrever testes\",\"done\":false}"
```

## Criar tarefa inválida

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d "{\"id\":1,\"title\":\"\",\"done\":\"talvez\"}"
```

## Atualizar tarefa com dados estranhos

```bash
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d "{\"done\":\"sim\",\"extra\":\"campo inesperado\"}"
```

## Atualizar tarefa inexistente

```bash
curl -X PUT http://localhost:3000/tasks/999 \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Nao deveria funcionar\"}"
```

## Excluir tarefa existente

```bash
curl -X DELETE http://localhost:3000/tasks/2
```

## Excluir tarefa inexistente

```bash
curl -X DELETE http://localhost:3000/tasks/999
```

## Dica

Se quiser ver também os headers e o status HTTP, use `-i`:

```bash
curl -i http://localhost:3000/tasks/999
```
