// Declarar variáveis
const inputText = document.getElementById("input-text");
const outputMessage = document.getElementById("output-message");
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const copyBtn = document.getElementById("copy-btn");
const imageContainer = document.querySelector(".image-container");
const outputDescription = document.getElementById("output-description");

// Função para validar o texto
function validateText(text) {
  return /^[a-z\s]*$/.test(text);
}

// Função de criptografia
function encryptText(text) {
  const encryptedText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return encryptedText;
}

// Função de descriptografia
function decryptText(text) {
  const decryptedText = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return decryptedText;
}

// Função para exibir o resultado e o botão de copiar
function showResult(result) {
  outputMessage.textContent = result;
  copyBtn.classList.remove("hidden");
  imageContainer.classList.add("hidden");
  outputDescription.classList.add("hidden");
}

// Função para resetar a exibição
function resetDisplay() {
  outputMessage.textContent = "Nenhuma mensagem encontrada";
  copyBtn.classList.add("hidden");
  imageContainer.classList.remove("hidden");
  outputDescription.classList.remove("hidden");
  inputText.value = ""; // Limpar o textarea
}

// Função para verificar se o textarea está vazio
function isEmpty(text) {
  return text.trim() === "";
}

// Evento para criptografar
encryptBtn.addEventListener("click", () => {
  const text = inputText.value;
  if (isEmpty(text)) {
    alert("O campo de texto está vazio. Por favor, insira um texto.");
    return;
  }
  if (validateText(text)) {
    const encryptedText = encryptText(text);
    showResult(encryptedText);
  } else {
    alert("Texto inválido. Use apenas letras minúsculas e sem acento.");
  }
});

// Evento para descriptografar
decryptBtn.addEventListener("click", () => {
  const text = inputText.value;
  if (isEmpty(text)) {
    alert("O campo de texto está vazio. Por favor, insira um texto.");
    return;
  }
  if (validateText(text)) {
    const decryptedText = decryptText(text);
    showResult(decryptedText);
  } else {
    alert("Texto inválido. Use apenas letras minúsculas e sem acento.");
  }
});

// Função para copiar o texto
copyBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(outputMessage.textContent)
    .then(() => {
      alert("Texto copiado!");
      resetDisplay();
    })
    .catch((err) => {
      console.log("Algo deu errado", err);
    });
});
