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

// Rotação automática a cada 5 segundos (AGORA SÓ UMA VEZ)
setInterval(avancar, 5000);

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

const texto = "Amor, hoje estamos completando 1.3 que nós nos  conhecemos. A um tempo atrás, antes de ter océ na minha vida, eu era muito triste, meu mundo não tinha cores, eu já estava desistindo do amor. Mas aí justamente naquela noite  de sábado às 21hrs que começamos a conversar, a minha vida ficou muito iluminada com o seu brilho maravilhoso, océ chegou e mudou tudo, tudo ficou maravilhoso com a sua presença🥹🥹❤️❤️. Eu sempre sonhei em ter uma mulher muito incrível, que fosse carinhosa, fiel, especial. Deus foi lá é mandou océ, e océ é muito mais do que eu sempre sonhei, océ está em uma patente muito alta, océ é tudo isso é muito mais, océ é muito carinhosa, incrível, maravilhosa, perfeita, fiel, me ama muito🥹🥹❤️❤️. Eu sou muito grato a Deus por ter colocado océ na minha vida, sem océ eu não seria nada, océ chegou e completou tudo, océ é muito incrível, eu lhe amoooooo muitão meu amorzinho 🥹🥹❤️❤️❤️, amor da minha vida todinha ❤️❤️❤️😻😻😻. Amor, sei que estamos com muitos altos e baixos, o seu pai está maltratando muito o nosso sentimento, e océ está suportando e enfrentando tudo isso pessoalmente🥺🥺🥺. Mas sei de uma coisa, ele pode me bloquear, falar pra océ parar de conversar comigo, mas ele nunca vai impedir de nós nos amar, de ficarmos juntos, se Deus quiser pra nós ficar juntos, ele vai ter que aceitar. Eu acredito muito que vamos ficar juntinhos, vamos conquistar e realizar todos os nossos sonhos juntinhos 🥹🥹❤️❤️,  é só uma questão de tempo, pra tudo melhorar ❤️❤️❤️🥺🥺. Amor, só quero que océ nunca desista de nós, eu nunca vou desisti de océ, eu vou fazer o impossível ser possível, vou até a última luta, faço tudo pra poder ficar com océ, não quero perder esse amor que nós temos 🥺🥺🥺🥺. Sei que Deus vai nos ajudar, vamos ficar juntinhos logo logo, eu tenho muita Fé ❤️❤️❤️🥹🥹. Bom amor, só quero lhe dizer que eu lhe amooooo muitão, é que esses dias desde quando nós nos conhecemos até nos dias de hj e futuramente foram incríveis e vão ser mais incríveis ainda mais. Ao seu lado tudo fica perfeito e maravilhoso 🥹🥹❤️❤️. Mesmo com as coisas que aconteceram no nosso relacionamento, mas mesmo assim nunca perdemos a fé, e nem a esperança, estamos um ao lado do outro, e sempre nos amando ❤️❤️❤️🥹🥹. Amor, muito obrigado por ser a mulher da minha vida, uma das pessoas que eu mais amo, e que é importante pra mim 🥹🥹❤️❤️. Eu lhe amoooo muitão meu amorzinho ❤️❤️🥹🥹. FELIZ MES VERSÁRIO DE 1.3 ❤️❤️❤️❤️❤️❤️❤️❤️😻😻😻😻... Obs: desculpa ter falado poucas coisas, é que o seu pai nos afastou novamente e eu estou muito triste 🥺🥺, quase não estou pensando muito bem, tenho muitas coisas pra falar, só que não quer sair 🥺🥺. Queria que océ estivesse aqui, que eu iria ligar pra océ, e falar tudo oq eu sinto, tudo mesmo. Ou queria falar tudo pessoalmente, e comemorar essa data especial juntinhos 🥹🥹🥹❤️❤️❤️. Desculpa amor, pelas palavras serem poucos e vagas 🥺🥺🥺" 

let i = 0;

function digitarTexto() {
  if (i < texto.length) {
    document.getElementById("mensagem").textContent += texto.charAt(i);
    i++;
    setTimeout(digitarTexto, 40);
  }
}

setTimeout(digitarTexto, 1000); // começa depois de 1s
