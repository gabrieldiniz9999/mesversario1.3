// === CARROSSEL COM BOTÕES, ARRASTE E BOLINHAS ===
let slideIndex = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;
const dotsContainer = document.getElementById("dots");

// Cria bolinhas
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
}
const dots = document.querySelectorAll(".dot");

function atualizarCarrossel() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");
}

function avancar() {
  slideIndex = (slideIndex + 1) % totalSlides;
  atualizarCarrossel();
}

function voltar() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  atualizarCarrossel();
}

setInterval(avancar, 5000); // Avança automaticamente a cada 5s

// Arrastar com mouse
let isDragging = false;
let startX = 0;

slides.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
});

slides.addEventListener("mouseup", (e) => {
  if (!isDragging) return;
  const endX = e.pageX;
  handleSwipe(endX - startX);
  isDragging = false;
});

slides.addEventListener("mouseleave", () => {
  isDragging = false;
});

slides.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
});

// Arrastar com dedo
slides.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  handleSwipe(endX - startX);
});

function handleSwipe(deltaX) {
  if (deltaX > 50) {
    voltar();
  } else if (deltaX < -50) {
    avancar();
  }
}

// Clicar nas bolinhas
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    atualizarCarrossel();
  });
});


// Rotação automática a cada 5 segundos
setInterval(avancar, 5000);

// Player de música
function togglePlay() {
  const audio = document.getElementById("audio");
  const playBtn = document.querySelector(".play-btn");

  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
}

// Contador
const dataInicio = new Date('2024-05-18T21:08:00');

function atualizarContador() {
  const agora = new Date();
  let diff = agora - dataInicio;

  let segundos = Math.floor(diff / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  const dataAtual = new Date();
  let anos = dataAtual.getFullYear() - dataInicio.getFullYear();
  let meses = dataAtual.getMonth() - dataInicio.getMonth();
  let diasMes = dataAtual.getDate() - dataInicio.getDate();

  if (diasMes < 0) {
    meses -= 1;
    diasMes += new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
  }

  if (meses < 0) {
    anos -= 1;
    meses += 12;
  }

  const texto = `${anos} ano, ${meses} meses, ${diasMes} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;

  document.getElementById('contador').textContent = texto;
}

atualizarContador();
setInterval(atualizarContador, 1000);

// Chuva de Emojis
const coracoesContainer = document.getElementById('coracoes');
const emojis = ["💙"];

function criarEmoji() {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = (Math.random() * 3 + 5) + "s";
  emoji.style.fontSize = (16 + Math.random() * 24) + "px";
  emoji.style.opacity = Math.random();

  coracoesContainer.appendChild(emoji);

  setTimeout(() => emoji.remove(), 8000);
}

setInterval(criarEmoji, 300);

const texto = "Cê se elogiou??, falou o quanto bonita, maravilhosa, incrível, extraordinária océ é, cê viu cada detalhes seu, e viu o quanto maravilhosa océ e, com cada curvinhas, com esse rostinho maravilhoso, tão perfeitinho, esses olhinhos que parecem o espaço de tão estrelados, esse sorriso que ilumina muito, esse rostinho perfeito 😻😻😻😻❤️❤️❤️. Esse corpinho de violão tão maravilhoso e muito perfeito ❤️❤️😻😻";
let i = 0;

function digitarTexto() {
  if (i < texto.length) {
    document.getElementById("mensagem").textContent += texto.charAt(i);
    i++;
    setTimeout(digitarTexto, 40);
  }
}

setTimeout(digitarTexto, 1000); // começa depois de 2s

