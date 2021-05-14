var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
var newText = "";

function getTextEncrypted() {
    var textToChange = document.getElementById("msnToEncrypt").value;
    for (i = 0; i < textToChange.length; i++) {
        if (textToChange[i] === " ") {
            newText = newText + " ";
        } else if (textToChange[i] === "ñ") {
            newText = newText + "ñ";
        }else {
            newText = newText + encryptedAlphabet[plainAlphabet.indexOf(textToChange[i])];
           // El siguiente código es sin usar la opción de indexOf.
            // for (s = 0; s < plainAlphabet.length; s++) {
            //     if (textToChange[i] === plainAlphabet[s]) {
            //         newText = newText + encryptedAlphabet[s];
            //         break;
            //     }
            // }
        }
    }
    return document.getElementById("msnToDecrypt").value = newText;
}

function getTextDecrypted() {
    var textToChange = document.getElementById("msnToDecrypt").value;
    for (i = 0; i < textToChange.length; i++) {
        if (textToChange[i] === " ") {
            newText = newText + " ";
        } else if (textToChange[i] === "ñ") {
            newText = newText + "ñ";
        }else {
            newText = newText + plainAlphabet[encryptedAlphabet.indexOf(textToChange[i])];
            // El siguiente código es sin usar la opción de indexOf.
            // for (s = 0; s < encryptedAlphabet.length; s++) {
            //     if (textToChange[i] === encryptedAlphabet[s]) {
            //         newText = newText + plainAlphabet[s];
            //         break;
            //     }
            // }
        }
    }
    return document.getElementById("msnToEncrypt").value = newText;
}
document.getElementById("encrypt").addEventListener("click", getTextEncrypted);
document.getElementById("decrypt").addEventListener("click", getTextDecrypted);