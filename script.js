const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
const main = document.querySelector("main");


import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  var imagem = document.getElementById('imagem')
  imagem.src = "naruto.jpg"
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {

  var imagem = document.getElementById('imagem')

  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
    main.style.backgroundColor = "white"
  }

  if (currentIndex < questions.length - 1) {
    if (e.target.getAttribute("data-correct") === "true") {
      currentIndex++;
      loadQuestion();
    }
    else{
      main.style.backgroundColor = "red"
    }
   
    
  } else {
    main.style.backgroundColor = "white"
    finish();
  }

 

 
  if (spnQtd.textContent == "2/5"){
    imagem.src = "unnamed.jpg"
  }
  if (spnQtd.textContent == "3/5"){
    imagem.src = "chaves.jpeg"
  } 
  if (spnQtd.textContent == "4/5"){
    imagem.src = "rayquaza.png"
  } 
  if (spnQtd.textContent == "5/5"){
    imagem.src = "Carla.jpeg"
  }
}

function finish() {
  textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;
  
  
  

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `
    ;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();
