const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const key = document.getElementById("key");



const cppBtn = document.getElementById("cppButton");
const pyBtn = document.getElementById("pyButton");
const jsBtn = document.getElementById("jsButton");

// const languageBtn = document.getElementsByClassName("langbtn")

const cppCode = document.getElementById("cpp");
const pyCode = document.getElementById("python");
const jsCode = document.getElementById("javascript");

function vigenereKeyLength(key, msg) {
    let keyLength = key.length;
    for(let i=0;i < msg.length - keyLength ; i++) {
        key += key[i%keyLength];
    }
    return key;
}

function vigenereEncrypt(msg, key){
    let table = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    key = vigenereKeyLength(key, msg);
    for(let i=0; i < msg.length; i++) {
        let a = msg.charCodeAt(i);
        let b = key.charCodeAt(i);

        res += table[ ((a-97)+(b-97)) %26]
    }
    return res;
}

function vigenereDecrypt(cypher, key){
    let table = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    key = vigenereKeyLength(key, cypher);
    for(let i=0; i < cypher.length; i++) {
        let a = cypher.charCodeAt(i);
        let b = key.charCodeAt(i);
        let temp = a-b;
        
        if( temp < 0) {
            temp = 26 + temp;
        }
        res += (table[temp])
    }
    return res;
}


function vigenereEncryptCall(msg, keyIn) {
    msg = msg.toLowerCase();
    keyIn = keyIn.toLowerCase();

    let cyphertext = vigenereEncrypt(msg, keyIn);

    return cyphertext;
}

function vigenereDecryptCall(cypherIn, keyIn) {
    cypherIn = cypherIn.toLowerCase();
    keyIn = keyIn.toLowerCase();

    let ori = vigenereDecrypt(cypherIn, keyIn);

    return ori;
}

function encryptButtonCall() {
    outputText.value = vigenereEncryptCall(inputText.value, key.value);
}

function decryptButtonCall() {
    inputText.value =  vigenereDecryptCall(outputText.value, key.value);
}


document.querySelector("#encryptButton").addEventListener("click",encryptButtonCall)
document.querySelector("#decryptButton").addEventListener("click",decryptButtonCall)


cppBtn.addEventListener("click", ()=>{

    if(cppBtn.value === "notselected"){

        cppBtn.value = "selected";
        pyBtn.value = "notselected";
        jsBtn.value = "notselected";

        cppBtn.style.backgroundColor = "#272822";
        pyBtn.style.backgroundColor = "#131417";
        jsBtn.style.backgroundColor = "#131417";

        cppBtn.style.border = "2px solid white"
        pyBtn.style.border = "0";
        jsBtn.style.border = "0";

        cppBtn.style.borderBottom = "0";
        pyBtn.style.borderBottom = "2px solid white";
        jsBtn.style.borderBottom = "2px solid white";

        cppBtn.style.color = "white";
        pyBtn.style.color = "yellow";
        jsBtn.style.color = "yellow";
        
        cppCode.style.opacity = "1" ;
        pyCode.style.opacity = "0" ;
        jsCode.style.opacity = "0" ;
    }

})

pyBtn.addEventListener("click", ()=>{

    if(pyBtn.value === "notselected"){

        cppBtn.value = "notselected";
        pyBtn.value = "selected";
        jsBtn.value = "notselected";

        cppBtn.style.backgroundColor = "#131417";
        pyBtn.style.backgroundColor = "#272822";
        jsBtn.style.backgroundColor = "#131417";

        cppBtn.style.border = "0"
        pyBtn.style.border = "2px solid white";
        jsBtn.style.border = "0";

        cppBtn.style.borderBottom = "2px solid white";
        pyBtn.style.borderBottom = "0";
        jsBtn.style.borderBottom = "2px solid white";

        cppBtn.style.color = "yellow";
        pyBtn.style.color = "white";
        jsBtn.style.color = "yellow";
        

        cppCode.style.opacity = "0" ;
        pyCode.style.opacity = "1" ;
        jsCode.style.opacity = "0" ;
    }

})

jsBtn.addEventListener("click", ()=>{

    if(jsBtn.value === "notselected"){

        cppBtn.value = "notselected";
        pyBtn.value = "notselected";
        jsBtn.value = "selected";

        cppBtn.style.backgroundColor = "#131417";
        pyBtn.style.backgroundColor = "#131417";
        jsBtn.style.backgroundColor = "#272822";

        cppBtn.style.border = "0"
        pyBtn.style.border = "0";
        jsBtn.style.border = "2px solid white";

        cppBtn.style.borderBottom = "2px solid white";
        pyBtn.style.borderBottom = "2px solid white";
        jsBtn.style.borderBottom = "0";

        cppBtn.style.color = "yellow";
        pyBtn.style.color = "yellow";
        jsBtn.style.color = "white";

        cppCode.style.opacity = "0" ;
        pyCode.style.opacity = "0" ;
        jsCode.style.opacity = "1" ;
    }

})










