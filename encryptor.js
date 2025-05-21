const outputContent = document.getElementById("encrypted-blog-content");
const key = document.getElementById("encryption-key-input");
const inputContent = document.getElementById("blog-content-input");

function encrypt() {
  outputContent.innerHTML = inputContent.value;
  if (!key.value || !inputContent.value) return;
  
  let charCodes = [];
  for (let i = 0; i < inputContent.value.length; i++) {
    charCodes.push(inputContent.value.charCodeAt(i) - key.value.charCodeAt(i % key.value.length));
  }
  const cipherText = String.fromCharCode(...charCodes);
  console.log(cipherText);
  outputContent.innerHTML = btoa(cipherText);
  console.log(btoa(cipherText));
}
