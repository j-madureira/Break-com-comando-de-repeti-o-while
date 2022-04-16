var nomeUsuario;
if(nomeUsuario = prompt(`Digite um nome de usuário:`)){
    alert(`Tudo certo!`);
}
else{
    while(nomeUsuario == ""){
    alert(`Você ainda não inseriu seu nome de usuário`);
    if(nomeUsuario = prompt(`Digite seu nome de usuário:`)){
    alert(`Tudo certo!`)
    break; 
}
}
}

var senhaUsuario;
if(senhaUsuario = prompt(`Digite sua senha:`)){
    alert(`Tudo certo`);
}
else{
    while(senhaUsuario == ""){
    alert(`Você ainda não informou sua senha!`);
    if(senhaUsuario = prompt(`Digite sua senha:`)){
    alert(`Tudo certo!`);
    break;
}
}
}