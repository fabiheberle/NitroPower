function pesquisar() {
    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção HTML onde os resultados serão exibidos
    console.log(section); // Loga a seção no console para fins de depuração

    let campoPesquisa = document.getElementById("campo-pesquisa").value; // Obtém o valor do campo de pesquisa

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        section.innerHTML = `<p class="results">Resultado não encontrado</p>` // Se estiver vazio, exibe uma mensagem
        return // Interrompe a função
    };

    campoPesquisa = campoPesquisa.toLowerCase(); // Converte o termo de pesquisa para minúsculas

    let resultados = ""; // Inicializa uma string para armazenar os resultados

    // Variáveis para armazenar os valores dos campos de cada dado
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {

        // Converte os campos do dado para minúsculas para comparação
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Verifica se o termo de pesquisa está presente em algum dos campos
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += // Se estiver presente, adiciona um elemento HTML com os detalhes do dado aos resultados
                `<div class="item-resultado">
            <h2> ${dado.titulo} </h2>
                <p
                class="descricao-meta">${dado.descricao}</p>
                <div class="atribuicoes-carros">
                <p>${dado.cavalos}</p>
                <p>${dado["0-100km/h"]}</p>
                <p>${dado.velocidadeMaxima}</p>
                <p>${dado.cambio}</p>
                <p>${dado.tracao}</p>
                <p>${dado.motor}</p>
                </div>
                <a href=${dado.link} target="_blank">Mais informações</a>
        </div> `
        };
    };

    // Verifica se nenhum resultado foi encontrado
    if (!resultados) {
        resultados = `<p class="results">Palavra não localizada<p>` // Se nenhum resultado foi encontrado, exibe uma mensagem
    };

    section.innerHTML = resultados; // Atualiza o conteúdo da seção HTML com os resultados
}


// Código adicional para exibir todos os dados (não relacionado à função de pesquisa)
let section = document.getElementById("resultados-pesquisa");
let resultados = "";
for (let dado of dados) {
    resultados += `
    <div class="item-resultado">
        <h2> ${dado.titulo} </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
    </div> `
};
section.innerHTML = resultados;
