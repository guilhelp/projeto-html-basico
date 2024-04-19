const botao = document.getElementById('salvar');

botao.addEventListener('click', function(e){
    e.preventDefault();
    const texto = document.getElementById('nome').value;

    const lista = document.getElementById('lista');
    const listaInterna = document.createElement('li');
    listaInterna.innerText = texto;
    lista.appendChild(listaInterna)
    document.body.appendChild(lista);
    texto.value = ""
});

function criarElemento(elemento, tipo, id, texto ) {
    const novoElemento = document.createElement(elemento);

    // definindo os campos
    novoElemento.id = id
    novoElemento.innerText = texto
    novoElemento.placeholder = texto
    novoElemento.value = texto
    novoElemento.type = tipo;
    novoElemento.setAttribute('data-id', '12333')

    // estilizando
    // novoElemento.style.backgroundColor = 'blue'
    novoElemento.style.border = 'solid 2px gold'
    novoElemento.style.width = '70%'
  

    return novoElemento;
}

const container = document.querySelector('aside');
const botao2 = criarElemento('button', 'submit', 'botao', 'clique aqui')
const input2 = criarElemento('input', 'text', 'texto1', 'digite seu nome')
const input3 = criarElemento('input', 'number', 'texto2', 'digite sua idade')


container.appendChild(input2);
container.appendChild(input3 );
container.appendChild(botao2);
document.appendChild(container)
