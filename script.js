document.addEventListener('DOMContentLoaded', function(){
    const formulario = document.getElementById('form');
    const Inome = document.getElementById('nome');
    const Iemail = document.getElementById('email');
    const Isenha = document.getElementById('senha');
    const Itelefone = document.getElementById('telefone');


    function cadastrar(){

        fetch("hhttp://localhost:3306/cadastrar",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    nome: Inome.value,
                    email: Iemail.value,
                    senha: Isenha.value,
                    telefone: Itelefone.value
                })
            })
            .then(function (res) {console.log(res)})
            .catch(function (res) {console.log(res)})


    };
    
    function limpar(){
        Inome.value = "";
        Iemail.value = "";
        Isenha.value = "";
        Itelefone.value = "";
    };

    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        cadastrar();
        limpar();
        
    });

});                                                              