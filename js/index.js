const getBooks = () => {
    const url = 'http://localhost/administracao-de-livros/php/index.php';
    let allBooks = [];
    
    /*Faz a requisição para o arquivo php local onde tem a chamada ao BD
    para listar todos os livros já presentes no banco no onload da página*/
    fetch(url).then(response => response.json()).
        then(resp => allBooks = resp ).
            then(() => {
                getListHtml(allBooks);
            });
}

const registerNewBook = (e) => {
    e.preventDefault();

    const url = "http://localhost/administracao-de-livros/php/cadastro.php";

    let name = document.getElementById("nomeInput").value;
    let author = document.getElementById("autorInput").value;
    let pages = document.getElementById("paginasInput").value;
    let price = document.getElementById("valorInput").value;
    let date = new Date();
    date = date.toLocaleDateString();
    date = date.split("/");
    date = date[2] + "-" + date[1] + "-" + date[0];
    
    const postObject = JSON.stringify({
        name,
        author,
        pages,
        price,
        date
    });

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: postObject
    }).then(resp => resp.json())
        .then( response => response > 0 ? showConfirmation('cadastrado') : alert("Erro ao cadastrar livro: " +response));
}

const deleteBook = (value) => {
    
    const url = "http://localhost/administracao-de-livros/php/delete.php";

    if(confirm("Deseja excluir este livro?"))
    {
        fetch(`${url}?nome=${value}`).then(res => res.json()).then(resp => {
            return resp > 0 ? showConfirmation('deletado') : alert('Erro ao excluir livro');
        })
    }
};

const getRegisterToEdit = (name, author, pages, price, flag) => {
    const html = getModalHtml(name, author, pages, price, flag);

    document.getElementById("modalEdicao").innerHTML = html;
    document.getElementById("saveButton").value = name;
    showForms("modalEdicao", "modal__edicao--show");
}

const updateBook = (elem, e) => {
    e.preventDefault();
}