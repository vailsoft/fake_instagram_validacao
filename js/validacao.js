    window.addEventListener('load',(event)=>{
    let formulario = document.querySelector(".form-auth");
    let btnSubmit = document.querySelector(".form-auth button");
    let inputNomeUsuario = document.querySelector("input[name='username']")
    let dataNascimento = document.createElement("input");
    dataNascimento.setAttribute("type", "date");
    dataNascimento.setAttribute("id", "dataNascimento");
    dataNascimento.setAttribute("name", "dataNascimento");
    formulario.insertBefore(dataNascimento, inputNomeUsuario);
    
    let label = document.createElement('label');
    label.setAttribute("for", "dataNascimento");
    label.innerText = "Data de Nascimento";
    label.style.cssText = "margin: 0px; color: gray; text-align: left"
    formulario.insertBefore(label, dataNascimento);
    
    
    //addEventListener(nome_evento, função_disparada)
    btnSubmit.addEventListener('click', (evento)=>{
        // Interrompe o envio do formulário
        evento.preventDefault();
        
        let inputNome = document.querySelector("input[name='name']");
        let inputEmail = document.querySelector("input[name='email']");
        let inputSobrenome = document.querySelector("input[name='surname']");
        let inputNomeUsuario = document.querySelector("input[name='username']")
        let inputSenha = document.querySelector("input[name='password']")

        let listaErros = document.querySelector('.erros ul');
        let erros = [];

        // zera o conteúdo da lista no html
        listaErros.innerHTML = "";
        // console.log(inputNome.value);

        // VALIDA EMAIL
        if(inputEmail.value == ""){
            erros.push('Campo Email está vazio');
        } else {
                if(inputEmail.value.length < 10){
                    erros.push("Numero mínimo de caracteres no campo Email é 10");
                } else if (inputEmail.value.length > 180){
                    erros.push("Numero máximo de caracteres no campo Email (180) foi excedido");
                }
                if(inputEmail.value.indexOf('.') < 0 || inputEmail.value.indexOf('@') < 0){
                    erros.push("Email inválido");
                }
            }

        

        //VALIDA NOME
        if(inputNome.value == ""){
            erros.push('Campo Nome está vazio');
        } else {
            if(inputNome.value.length < 2){
                erros.push("Numero mínimo de caracteres no campo nome é 2");
            } else if (inputNome.value.length > 80){
                erros.push("Numero máximo de caracteres no campo nome (80) foi excedido");
            }
        }
        
        // VALIDA SOBRENOME
        if(inputSobrenome.value == ""){
            erros.push('Campo Sobrenome está vazio');
        } else {
            if(inputSobrenome.value.length < 2){
                erros.push("Numero mínimo de caracteres no campo sobrenome é 2");
            } else if (inputSobrenome.value.length > 100){
                erros.push("Numero máximo de caracteres no campo sobrenome (100) foi excedido");
            }
        }

        // VALIDA NOME DE USUARIO
        if(inputNomeUsuario.value == ""){
            erros.push('Campo Nome do Usuário está vazio');
        } else {
            if(inputNomeUsuario.value.length < 10){
                erros.push("Numero mínimo de caracteres no campo Nome do Usuario é 10");
            } else if (inputNomeUsuario.value.length > 15){
                erros.push("Numero máximo de caracteres no campo Nome do Usuario (15) foi excedido");
            }
        }
        
        // VALIDA SENHA
        if(inputSenha.value == ""){
            erros.push('Campo Senha de usuário está vazio');
        } else {
            if(inputSenha.value.length < 8){
                erros.push("Numero mínimo de caracteres no campo Senha é 8");
            } else if (inputSenha.value.length > 100){
                erros.push("Numero máximo de caracteres no campo Senha (100) foi excedido");
            }
        }

        // VALIDA DATA DE NASCIMENTO
        let dataAtual = new Date();
        if(dataNascimento.value == ""){
            erros.push('Campo Data de Nascimento está vazio');
        } else {
            if(dataAtual.getFullYear() - dataNascimento.value.slice(0,4) > 120 || dataAtual.getFullYear() - dataNascimento.value.slice(0,4) < 16){
                erros.push("Data inválida para cadastro");
            };
            console.log(dataAtual.getFullYear() - dataNascimento.value.slice(0,4))
        }


        for (const erro of erros) {
            listaErros.innerHTML += `<li>${erro}</li>`;
        }
    
    });

});