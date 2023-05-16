//#region input and output
// let encryptedText = 'fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!'
// let decryptedText = 'felicidades por enfrentar este desafio y haberlo concluido con exito!';
//#endregion
let encryptKeys = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
};

let encryptText = (text) => {
    let encryptedText = text;
    for (key in encryptKeys) {
        encryptedText = encryptedText.split(key).join(encryptKeys[key]);
    }
    return encryptedText;
};

let decryptText = (text) => {
    let decryptedText = text;
    for (key in encryptKeys) {
        decryptedText = decryptedText.split(encryptKeys[key]).join(key);
    }
    return decryptedText;
};

//---------------------------------------------------------------------

let encryptButton = document.querySelector("#encrypt");
let decryptButton = document.querySelector("#decrypt");
let inputText = document.querySelector("#input-text");

let encryptHandler = () => {
    decryptButton.classList.remove("active");
    encryptButton.classList.add("active");
    setOutput(encryptText(inputText.value));
};

let decryptHandler = () => {
    decryptButton.classList.add("active");
    encryptButton.classList.remove("active");
    setOutput(decryptText(inputText.value));
};

let setOutput = (text) => {
    document.querySelector(".output-section").innerHTML = `
    <textarea name="Text1" cols="40" rows="5"  disabled id="output-text">${text}
    </textarea>
    <button id="btn-copy" onclick="copyOutput()">Copiar</button>
    `;
};

let copyOutput = () => {
    let btnCopyRef = document.querySelector('#btn-copy');
    btnCopyRef.classList.add('active');
    btnCopyRef.textContent = 'Texto copiado!';
    btnCopyRef.setAttribute('disabled','true')
    setTimeout(()=>{
        btnCopyRef.classList.remove('active');
        btnCopyRef.textContent = 'Copiar';
        btnCopyRef.removeAttribute('disabled')
    },2000)
    navigator.clipboard.writeText(document.querySelector("#output-text").value);
};
