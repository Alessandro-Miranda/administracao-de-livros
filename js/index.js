//Funções de realização do CRUD no BD (Select, Insert, Update e Delete)
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
    let date = formatDate();
    
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
};

const deleteBook = (value) => {
    
    const url = "http://localhost/administracao-de-livros/php/delete.php";

    fetch(`${url}?nome=${value}`).then(res => res.json()).then(resp => {
        return resp > 0 ? showConfirmation('deletado') : alert('Erro ao excluir livro');
    });
};

const updateBook = (value, e) => {
    e.preventDefault();

    const url = "http://localhost/administracao-de-livros/php/update.php";

    let name = document.getElementById("nomeModal").value;
    let author = document.getElementById("autorModal").value;
    let pages = document.getElementById("paginasModal").value;
    let price = document.getElementById("valorModal").value;
    let flag = document.getElementById("flag");
    let date = formatDate();
    let updateCondition = value;
    
    flag = flag.options[flag.selectedIndex].value;

    const postObject = JSON.stringify({
        name,
        author,
        pages,
        price,
        flag,
        date,
        updateCondition
    });
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: postObject
    }).then(resp => resp.json()).then( response => response > 0 ? showConfirmation('atualizado') : console.log(response));
};
//Fim das funções de CRUD

//Função que exibe o modal de edição dos livros
const getRegisterToEdit = (name, author, pages, price, flag) => {
    const html = getModalHtml(name, author, pages, price, flag);

    document.getElementById("modalEdicao").innerHTML = html;
    document.getElementById("saveButton").value = name;
    showForms("modalEdicao", "modal__edicao--show");
};

/*Função para dar continuidade ao cadastro de livros
após concluir uma inserção*/
const continueRegister = () => {
    document.getElementById("confirmPopUp").classList.remove("cadastro__exclusao__confirmacao--show");
    document.querySelector("body").classList.remove("hide__body");
    clearFormInputs();
    showForms('formCadastro', 'cadastro--show');
};

/*Função que abre e fecha o pop-up de confirmação de exclusão*/
const deleteConfirm = (value) => {
    document.getElementById("deletePopUp").innerHTML = getDeleteConfirm();
    document.getElementById("removeButton").value = value;
    document.getElementById("deletePopUp").style.top = `${parseInt(pageYOffset)+86}px`;
    document.getElementById("deletePopUp").style.display = "block";
    document.querySelector("body").classList.add("hide__body");
};

const cancelDeletion = () => {
    document.getElementById("deletePopUp").innerHTML = "";
    document.getElementById("deletePopUp").style.top = 0;
    document.getElementById("deletePopUp").style.display = "none";
    document.querySelector("body").classList.remove("hide__body");
};