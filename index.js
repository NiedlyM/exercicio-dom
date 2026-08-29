const tarefas = [
  {
    id: 1,
    titulo: "Revisar seleção de elementos",
    descricao: "Praticar querySelector e querySelectorAll.",
    prioridade: "alta",
    concluida: false,
  },
  {
    id: 2,
    titulo: "Criar elementos com JavaScript",
    descricao: "Montar cada item da lista usando createElement.",
    prioridade: "media",
    concluida: true,
  },
  {
    id: 3,
    titulo: "Estudar atributos e classes",
    descricao: "Usar setAttribute e classList para personalizar os itens.",
    prioridade: "baixa",
    concluida: false,
  },
];

// <------- seu código aqui ---->
  const ul = document.querySelector("#lista-tarefas");

  const contadorTarefas = document.querySelector("#total-tarefas") || document.querySelector(".contador");
ul.innerHTML = "";
function criarListaDeTarefas(tarefa) {
  const li = document.createElement("li");
  li.classList.add("tarefa");
  li.setAttribute("data-id", tarefa.id);
  li.setAttribute("data-status", tarefa.concluida ? "concluida" : "pendente");
  if (tarefa.concluida) {
    li.classList.add("tarefa-concluida");
  }

  const checkbox = document.createElement("input");
  checkbox.classList.add("tarefa-checkbox");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("aria-label", `Concluir: ${tarefa.titulo}`);
  checkbox.checked = tarefa.concluida;
  li.appendChild(checkbox);

  const div = document.createElement("div");
  div.classList.add("tarefa-conteudo");

  const h3 = document.createElement("h3");
  h3.classList.add("tarefa-titulo");
  h3.textContent = tarefa.titulo;

  const descricao = document.createElement("p");
  descricao.classList.add("tarefa-descricao");
  descricao.textContent = tarefa.descricao;

  div.appendChild(h3);
  div.appendChild(descricao);
  li.appendChild(div);

  const span = document.createElement("span");
  span.classList.add("tarefa-prioridade", `prioridade-${tarefa.prioridade}`);
  span.textContent = tarefa.prioridade;
  li.appendChild(span);

  const divAcoes = document.createElement("div");
  divAcoes.classList.add("acoes-tarefa");

  const button2 = document.createElement("button");
  button2.classList.add("botao", "botao-editar");
  button2.setAttribute("type", "button");
  button2.setAttribute("data-acao", "editar");
  button2.textContent = "Editar";

  const button = document.createElement("button");
  button.classList.add("botao", "botao-remover");
  button.setAttribute("type", "button");
  button.setAttribute("data-acao", "remover");
  button.textContent = "Remover";

  divAcoes.appendChild(button2);
  divAcoes.appendChild(button);
  li.appendChild(divAcoes);

  ul.appendChild(li);
}

for (let tarefa of tarefas) {
  criarListaDeTarefas(tarefa);
}

if (contadorTarefas) {
  contadorTarefas.textContent = tarefas.length;
}