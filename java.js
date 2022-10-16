let pratoprincipal;
let bebida;
let sobremesa;



function frango(){
    document.getElementById("frango").style.borderColor = "green";
    document.getElementById("pizza").style.borderColor = "white";
    document.getElementById("sushi").style.borderColor = "white";
    pratoprincipal = "Frango Yin Yang"
}

function pizza(){
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("pizza").style.borderColor = "green";
    document.getElementById("sushi").style.borderColor = "white";
    pratoprincipal = "Pizza"
}

function sushi(){
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("pizza").style.borderColor = "white";
    document.getElementById("sushi").style.borderColor = "green";
    pratoprincipal = "Combinado"
}

function coca(){
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("guarana").style.borderColor = "white";
    document.getElementById("icetea").style.borderColor = "white";
    bebida = "Coquinha gelada"
}

function guarana(){
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "green";
    document.getElementById("icetea").style.borderColor = "white";
    bebida = "Guaraná gelado"
}

function icetea(){
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "white";
    document.getElementById("icetea").style.borderColor = "green";
    bebida = "Ice Tea"
}

function pudim(){
    document.getElementById("pudim").style.borderColor = "green";
    document.getElementById("pave").style.borderColor = "white";
    document.getElementById("mousse").style.borderColor = "white";
    sobremesa = "Pudim"
}

function pave(){
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("pave").style.borderColor = "green";
    document.getElementById("mousse").style.borderColor = "white";
    sobremesa = "Pavê"
}

function mousse(){
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("pave").style.borderColor = "white";
    document.getElementById("mousse").style.borderColor = "green";
    sobremesa = "Mousse"
}


let elemento = document.querySelector(".botaopedido");


elemento.classList.add("selecionado");
document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";


function finaliza(){
if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
   alert('deu certo');
}

}