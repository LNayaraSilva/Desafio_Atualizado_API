const dogImage = document.getElementById("dogImage");
const statusText = document.getElementById("status");
const generateBtn = document.getElementById("generateBtn");
const installBtn = document.getElementById("installBtn");
const iosTip = document.getElementById("iosTip");

let deferredPrompt = null;

async function buscarCachorro() {
  try {
    statusText.textContent = "Carregando cachorro...";
    generateBtn.disabled = true;

    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    if (!response.ok) {
      throw new Error("Não foi possível buscar a imagem.");
    }

    const data = await response.json();

    dogImage.src = data.message;
    dogImage.alt = "Imagem aleatória de cachorro";
    statusText.textContent = "Cachorro carregado com sucesso.";

    if ("vibrate" in navigator) {
      navigator.vibrate(120);
    }
  } catch (error) {
    statusText.textContent = "Erro ao carregar cachorro. Verifique sua conexão.";
    console.error("Erro:", error);
  } finally {
    generateBtn.disabled = false;
  }
}

generateBtn.addEventListener("click", buscarCachorro);

window.addEventListener("load", () => {
  buscarCachorro();

  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isIOS) {
    iosTip.classList.remove("hidden");
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => {
        console.log("Service Worker registrado com sucesso.");
      })
      .catch((error) => {
        console.error("Erro ao registrar o Service Worker:", error);
      });
  }
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installBtn.classList.remove("hidden");
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  await deferredPrompt.userChoice;

  deferredPrompt = null;
  installBtn.classList.add("hidden");
});