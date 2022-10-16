let pratoprincipal;
let bebida;
let sobremesa;
let elemento = document.querySelector(".botaopedido");



function frango(){
    document.getElementById("frango").style.borderColor = "green";
    document.getElementById("pizza").style.borderColor = "white";
    document.getElementById("sushi").style.borderColor = "white";
    pratoprincipal = "Frango Yin Yang"
    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";
}
}

function pizza(){
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("pizza").style.borderColor = "green";
    document.getElementById("sushi").style.borderColor = "white";
    pratoprincipal = "Pizza"
    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";
}
}

function sushi(){
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("pizza").style.borderColor = "white";
    document.getElementById("sushi").style.borderColor = "green";
    pratoprincipal = "Combinado"
    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";
}
}

function coca(){
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("guarana").style.borderColor = "white";
    document.getElementById("icetea").style.borderColor = "white";
    bebida = "Coquinha gelada"

    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";
}
}

function guarana(){
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "green";
    document.getElementById("icetea").style.borderColor = "white";
    bebida = "Guaraná gelado"

    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";
}
}

function icetea(){
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "white";
    document.getElementById("icetea").style.borderColor = "green";
    bebida = "Ice Tea"
    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";
}
}

function pudim(){
    document.getElementById("pudim").style.borderColor = "green";
    document.getElementById("pave").style.borderColor = "white";
    document.getElementById("mousse").style.borderColor = "white";
    sobremesa = "Pudim"
    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";
}
}


function pave(){
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("pave").style.borderColor = "green";
    document.getElementById("mousse").style.borderColor = "white";
    sobremesa = "Pavê"

    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";
}
}


function mousse(){
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("pave").style.borderColor = "white";
    document.getElementById("mousse").style.borderColor = "green";
    sobremesa = "Mousse"
    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";

}
}


function finaliza(){
    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        alert('deu certo');
}
}


