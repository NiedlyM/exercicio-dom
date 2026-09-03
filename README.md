# Exercício: Lista de tarefas com DOM

Neste exercício, você vai usar JavaScript para transformar os dados de um array em elementos HTML. A base da página e os estilos já estão prontos. Sua tarefa é construir a lista de forma dinâmica, sem escrever os itens diretamente no HTML.

## Contexto

No arquivo `index.js`, existe um array chamado `tarefas`. Cada objeto representa uma tarefa que deve aparecer na tela.

```js
const tarefas = [
  {
    id: 1,
    titulo: "Revisar seleção de elementos",
    descricao: "Praticar querySelector e querySelectorAll.",
    prioridade: "alta",
    concluida: false,
  },
];
```

O HTML já possui o container, o título e a lista vazia:

```html
<ul id="lista-tarefas" class="lista-tarefas"></ul>
```

## Sua tarefa

Crie, com JavaScript, um item para cada objeto do array e insira todos eles dentro de `#lista-tarefas`.

Cada objeto deve gerar uma estrutura parecida com esta:

```html
<li class="tarefa tarefa-concluida" data-id="2" data-status="concluida">
  <input
    class="tarefa-checkbox"
    type="checkbox"
    aria-label="Concluir: Criar elementos com JavaScript"
    checked
  />
  <div class="tarefa-conteudo">
    <h3 class="tarefa-titulo">Criar elementos com JavaScript</h3>
    <p class="tarefa-descricao">Montar cada item da lista usando createElement.</p>
  </div>
  <span class="tarefa-prioridade prioridade-media">media</span>
  <div class="acoes-tarefa">
    <button class="botao botao-editar" type="button" data-acao="editar">Editar</button>
    <button class="botao botao-remover" type="button" data-acao="remover">Remover</button>
  </div>
</li>
```

## Requisitos

- Selecionar a lista com `document.querySelector()`.
- Percorrer o array de tarefas.
- Criar os elementos com `document.createElement()`.
- Preencher os textos usando `innerText`.
- Adicionar as classes com `classList.add()`.
- Adicionar os atributos com `setAttribute()`.
- Usar o valor de `concluida` para decidir se o item recebe `.tarefa-concluida`.
- Usar o valor de `prioridade` para adicionar a classe correspondente: `.prioridade-alta`, `.prioridade-media` ou `.prioridade-baixa`.
- Inserir os elementos na ordem correta dentro do item.
- Inserir cada item dentro da lista com `appendChild()` ou `append()`.
- Atualizar o contador com a quantidade de objetos do array.

## Importante

Neste exercício, não vamos usar eventos. Os botões `Editar` e `Remover` devem apenas aparecer na tela. Eles serão utilizados no próximo exercício, quando vamos aprender a criar, editar e remover tarefas a partir de ações da pessoa usuária.

Não altere a estrutura principal do `index.html` nem escreva as tarefas diretamente nele.

## Parte 2: eventos

Nesta segunda parte, vamos usar eventos para dar vida à lista. Os botões `Editar` e `Remover` e o checkbox de cada item vão passar a responder às ações da pessoa usuária.

### Sua tarefa

1. Ao clicar em **Remover**, a tarefa deve sair da tela e do array.
2. Ao clicar em **Editar**, a pessoa deve poder alterar o título da tarefa.
3. Ao marcar ou desmarcar o **checkbox**, a tarefa deve mudar de estado entre concluída e pendente.

### Passo a passo

Siga esta ordem para construir esta parte:

1. Selecione a lista `#lista-tarefas` com `document.querySelector()`.
2. Adicione um listener de clique na lista com `addEventListener("click", ...)`: assim, todos os botões dentro dela ficam cobertos pelo mesmo código.
3. Dentro do listener, use `event.target` para saber onde a pessoa clicou e o atributo `data-acao` do botão para descobrir se a ação é `editar` ou `remover`. Se o clique não veio de um botão, ignore.
4. Suba até o `<li>` mais próximo com `closest(".tarefa")` e leia o `data-id` para descobrir qual tarefa foi acionada.
5. Se a ação for **remover**, tire o item da tela com `remove()` e o objeto do array (com `splice()` ou `filter()`). Depois, atualize o contador.
6. Se a ação for **editar**, peça o novo título (por exemplo, com `prompt()`), atualize o `innerText` do `h3` e o objeto no array.
7. Adicione um listener de mudança na lista, com `addEventListener("change", ...)`, para escutar o checkbox.
8. Quando o checkbox mudar, use a propriedade `checked` para saber o novo estado, alterne a classe `.tarefa-concluida` com `classList.toggle()` e atualize o objeto no array.
9. Depois de cada ação, atualize o contador com a nova quantidade de tarefas.

### Requisitos

- Usar `addEventListener()` para escutar os eventos de clique e de mudança.
- Usar `event.target` para identificar o elemento que disparou o evento.
- Usar o valor de `data-acao` para decidir se a ação é editar ou remover.
- Usar o valor de `data-id` para encontrar a tarefa no array.
- Ao remover, retirar o item da tela com `remove()` e o objeto do array.
- Ao editar, atualizar o texto na tela e o objeto no array.
- Ao marcar o checkbox, alternar a classe `.tarefa-concluida` com `classList.toggle()`.
- Manter o contador sempre atualizado após cada ação.
- Não recarregar a página: os botões já têm `type="button"` justamente para evitar isso.

## Desafios extras

- Alterar o texto do título usando JavaScript.
- Exibir uma mensagem quando o array estiver vazio.
- Criar uma classe visual diferente para tarefas de prioridade alta.
