const questions = [
  {
    question: "Qual dos seguintes não é um tipo de rede de computadores?",
    options: ["LAN", "WAN", "VPM", "USB"],
    correctAnswer: "USB",
  },
];

questions.push({
  question: "Qual é o principal objetivo de uma rede LAN?",
  options: [
    " Conectar computadores em uma cidade inteira",
    " Conectar computadores em uma área geográfica limitada",
    "  Conectar computadores em diferentes países",
    "  Conectar computadores em todo o mundo",
  ],
  correctAnswer: " Conectar computadores em uma área geográfica limitada",
});

questions.push({
  question: "O que significa WAN?",
  options: [
    " Wide Area Network",
    " Wireless Area Network",
    " Wired Area Network",
    " Worldwide Area Network",
  ],
  correctAnswer: ":  Wide Area Network",
});

questions.push({
  question: "Qual é a principal diferença entre uma rede LAN e uma WAN?",
  options: [
    " O tipo de cabos utilizados",
    "  A velocidade de conexão",
    " A área geográfica coberta",
    "  O número de dispositivos conectados",
  ],
  correctAnswer: "  A área geográfica coberta",
});

questions.push({
  question:
    "Qual das seguintes não é uma tecnologia de ligação de redes sem fio?",
  options: [" Wi-Fi ", " Bluetooth", "  Ethernet", " NFC"],
  correctAnswer: " Ethernet",
});

questions.push({
  question: "O que é uma VPN?",
  options: [
    "  Virtual Private Network",
    "  Very Personal Network",
    "  Visual Private Network",
    " Virtual Public Network",
  ],
  correctAnswer: "Virtual Private Network",
});
questions.push({
  question:
    "Qual é a principal vantagem de uma conexão de fibra óptica em comparação com uma conexão de cabo de cobre?",
  options: [
    " Maior velocidade de transmissão ",

    "  Menor custo de instalação ",
    "  Maior resistência a interferências eletromagnéticas ",
    "  Menor largura de banda ",
  ],
  correctAnswer: "  Maior resistência a interferências eletromagnéticas",
});

let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startGame() {
  shuffledQuestions = [...questions];
  shuffleArray(shuffledQuestions);

  currentQuestion = 0;
  score = 0;

  displayQuestion();
}

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");

  questionElement.textContent = shuffledQuestions[currentQuestion].question;

  const shuffledOptions = [...shuffledQuestions[currentQuestion].options];
  shuffleArray(shuffledOptions);

  optionsContainer.innerHTML = "";
  shuffledOptions.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option;
    button.onclick = function () {
      checkAnswer(this);
    };
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const feedbackElement = document.getElementById("feedback");

  if (
    selectedOption.textContent ===
    shuffledQuestions[currentQuestion].correctAnswer
  ) {
    feedbackElement.textContent = "Resposta correta!";
    selectedOption.style.backgroundColor = "#4CAF50"; // Cor verde
    score++;
  } else {
    feedbackElement.textContent = "Resposta errada!";
    selectedOption.style.backgroundColor = "#FF5733"; // Cor vermelha
  }

  setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
  const feedbackElement = document.getElementById("feedback");
  feedbackElement.textContent = "";

  document.querySelectorAll(".option").forEach((option) => {
    option.style.backgroundColor = "";
  });

  if (currentQuestion < shuffledQuestions.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2>Pontuação Final: ${score} de ${shuffledQuestions.length}</h2>`;

    const tryAgainButton = document.getElementById("try-again-button");
    tryAgainButton.style.display = "block";
  }
}

startGame();
