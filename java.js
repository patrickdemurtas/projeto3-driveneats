let pratoprincipal;
let bebida;
let sobremesa;
let precoprato;
let precobebida;
let precosobremesa;


let elemento = document.querySelector(".botaopedido");



function frango(){
    document.getElementById("frango").style.borderColor = "green";
    document.getElementById("pizza").style.borderColor = "white";
    document.getElementById("sushi").style.borderColor = "white";
    pratoprincipal = "Frango Yin Yang";
    precoprato = 14.90;
    precoprato = precoprato.toFixed(2);
    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";
}
}

function pizza(){
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("pizza").style.borderColor = "green";
    document.getElementById("sushi").style.borderColor = "white";
    pratoprincipal = "Pizza";
    precoprato = 35.90;
    precoprato = precoprato.toFixed(2);
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
    precoprato = 39.90;
    precoprato = precoprato.toFixed(2);
    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";
}
}

function coca(){
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("guarana").style.borderColor = "white";
    document.getElementById("icetea").style.borderColor = "white";
    bebida = "Coquinha gelada";
    precobebida = 7.90;
    precobebida = precobebida.toFixed(2);

    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";
}
}

function guarana(){
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "green";
    document.getElementById("icetea").style.borderColor = "white";
    bebida = "Guaraná gelado";
    precobebida = 6.90;
    precobebida = precobebida.toFixed(2);

    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";
}
}

function icetea(){
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "white";
    document.getElementById("icetea").style.borderColor = "green";
    bebida = "Ice Tea";
    precobebida = 10.90;
    precobebida = precobebida.toFixed(2);
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
    precosobremesa = 26.90;
    precosobremesa = precosobremesa.toFixed(2);
    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";
}
}


function pave(){
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("pave").style.borderColor = "green";
    document.getElementById("mousse").style.borderColor = "white";
    sobremesa = "Pavê";
    precosobremesa = 21.90;
    precosobremesa = precosobremesa.toFixed(2);

    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";
}
}


function mousse(){
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("pave").style.borderColor = "white";
    document.getElementById("mousse").style.borderColor = "green";
    sobremesa = "Mousse";
    precosobremesa = 23.90;
    precosobremesa = precosobremesa.toFixed(2);
    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        elemento.classList.add("selecionado");
        document.getElementById("finalizarpedido").innerHTML = "Fechar pedido";

}
}


function finaliza(){
    if ((pratoprincipal==="Frango Yin Yang"||pratoprincipal==="Pizza"||pratoprincipal==="Combinado")&&(bebida==="Coquinha gelada"||bebida==="Guaraná gelado"||bebida==="Ice Tea")&&(sobremesa==="Pudim"||sobremesa==="Pavê"||sobremesa==="Mousse")){
        
        precoprato=Number(precoprato);
        precoprato=Number(precoprato.toFixed(2));
        precobebida=Number(precobebida);
        precobebida=Number(precobebida.toFixed(2));
        precosobremesa=Number(precosobremesa);
        precosobremesa=Number(precosobremesa.toFixed(2));

        let precototal = Number(precoprato+precobebida+precosobremesa)
        precototal = precototal.toFixed(2);


       
        let texto = "Olá, gostaria de fazer o pedido: \n- Prato: "+pratoprincipal+" \n- Bebida: "+bebida+" \n- Sobremesa: "+sobremesa+" \nTotal: R$ "+precototal                            
        
        texto = window.encodeURIComponent(texto)
        
        
        window.open("https://wa.me/5522998034064?text="+texto);
}
}


