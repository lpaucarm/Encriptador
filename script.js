const textArea = document.querySelector(".text-area");
const textAreaMensaje = document.querySelector(".text-area-mensaje");

/*Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también
devolver una palabra encriptada para su versión original*/



function encriptar (stringEncriptada){
    let matrizCodigo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();


    for(i=0;i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnEncriptar(){

    if(textoValido(textArea.value)){
        const textoEncriptado = encriptar(textArea.value);
        textAreaMensaje.value = textoEncriptado;
        textArea.value = "";
        textAreaMensaje.style.backgroundImage = "none";
    }else{
        textArea.value="";
        alert('Texto no válido');
    }

    
    return;
}

function desencriptar (stringDesencriptada){
    let matrizCodigo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();


    for(i=0;i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnDesencriptar(){
    
    const textoDesencriptado = desencriptar(textArea.value);
   
    textAreaMensaje.value = textoDesencriptado;
    textArea.value = "";
    return;
}

function btnCopiar() {

    const textoACopiar = textAreaMensaje.value;

    if(textoACopiar !=""){
        navigator.clipboard.writeText(textoACopiar)
        //alert('Texto copiado!');
        textAreaMensaje.value="";
    }else{alert('No hay texto encriptado a copiar!');}
    
    return;
}

function textoValido(texto) {
    // Expresión regular para permitir solo letras minúsculas sin acentos
    const regex = /^[a-z ]+$/;
    //console.log(regex.test(texto));
    // Retorna true si el texto es válido, false si no lo es
    return regex.test(texto);
    
}


