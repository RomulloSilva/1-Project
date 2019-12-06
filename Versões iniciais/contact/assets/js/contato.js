function validaNome(){
    var nome = formulario.nome.value;/**Aqui ele pega os valores que estão nos campos que receberam o nome = nome no formulario */
    var email = formulario.email.value;/**Aqui ele pega os valores que estão nos campos que receberam o nome = email no formulario */
    var telefone = formulario.telefone.value;/**Aqui ele pega os valores que estão nos campos que receberam o nome = telefone no formulario */
    var mensagem = formulario.mensagem.value;/**Aqui ele pega os valores que estão nos campos que receberam o nome = mensagem no formulario */
    var sobrenome = formulario.sobrenome.value;/**Aqui ele pega os valores que estão nos campos que receberam o nome = sobrenome no formulario */
    /*-----------------Aqui estão as condições que devem------------------ */
    if (nome == "") {/* Verifica se o input nome esta vazio*/
        alert('Preencha o campo com seu nome');
        formulario.nome.focus();
        console.log("A var = "+);
        return false;
        }
        if (sobrenome == "") {/* Verifica se o input sobrenome esta vazio*/
            alert('Preencha o campo com seu sobrenome');
            formulario.sobrenome.focus();
            console.log("A var = "+);
            return false;
            }
        
        if (email == "") {/* Verifica se o input email esta vazio*/
        alert('Preencha o campo com seu email');
        formulario.email.focus();
        console.log("A var = "+);
        return false;
        }
        
        if (telefone == "") {/* Verifica se o input telefone esta vazio*/
        alert('Preencha o campo com seu numero de telefone');
        formulario.telefone.focus();
        console.log("A var = "+);
        return false;
        }
        if(telefone.length < 9){/* Verifica se o input telefone tem 9 caracteres*/
            alert('Somente numeros são aceitos');
        formulario.telefone.focus();
        console.log("A var = "+);
        return false;
        }
        
        if (mensagem == "") {/* Verifica se o input mensagem esta vazio*/
        alert('Onde está sua mensagem?');
        formulario.mensagem.focus();
        console.log("A var = "+);
        return false;
        }
        if (mensagem.length < 5) {/* Verifica se o input mensagem é maior que 5*/
            alert('Mensagem muito curta');
            formulario.mensagem.focus();
            console.log("A var = "+);
            return false;
            }  
}
/*
function mostrar(box,num_max,campospan){
    var contagem_carac = box.length;
    if (contagem_carac != 0){
    document.getElementById(campospan).innerHTML = contagem_carac + " caracteres digitados";
    if (contagem_carac == 1){
    document.getElementById(campospan).innerHTML = contagem_carac + " caracter digitado";
    }
    if (contagem_carac >= num_max){
    document.getElementById(campospan).innerHTML = "Limite de caracteres excedido!";
    }
    }else{
    document.getElementById(campospan).innerHTML = "Ainda não temos nada digitado..";
    }
}
function contar(box,valor,campospan){
    var conta = valor - box.length;
    document.getElementById(campospan).innerHTML = "Você ainda pode digitar " + conta + " caracteres";
    if(box.length >= valor){
    document.getElementById(campospan).innerHTML = "Opss.. você não pode mais digitar..";
    document.getElementById("campo").value = document.getElementById("campo").value.substr(0,valor);
    } 
   }*/
1
2
3
4
5
6
7
8
9
10
11
12
13
14

 