# 🐶 Cachorro Aleatório - PWA

Este projeto foi desenvolvido como parte do **Desafio de Consumo de API**, com melhorias de design, PWA e uso de hardware.

---

## 🚀 Sobre o projeto

A aplicação é uma **web app responsiva** que consome uma API pública para exibir imagens aleatórias de cachorros.

O sistema foi evoluído para um **PWA (Progressive Web App)**, permitindo instalação no dispositivo e funcionamento offline parcial.

---

## ✨ Funcionalidades

- 🐶 Exibir imagem aleatória de cachorro
- 🔄 Atualizar imagem ao clicar no botão
- 📱 Layout responsivo (mobile-first)
- 📲 Instalação como aplicativo (PWA)
- 📳 Vibração do dispositivo ao gerar nova imagem (hardware)
- 🌐 Funcionamento offline básico (cache)

---

## 🛠 Tecnologias utilizadas

- HTML5  
- CSS3  
- JavaScript  
- Service Worker  
- Manifest.json  

---

## 🔌 API utilizada

Dog API  
https://dog.ceo/dog-api/

A API fornece imagens aleatórias de cachorros em formato JSON.

---

## 📱 PWA (Progressive Web App)

O projeto foi configurado como PWA com:

- manifest.json  
- ícones personalizados  
- service worker  
- suporte à instalação  

---

## 📂 Estrutura do projeto


Desafio_Atualizado_API
│
├── index.html
├── style.css
├── script.js
├── manifest.json
├── sw.js
└── icons
    ├── icon-192.png
    └── icon-512.png

---

## 🌐 Deploy do projeto

A aplicação pode ser acessada através do link:

https://desafio-1-consumo-api-atualizado.netlify.app/

---

## 👩‍💻 Autora

Laís Nayara  
Estudante de Análise e Desenvolvimento de Sistemas

---

## 📳 Uso de hardware

Foi utilizado o recurso de **vibração do dispositivo** através da API:

```javascript
navigator.vibrate(120);


