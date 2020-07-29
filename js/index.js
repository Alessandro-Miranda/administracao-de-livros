const getBooks = () => {
    const url = 'http://localhost/administracao-de-livros/php/index.php';
    let allBooks = [];
    let books;
    
    /*Faz a requisição para o arquivo php local onde tem a chamada ao BD
    para listar todos os livros já presentes no banco no onload da página*/
    fetch(url).then(response => response.json()).
        then(resp => allBooks = resp ).
            then(() => {
                getListHtml(allBooks);
            });
}
/*Função para dar efeito na movimentação dos labels no form de cadastro*/
const labelEffect = (value) => {
    document.getElementById(value).style.top = '-18px';
    document.getElementById(value).style.fontSize = '1em';
    document.getElementById(`${value}Input`).focus();
}

const registerNewBook = (e) => {
    e.preventDefault();

    const url = "http://localhost/administracao-de-livros/php/cadastro.php";

    let name = document.getElementById("nomeInput").value;
    let author = document.getElementById("autorInput").value;
    let pages = document.getElementById("paginasInput").value;
    let price = document.getElementById("valorInput").value;

    const postObject = JSON.stringify({
        name,
        author,
        pages,
        price
    });

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: postObject
    }).then(resp => resp.json())
        .then( response => response > 0 ? window.location.reload() : alert("Erro ao cadastrar livro: " +response));
}

const deleteBook = (value) => {
    
    const url = "http://localhost/administracao-de-livros/php/delete.php";

    if(confirm("Deseja excluir este livro?"))
    {
        fetch(`${url}?nome=${value}`).then(res => res.json()).then(resp => {
            return resp > 0 ? window.location.reload() : alert('Erro ao excluir livro');
        })
    }
};