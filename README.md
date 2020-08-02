# administracao-de-livros
CRUD Simples em PHP, JS e MySQL para administração de livros de uma loja.

O objetivo é fazer um crud simples utilizando PHP 5 ou 7 (sem frameworks), JS e MySQL para a administração de livros de uma loja.

Você pode ver o projeto em funcionamento __[aqui](https://alebooks.000webhostapp.com/)__;

Por ser um __*host free*__, é possível que ocorra algum erro de dns.
Para contornar essa situação, basta utilizar uma VPN, serviço de proxy ou DNS alternativo.

_Em breve criarei uma versão em React consumindo uma API para evitar enfrentar erros de DNS e facilitar a visualização do projeto e suas funcionalidades._

Toda a apresentação na listagem e armazenamento no banco segue a seguinte lógica e regras a seguir:

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

  __Preview:__
  ![imagem da home](./screenshots/home.png)
  ![tela de cadastro](./screenshots/cadastro.png)
  ![confirmação de cadastro](./screenshots/confirmação.png)
  ![tela de edição](./screenshots/Edição.png)

  OBS.: _A tela de confirmação de cadastro, exclusão e edição é o mesmo modal para ambas as operações o que diferencia são os botões de continuar cadastro e fechar, inseridos e removidos via javascript dependendo da ação feita pelo usuário._
