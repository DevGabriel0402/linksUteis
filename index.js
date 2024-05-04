const btnPlay = document.getElementById("btn-play");
const btnPause = document.getElementById("btn-pause");
const music = document.getElementById("music");

// Função de Carregamento de Tela

window.addEventListener("load", function () {
  const github = document.querySelector(".github");
  const instagram = document.querySelector(".instagram");
  const twitter = document.querySelector(".twitter");
  const linkedin = document.querySelector(".linkedin");
  const spotify = document.querySelector(".spotify");
  const cards = document.querySelector(".cards");

  if (this.window.innerWidth < 1440) {
    spotify.classList.add("enterUp-1");
    github.classList.add("enterUp-2");
    instagram.classList.add("enterUp-3");
    linkedin.classList.add("enterUp-4");
    twitter.classList.add("enterUp-5");
  } else {
    github.classList.add("enterUp-1");
    instagram.classList.add("enterUp-2");
    linkedin.classList.add("enterUp-3");
    twitter.classList.add("enterUp-4");
    spotify.classList.add("enterUp-5");
    cards.classList.add("enterUp-3");
  }
});

// Função do Play

btnPlay.addEventListener("click", function () {
  music.play();
  btnPause.classList.remove("hidden");
  btnPlay.classList.add("hidden");
  document.getElementById("logo-spotify").style.animation = "boxShadowAnimate 1.5s linear infinite";
  document.querySelector(".disc-icon").style.animation = "rotation 3s infinite linear";

  if (window.innerWidth > 1440) {
    document.getElementById("disc-icon-thumb").style.animation = "toUp .5s forwards";
    document.getElementById("div-disc").style.animation = "toDown 1.5s forwards";
  } else {
    document.getElementById("disc-icon-thumb").style.animation = "toRight 0.5s forwards";
    document.getElementById("div-disc").style.animation = "toLeft 1.5s forwards";
  }
});

// Função do Pause

btnPause.addEventListener("click", function () {
  music.pause();
  btnPause.classList.add("hidden");
  btnPlay.classList.remove("hidden");
  document.querySelector(".disc-icon").style.animation = "";
  document.getElementById("logo-spotify").style.animation = "";

  if (window.innerWidth > 1440) {
    document.getElementById("disc-icon-thumb").style.animation = "toDownDisc .5s forwards";
    document.getElementById("div-disc").style.animation = "toDownReverse 1.5s forwards";
  } else {
    document.getElementById("disc-icon-thumb").style.animation = "toRightReverse .5s forwards";
    document.getElementById("div-disc").style.animation = "toLeftReverse 1.5s forwards";
  }
});

// Função para quando a musica parar

music.addEventListener("ended", function () {
  btnPause.classList.add("hidden");
  btnPlay.classList.remove("hidden");
  document.querySelector(".disc-icon").style.animation = "";
  document.getElementById("logo-spotify").style.animation = "";

  if (window.innerWidth > 1440) {
    document.getElementById("disc-icon-thumb").style.animation = "toDownDisc .5s forwards";
    document.getElementById("div-disc").style.animation = "toDownReverse 1.5s forwards";
  } else {
    document.getElementById("disc-icon-thumb").style.animation = "toRightReverse 1.5s forwards";
    document.getElementById("div-disc").style.animation = "toLeftReverse 1.5s forwards";
  }
});

const card1 = document.querySelector(".card-1"); // Login Screen
const card2 = document.querySelector(".card-2"); // Weather Forecast
const card3 = document.querySelector(".card-3"); // Digital Menu
const card4 = document.querySelector(".card-4"); // Comment-me
const card5 = document.querySelector(".card-5"); // Preset

card1.addEventListener("click", () => {
  window.open("https://loginpage-io.netlify.app", "_blank");
});

card2.addEventListener("click", () => {
  window.open("https://previsaodotempo-io.netlify.app", "_blank");
});

card3.addEventListener("click", () => {
  window.open("https://menudigitalio.netlify.app", "_blank");
});

card4.addEventListener("click", () => {
  window.open("https://comentar-me.netlify.app", "_blank");
});

card5.addEventListener("click", () => {
  window.open("https://preset-io.netlify.app", "_blank");
});
