
$("#buscar").click(
    function () {


        $.ajax(
            {
                url: "https://viacep.com.br/ws/" + $("#cep").val() + "/json/",
                type: "get",
                success: function (resp) {
                    console.log(resp);


                    $('<p>',
                        {
                            text: resp.logradouro + " - " + resp.bairro + " - " + resp.localidade + " - " +resp.uf + " - "+ resp.complemento,
                            class: "btn btn-button text-success"
                        }
                    ).appendTo('#resultado');

                    // $('<a>',
                    //     {
                    //         href: "https://api.whatsapp.com/send?phone=+5547999144775&text=Endereco+pesquisa:" + resp.logradouro + " - " + resp.bairro + " - " + resp.localidade + " - " + resp.complemento
                    //     }
                    //     ).appendTo('#enviamsg');


                    // let p = $("<p></p>");
                    // p.text(resp.logradouro + " - " + resp.bairro)
                    // $("#resultado").append(p);
                },
                error: function (erro) {
                    console.warn(erro);
                },
            }
        )
    }
);
