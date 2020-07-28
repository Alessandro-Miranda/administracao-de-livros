const getListHtml = (value) => {
    /*Função que recebe todos os livros presentes no BD como parâmetro
    e mapeia o array inserindo o html no corpo da página*/
    
    value.map((elem) => {
        /*Pega o Conteúdo já existente na div root para inserir na sequência o próximo elemento*/
        let previewContent = document.getElementById("root").innerHTML;
        
        let date = new Date(elem.data_inclusao_edicao);
        
        document.getElementById("root").innerHTML = `${previewContent} 
        <article class="listagem__informacoes listagem__informacoes--itens">
            <span class="listagem__informacoes__descricoes listagem__informacoes__descricoes--nome">
                ${elem.nome.toString()}
            </span>
            <span class="listagem__informacoes__descricoes">${elem.autor}</span>
            <span class="listagem__informacoes__descricoes">${elem.quant_paginas}</span>
            <span class="listagem__informacoes__descricoes">
                ${parseFloat(elem.preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
            </span>
            <span class="listagem__informacoes__descricoes">
                ${elem.flag === 1 ? 'Ativo' : "inativo"}
            </span>
            <span class="listagem__informacoes__descricoes">
                <!--Exibe a data sem influência do fuso horário evitando
                que seja exibido o dia anterior-->
                ${date.toLocaleDateString('pt-BR', {timeZone: 'UTC'})}
            </span>
            <button class="listagem__botoes" onclick="deleteBook('${elem.nome}')">
                <i class="far fa-trash-alt"></i>
            </button>
            <button class="listagem__botoes">
                <i class="far fa-edit"></i>
            </button>
        </article>`;
    })
};

const deleteBook = (value) => {
    
    const url = "http://localhost/administracao-de-livros/php/delete.php";
    let userConfirm = confirm("Deseja excluir este livro?");

    if(userConfirm)
    {
        fetch(`${url}?nome=${value}`).then(res => res.json()).then(resp => {
            return resp > 0 ? window.location.reload() : alert('Erro ao excluir livro');
        })
    }
};

/*Função para formatar o valor digitado no campo "preço do livro" apenas para proporcionar efeito visual*/
const formatMoney = (e) => {
    let deleteValue ='';
    let cents = '';
    let hundreds = '';
    let thousand = '';

    if(isNaN(e.substring(e.length-1, e.length)))
    {
        /*Se o valor não for númerico exclui o último valor digitado*/
        alert("Digite apenas números!");
        deleteValue = e.substring(0, e.length-1);
        document.getElementById("valorInput").value = deleteValue;
        return false;
    }
    else if(e.length == 2)
    {
        document.getElementById("valorInput").value = ","+e;
    }
    else if(e.length == 4)
    {
        cents = e.substring(2,4);
        hundreds = e.substring(1,2);
        document.getElementById("valorInput").value = hundreds+","+cents;
    }
    else if(e.length == 5)
    {
        cents = e.substring(3,5);
        hundreds = e.substring(0,1)+e.substring(2,3);
        document.getElementById("valorInput").value = hundreds+","+cents;
    }
    if(e.length == 6)
    {    
        cents = e.substring(4,6);
        hundreds = e.substring(0,2) + e.substring(3,4);
        document.getElementById("valorInput").value = hundreds+","+cents;
    }
    if(e.length == 7)
    {   
        cents = e.substring(5,7);
        hundreds = e.substring(1,3) + e.substring(4,5);
        thousand = e.substring(0,1);
        document.getElementById("valorInput").value = thousand+'.'+hundreds+","+cents;
    }
    if(e.length > 8)
    {
        alert("Valor máximo permitido: R$9.999,99");
        deleteValue = e.substring(0, e.length-1);
        document.getElementById("valorInput").value = deleteValue;
        return false;
    }
}