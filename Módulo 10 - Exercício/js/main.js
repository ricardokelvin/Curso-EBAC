$(document).ready(function() {
    $('.menu-hamburger').click(function () {
        $('nav').slideToggle('slow');
    });

    $('#celular').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#CEP').mask('00.000-000');

    $('form').validate({
        rules: {
            entradaNome: {
                required: true
            },
            entradaEmail: {
                required: true,
                email: true
            },
            entradaTelefone: {
                required: true
            },
            entradaCpf: {
                required: true,
            },
            entradaEndereco: {
                required: true
            }
        },
        messages: {
            entradaNome: `Por favor, digite  seu nome!`,
            entradaEmail: `Por favor, digite seu e-mail!`,
            entradaTelefone: `Por favor, digite seu número!`,
            entradaCpf: `Por favor, digite seu CPF!`,
            entradaEndereco: `Por favor, digite seu endereço!`,
            entradaCep: `Por favor, digite seu CEP!`
        },
        submitHandler: function() {
            $('#nome').val('');
            $('#email').val('');
            $('#celular').val('');
            $('#cpf').val('');
            $('#endereco').val('');
            $('#CEP').val('');
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Ainda exitem ${camposIncorretos} campos incorretos no formulário de contato!`)
            }
        }
    })

    $('aside a').click(function() {
        const topo = $('header');

        $('html').animate({
            scrollTop: topo.offset().bottom
        })
    })

    $('.menu li'). click(function() {
        const contact = $('#contatos');

        $('html').animate({
            scrollTop: contact.offset().top
        })
    })
})