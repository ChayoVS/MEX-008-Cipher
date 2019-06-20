window.cipher = {
  encode: (offset, str) => {
    let codeCifrado = 0;
    let textCifrado = '';
    for (let i = 0; i < str.length; i++){
    const ascii = str.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90){
      codeCifrado = (ascii - 65 + offset) % 26 + 65;
    } else if (ascii >= 97 && ascii <= 122){
      codeCifrado = (ascii -97 + offset) % 26 +97;
    } else {
      codeCifrado = ascii;
    }
    textCifrado += String.fromCharCode(codeCifrado);
  }
  return textCifrado;
  }, 
   decode: (offset2, str) => {
     let codeDescifrado = 0;
     let textDescifrado = '';
     for (let i = 0; i < str.length; i++) {
       const ascii = str.charCodeAt(i);
     if (ascii >= 65 && ascii <= 90) {
       codeDescifrado = (ascii -90 -offset2)% 26 +90;
     } else if (ascii >= 97 && ascii <= 122){
       codeDescifrado = (ascii -122 -offset2) % 26 +122;
     }else {
       codeDescifrado = ascii;
     }
     textDescifrado += String.fromCharCode(codeDescifrado);
     }
     return textDescifrado;
   }
};
