const questions = [
  {
    question:
      "Qual é uma tecnologia comum de comunicação em redes de computadores que utiliza sinais elétricos para transmitir dados?",
    options: ["a) Bluetooth", "b) Ethernet", "c) 4G", "d) GPS"],
    correctAnswer: "b) Ethernet",
  },
];

questions.push({
  question: "O que caracteriza uma rede social online?",
  options: [
    "a) Ligações metálicas entre usuários",
    "b) Distribuição de energia virtual",
    "c) Conexões interpessoais online",
    "d) Ligações covalentes de dados",
  ],
  correctAnswer: "c) Conexões interpessoais online",
});

questions.push({
  question: "Quais são os tipos principais de ligações químicas?",
  options: [
    "a) Ligações Bluetooth, Wi-Fi e 4G",
    "b) Ligações metálicas, iônicas e covalentes",
    "c) Ligações orgânicas, inorgânicas e metálicas",
    "d) Ligações LAN, MAN e WAN",
  ],
  correctAnswer: "b) Ligações metálicas, iônicas e covalentes",
});

questions.push({
  question: "Em que consiste uma rede biológica?",
  options: [
    "a) Distribuição de energia em organismos",
    "b) Ligações químicas em células animais",
    "c) Conexões neurais em um cérebro",
    "d) Ligações sociais entre espécies",
  ],
  correctAnswer: "c) Conexões neurais em um cérebro",
});

questions.push({
  question: "Quais são as topologias comuns em redes de computadores?",
  options: [
    "a) Topologia orgânica, topologia inorgânica, topologia digital",
    "b) Topologia de estrela, topologia de anel, topologia de malha",
    "c) Topologia urbana, topologia rural, topologia metropolitana",
    "d) Topologia LAN, topologia WAN, topologia MAN",
  ],
  correctAnswer:
    "b) Topologia de estrela, topologia de anel, topologia de malha",
});

questions.push({
  question:
    "Em qual área a importância das ligações sociais na saúde mental é destacada?",
  options: [
    "a) Engenharia elétrica",
    "b) Medicina",
    "c) Agricultura",
    "d) Física quântica",
  ],
  correctAnswer: "b) Medicina",
});

questions.push({
  question:
    "O que é fundamental para garantir a segurança em redes de computadores?",
  options: [
    "a) Ligações químicas",
    "b) Criptografia e proteção de dados",
    "c) Ligações metálicas",
    "d) Distribuição de energia",
  ],
  correctAnswer: "b) Criptografia e proteção de dados",
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
