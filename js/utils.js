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
                ${elem.flag == 1 ? "Inativo" : "Ativo"}
            </span>
            <span class="listagem__informacoes__descricoes">
                <!--Exibe a data sem influência do fuso horário evitando
                que seja exibido o dia anterior-->
                ${date.toLocaleDateString('pt-BR', {timeZone: 'UTC'})}
            </span>
            <button class="listagem__botoes" onclick="deleteConfirm('${elem.nome}')">
                <i class="far fa-trash-alt"></i>
            </button>
            <button class="listagem__botoes"
                onclick="getRegisterToEdit('${elem.nome}', '${elem.autor}', '${elem.quant_paginas}',
                '${parseFloat(elem.preco).toLocaleString('pt-BR', {minimumFractionDigits: 2})}',
                '${date.toLocaleDateString('pt-BR', {timeZone: 'UTC'})}, ${elem.flag}')">
                <i class="far fa-edit"></i>
            </button>
        </article>`;
    })
};

/*Função que retorna o HTML para a exibição do modal de edição de registro*/
const getModalHtml = (name, author, pages, price, flag) => {
    const modal = `
    <div class="modal__edicao__header">
        <h2 class="modal__edicao__header__titulo">Editar informações</h2>
        <button onclick="closeForms('modalEdicao', 'modal__edicao--show')">
            <i class="fa fa-times" aria-hidden="true"></i>
        </button>
    </div>

    <form class="modal__edicao__form">
        <fieldset class="modal__edicao__form__grupos">
            <label id="nome" class="modal__edicao__form__grupos__label">Título do Livro</label>
            <input type="text" maxlength="200" value="${name}"
                class="modal__edicao__form__inputs" id="nomeModal" required />
        </fieldset>
        
        <fieldset class="modal__edicao__form__grupos">
            <label id="autor" class="modal__edicao__form__grupos__label">Nome do Autor</label>
            <input type="text" minlength="10" maxlength="45" value="${author}"
                class="modal__edicao__form__inputs" id="autorModal" required />
        </fieldset>
        
        <fieldset class="modal__edicao__form__grupos">
            <label id="paginas" class="modal__edicao__form__grupos__label">Quantiadade de páginas</label>
            <input type="number" placegolder="100" class="modal__edicao__form__inputs" id="paginasModal"
                min="1" max="1500" value=${pages} required />
        </fieldset>

        <fieldset class="modal__edicao__form__grupos">
            <label id="valor" class="modal__edicao__form__grupos__label">Valor do livro</label>
            <input type="text" class="modal__edicao__form__inputs" id="valorModal"
                onkeyup="formatMoney(this.value);" value=${price} required/>
        </fieldset>
        
        <fieldset class="modal__edicao__form__grupos">
            <select class="modal__edicao__form__grupos__select" id="flag">
                <option class="modal__edicao__form__inputs" value="1" ${flag == 1 && selected}>Inativo</option>
                <option class="modal__edicao__form__inputs" value="0" ${flag == 0 && selected}>Ativo</option>
            </select>
        </fieldset>
        
        <button class="modal__edicao__form__submit" id="saveButton" value="${name}"
            onclick="updateBook(this.value, event)" >Salvar</button>
    </form>`;

    return modal;
};

/*Função que retorna o html do pop-up de confirmação de exclusão de livro*/
const getDeleteConfirm = () => {
    const html = `
    <p class="popUp__exclusao__titulo">Deseja remover este livro?</p>
    <div class="popUp__exclusao__buttonsContainer">
        <button class="popUp__exclusao__buttonsContainer__buttons
            popUp__exclusao__buttonsContainer__buttons--remover" id="removeButton"
                onclick="deleteBook(this.value)">Remover</button>
        <button class="popUp__exclusao__buttonsContainer__buttons
            popUp__exclusao__buttonsContainer__buttons--cancelar" onclick="cancelDeletion()">Cancelar</button>
    </div>`

    return html;
}

/*Função para dar efeito na movimentação dos labels no form de cadastro*/
const labelEffect = (value) => {
    document.getElementById(value).style.top = '-18px';
    document.getElementById(value).style.fontSize = '1em';
    document.getElementById(`${value}Input`).focus();
};

//Máscara monetária com limite de 9.999,99 
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
        deleteValue = e.substring(0, e.length-1);
        document.getElementById("valorInput").value = deleteValue;
        alert("Valor máximo permitido: R$9.999,99");
    }
}

/*Funções que abre e fecha o modal para cadastro e modal de edição*/
const showForms = (elementId, classToAdd) =>{
    if(elementId == "modalEdicao")
    {
        document.getElementById(elementId).style.top = `${parseInt(pageYOffset) + 10}px`;
    }
    document.getElementById(elementId).classList.add(classToAdd);
    document.querySelector("body").classList.add("hide__body");
}
const closeForms = (elementId, classToRemove) => {
    document.getElementById(elementId).classList.remove(classToRemove);
    document.querySelector("body").classList.remove("hide__body");
}

//Função para exibir pop-up de confirmação após cadastrado ou exclusão de livro
const showConfirmation = (value) => {
    if(value == 'cadastrado')
    {
        document.getElementById("formCadastro").style.transition = 'none';
        document.getElementById("continueButton").style.display = 'block';
        closeForms("formCadastro", "cadastro--show");
    }
    else if(value == 'atualizado')
    {
        closeForms("modalEdicao", "modal__edicao--show");
        document.getElementById("continueButton").style.display = 'none';
    }
    else if(value == 'deletado')
    {
        document.getElementById("deletePopUp").style.display = "none";
    }

    /*Define a distância do pop-up em relação ao topo da página pegando
    a quantia de scroll dada pelo usuário e adiconando mais 180px*/
    document.getElementById("confirmPopUp").style.top = `${parseInt(pageYOffset) + 180}px`;
    
    document.getElementById("cadastro_exclusaoTitulo").textContent = `Livro ${value} com sucesso!!`;
    document.getElementById("confirmPopUp").classList.add("cadastro__exclusao__confirmacao--show");
    document.querySelector("body").classList.add("hide__body");
}

//Função para fechar pop up de confirmação
const closePopUp = () => {
    document.getElementById("confirmPopUp").classList.remove("cadastro__exclusao__confirmacao--show");
    document.querySelector("body").classList.remove("hide__body");
    window.location.reload();
}

/*Função para formatar a data para o padrão mysql*/
const formatDate = () => {
    let date = new Date();
    date = date.toLocaleDateString();
    date = date.split("/");
    date = date[2] + "-" + date[1] + "-" + date[0];

    return date;
}

/*Função para limpar os inputs do form de cadastro*/
const clearFormInputs = () => {
    document.getElementById("nomeInput").value = "";
    document.getElementById("autorInput").value = "";
    document.getElementById("paginasInput").value = "";
    document.getElementById("valorInput").value = "";
}