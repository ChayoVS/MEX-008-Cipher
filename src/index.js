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