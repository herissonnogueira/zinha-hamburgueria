$(document).ready(function () {
    $("#telefone").mask("(00) 00000-0000");

    $("#form").validate({
        rules: {
        nome: "required",
        email: {
            required: true,
            email: true,
        },
        telefone: {
            required: false, 
            minlength: 14, 
        },
        mensagem: "required",
    },
    messages: {
        nome: "Por favor, preencha o seu nome.",
        email: {
            required: "Por favor, preencha o seu e-mail.",
            email: "Por favor, digite um e-mail válido.",
        },
        telefone: {
            minlength: "Por favor, preencha o telefone corretamente.",
        },
        mensagem: "Por favor, escreva a sua mensagem.",
    },
    submitHandler: function (form) {
        alert("Formulário enviado com sucesso!");
    },
});
});