# administracao-de-livros
CRUD Simples em PHP, JS e MySQL para administração de livros de uma loja.

O objetivo é fazer um crud simples utilizando PHP 5 ou 7 (sem frameworks), JS e MySQL para a administração de livros de uma loja.

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
  - O livro deve ter o valor inicial de inativo, podendo ser alterado posteriormente  diretamente por meio da listagem ou edição completa do livro
  - Na listagem o preço deve ser formatado no padrão brasileiro
  - Todas as chamadas devem ser feitas via Ajax
