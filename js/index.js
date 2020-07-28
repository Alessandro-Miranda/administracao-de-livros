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
/*Funções que abre e fecha o modal para cadastro*/
const showRegistrationForm = () =>{
    document.getElementById("formCadastro").classList.add("cadastro--show");
}
const closeRegistrationForm = () => {
    document.getElementById("formCadastro").classList.remove("cadastro--show");
}
