form.addEventListener("submit", function (e) {
    e.preventDefault();

    var cadastro = {
        nome: document.querySelector("#nome").value,
        sobrenome: document.querySelector("#sobrenome").value,
        idade: document.querySelector("#idade").value,
        email: document.querySelector("#email").value
    };

    var tabela = document.querySelector("#table");
    var linha = document.createElement("tr");

    // Definindo o atributo e o valor do atributo
    linha.setAttribute('class', 'linha');

    // Quando chamarmos o método appendChild -> o javascript irá adicionar a linha com todas as informações declaradas acima
    linha.innerHTML =
        `<td>${cadastro.nome}</td>
         <td>${cadastro.sobrenome}</td>
         <td>${cadastro.idade}</td>
         <td>${cadastro.email}</td>`

    // nossa constante tabela está acessando o DOM do elemento tbody e o método appendChild irá inserir um elemento filho com todas as definições configuradas acima
    tabela.querySelector('tbody').appendChild(linha);

});