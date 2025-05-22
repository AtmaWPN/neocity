const outputContent = document.getElementById("encrypted-blog-content");
const key = document.getElementById("encryption-key-input");
const inputContent = document.getElementById("blog-content-input");

function encrypt() {
  outputContent.innerHTML = inputContent.value;
  if (!key.value || !inputContent.value) return;

  const regex = /\<[^\>]\>/g;
  const tags = regex.exec(inputContent.value);
  // demo code from stackoverflow
  var re = /bar/g,
  str = "foobarfoobar";
  while ((match = re.exec(str)) != null) {
      console.log("match found at " + match.index);
  }

  let charCodes = [];
  for (let i = 0; i < inputContent.value.length; i++) {
    // if character is in a tag, skip
    if (tags)

    charCodes.push(inputContent.value.charCodeAt(i) - key.value.charCodeAt(i % key.value.length));
  }
  const cipherText = String.fromCharCode(...charCodes);
  console.log(cipherText);
  outputContent.textContent = btoa(cipherText);
  console.log(btoa(cipherText));
}
