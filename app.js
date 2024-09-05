function pesquisar() {
    let section = document.getElementById ("resultados-pesquisa");
    console.log(section);
    
    let resultados = ""
    
    for (let dado of dados) {
        resultados += `
        <div class="item-resultado">
            <h2> ${dado.titulo} </h2>
                <p class="descricao-meta">${dado.descricao}</p>
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
    }
    
    section.innerHTML = resultados
}
// console.log(dados);

let section = document.getElementById ("resultados-pesquisa");
console.log(section);

let resultados = ""

for (let dado of dados) {
    resultados += `
    <div class="item-resultado">
        <h2> ${dado.titulo} </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
    </div> `
}

section.innerHTML = resultados