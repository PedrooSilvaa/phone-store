function closeBoxTxt(){
    document.getElementById("caixa-texto").style.display = "none";
}

function iphoneBlack(){
    img = document.getElementById('imagem-box');

    img.src = "src/images/png/iphone-15-preto.png"
    document.getElementById('titulo-iphone').innerText = "IPHONE 15 PRETO";
    document.getElementById("caixa-texto").style.display = "flex";

}

function iphoneBlue(){
    img = document.getElementById('imagem-box');

    img.src = "src/images/png/iphone-15-azul.png"
    document.getElementById('titulo-iphone').innerText = "IPHONE 15 AZUL";
    document.getElementById("caixa-texto").style.display = "flex";

}

function iphoneWhite(){
    img = document.getElementById('imagem-box');

    img.src = "src/images/png/iphone-15-branco.png"
    document.getElementById('titulo-iphone').innerText = "IPHONE 15 BRANCO";
    document.getElementById("caixa-texto").style.display = "flex";

}