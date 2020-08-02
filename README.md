# administracao-de-livros
CRUD Simples em PHP, JS e MySQL para administração de livros de uma loja.

O objetivo é fazer um crud simples utilizando PHP 5 ou 7 (sem frameworks), JS e MySQL para a administração de livros de uma loja.

Esta versão pode ser vista em funcionamento __[aqui](https://alebooks.000webhostapp.com/)__;

Por ser um __*host free*__, é possível que ocorra algum erro de dns.
Para contornar essa situação, basta utilizar uma VPN, serviço de proxy ou DNS alternativo.

_Em breve criarei uma versão em React consumindo uma API para evitar enfrentar erros de DNS e facilitar a visualização do projeto e suas funcionalidades._

__Os livros devem conter as seguintes informações:__
  - Nome;
  - Autor;
  - Quantidade de páginas;
  - Preço (em reais, contando centavos);
  - Flag para livro ativo/inativo (não afetando na listagem, somente um valor para referência);
  - Data de inclusão / edição;
  
__Todo o sistema tem que respeitar as seguintes regras:__
  - Não devem haver livros com o mesmo nome;
  - A quantidade de páginas e o preço não podem ser zerados ou negativos;
  - O livro deve ter o valor inicial de inativo, podendo ser alterado posteriormente  diretamente por meio da listagem ou edição completa do livro (Até o momento deixei somente a alteração da flag por meio da edição);
  - Na listagem o preço deve ser formatado no padrão brasileiro;
  - Todas as chamadas devem ser feitas via Ajax;

  __Preview__
  
  __Home do sistema:__
  ![imagem da home](https://github.com/Alessandro-Miranda/administracao-de-livros/blob/master/screenshots/home.PNG)
  
  __Modal de cadastro__
  ![tela de cadastro](https://github.com/Alessandro-Miranda/administracao-de-livros/blob/master/screenshots/cadastro.PNG)
  
  __Modal de confirmação de cadastro onde o usuário pode continuar cadastrando ou fechar e continuar navegando na home__
  ![confirmação de cadastro](https://github.com/Alessandro-Miranda/administracao-de-livros/blob/master/screenshots/confirmação.PNG)
  
  __Modal de edição completa dos livros__
  ![tela de edição](https://github.com/Alessandro-Miranda/administracao-de-livros/blob/master/screenshots/Edi%C3%A7%C3%A3o.PNG)
>>>>>>> f5aab3d26b5bbeb40132532f130c7ac0e6ec5ba1

  OBS.: _A tela de confirmação de cadastro, exclusão e edição é o mesmo modal para ambas as operações o que diferencia são os botões de continuar cadastro e fechar, inseridos e removidos via javascript dependendo da ação feita pelo usuário._
