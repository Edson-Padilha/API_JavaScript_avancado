$('#repositorios').click(
    function () {
        
        $.ajax(
            {
                url: "https://api.github.com/users/" + $("#usuario").val() + "/repos",
                type: "get",
                success: function (repositorios) {
                    
                    repositorios.forEach(repositorio => {
                        escreve_linha(repositorio);
                    });
                },
                error: function (erro) {
                    console.warn(erro);

                }
            }
        );
    }
);

function escreve_linha(repositorio) {

    let linha = tag("tr");
    $("<td>", { text: repositorio.id }).appendTo(linha);
    $("<td>", { text: repositorio.name }).appendTo(linha);
    $("<td>", { text: repositorio.html_url }).appendTo(linha);
    $("<td>", { text: repositorio.created_at }).appendTo(linha);
    $("<td>", { text: repositorio.updated_at }).appendTo(linha);
    $("#resultado").append(linha);
}
function tag(nome) {
    return $("<" + nome + "></" + nome + ">")
}