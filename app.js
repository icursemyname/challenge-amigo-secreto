
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
    let sorteado = document.querySelector('#sortudo');
    if (sorteado) {
        sorteado.remove();
    }
}
    

function listarNome(nome) {
    let listaAmigos = document.querySelector('.name-list');
    let novoAmigo = document.createElement('li'); //cria um novo elemento <li>
    novoAmigo.textContent = nome; //preenche o conteúdo do <li> com o nome do input. 
    listaAmigos.appendChild(novoAmigo); //pega o novo <li> criado e o adiciona dentro da lista, no caso <ul>. 
}

function sortearAmigo() {
    let listaCompleta = document.querySelectorAll('.name-list li');

    if (listaCompleta.length === 0) {
        alert('Não há nomes para serem sorteados.');
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * listaCompleta.length);
    let amigoSorteado = listaCompleta[indiceSorteado].textContent;

    let listaAmigos = document.querySelector('.name-list');
    listaAmigos.innerHTML = ''; //remove todos os li

    let novoLi = document.createElement('li');
    novoLi.id = 'sortudo';
    novoLi.innerHTML = `🎉🎉🎉 ${amigoSorteado} é o sorteado! 🎉🎉🎉`;
    listaAmigos.appendChild(novoLi);

}
