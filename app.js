
function adicionarAmigo() {
    let amigo = document.querySelector('#amigo').value;
    
    if (amigo === '') { 
        alert('Escreva um nome válido!');
        return; //sai da função se o nome estiver vazio.
    }
    else { 
        listarNome(amigo);
        document.querySelector('#amigo').value = ''; //limpar o campo de entrada.
    }
}

function listarNome(nome) {
    let listaAmigos = document.querySelector('.name-list');
    let novoAmigo = document.createElement('li'); //cria um novo elemento <li>
    novoAmigo.textContent = nome; //preenche o conteúdo do <li> com o nome do input. 
    listaAmigos.appendChild(novoAmigo); //pega o novo <li> criado e o adiciona dentro da lista, no caso <ul>. 
}