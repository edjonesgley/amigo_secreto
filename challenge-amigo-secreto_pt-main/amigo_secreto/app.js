let listaAmigos = []; // Declara o array fora da função para manter os nomes

function adicionarAmigo() {
  let amigoInput = document.getElementById('amigo');
  let amigoNome = amigoInput.value.trim(); // Obtém o valor do input e remove espaços extras

  if (amigoNome === "") {
    alert('Por favor, insira um nome de amigo');
     
  }

  if (listaAmigos.includes(amigoNome)) {
    alert('Amigo já adicionado');
    amigoInput.value = ""; // Limpa o input
    return; // Sai da função
  }

  listaAmigos.push(amigoNome); // Adiciona o nome ao array
  amigoInput.value = ""; // Limpa o input
  atualizarListaAmigos(); // Chama a função para atualizar a lista na tela
}

function atualizarListaAmigos() {
  const listaAmigosElement = document.getElementById('listaAmigos');
  listaAmigosElement.innerHTML = ""; // Limpa a lista antes de atualizar

  listaAmigos.forEach((amigo) => {
    const listItem = document.createElement("li");
    listItem.textContent = amigo;
    listaAmigosElement.appendChild(listItem);
  });
}
function sortearAmigo() {
  let impares = listaAmigos.length % 2 !== 0; // verifica se o número de amigos é ímpar
  if (impares) {
    alert('Número de amigos ímpar, adicione mais um amigo');
    return;
  }
  let sortear = parseInt(Math.random() * (listaAmigos.length) - 1);
  let result = document.querySelector('#resultado');
  result.innerHTML = 'O amigo secreto sorteado é : ' + listaAmigos[sortear];

}

