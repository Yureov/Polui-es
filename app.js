function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    let campoPesquisar = document.getElementById("pesquisa").value

    if (!campoPesquisar) {
        section.innerHTML = "<p style='color: white; font-size: 18px;'> Nenhum tipo de poluição foi encontrada, pesquiser por algum tipo de poluição!</p>"
        return
    }

    campoPesquisar = campoPesquisar.toLowerCase()

    let pesquisa = "";

    let titulo = "";

    let descricao = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        if (titulo.includes(campoPesquisar) || descricao.includes(campoPesquisar)) {
            // Cria uma nova div para cada resultado, formatando o HTML
            resultados += `
             <div class="item-resultado">
                 <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                 <p class="descricao-meta">${dado.descricao}</p>
                 <a href="${dado.link}" target="_blank">Mais informações</a>
             </div>
         `;
        }

    }

    if (!resultados) {
        resultados = "<p style='color: white; font-size: 18px;'>Sua pesquisar está errada, pesquiser por tipos de poluições!</p>"
    }

    // Atribui o HTML formatado à seção de resultados
    section.innerHTML = resultados;
}
