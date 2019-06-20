const pagCipher= () => {
    let aparecerCipher = document.getElementById ("cifrar");
    aparecerCipher.style.display = "block";
    return aparecerCipher;
}

const lass1 = document.getElementById ("lass1");
lass1.addEventListener ("click", pagCipher);

const pagDCipher = () => {
    let aparecerDCipher = document.getElementById ("descifrar");
    aparecerDCipher.style.display= "block";
    return aparecerDCipher
}

const lass2 = document.getElementById ("lass2");
lass2.addEventListener ("click", pagDCipher);

const showInfo = () => {
    let apareceInfo = document.getElementById ("instrucciones");
    apareceInfo.style.display = "block";
    return apareceInfo;
}

const info = document.getElementById ("Info");
info.addEventListener ("click", showInfo);

const closeInfo= () => {
    let cierraInfo = document.getElementById ("instrucciones");
    cierraInfo.style.display = "none";
    return cierraInfo;
}

const cerrarVen = document.getElementById ("cerrar");
cerrarVen.addEventListener ("click", closeInfo);

const returnHome = () => {
    location.reload ('pag1');
}

const returnPag = document.getElementById ("regini");
returnPag.addEventListener ("click", returnHome);

const returnPagTwo = document.getElementById ("reginiTwo");
returnPagTwo.addEventListener ("click", returnHome);

const ingresarTexto = document.getElementById("inputText");
const offset = document.getElementById("nomber");
const btnCifrar = document.getElementById("ocult");
const desciTexto = document.getElementById("inputDes")

btnCifrar.addEventListener ("click", () => {
    desciTexto.value = window.cipher.encode (parseInt(offset.value), ingresarTexto.value)
})

const ingresarTexto2 = document.getElementById("visible");
const offset2 = document.getElementById("nomber2");
const btnCifrar2 = document.getElementById("discover");
const desciTexto2 = document.getElementById("inputM")

btnCifrar2.addEventListener ("click", () => {
    desciTexto2.value = window.cipher.decode (parseInt(offset2.value), ingresarTexto2.value)
})