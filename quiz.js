const questions = [
  {
    question: "What kind of tasks do you enjoy the most?",
    options: ["Solving technical problems", "Helping people", "Designing visuals", "Analyzing data"]
  },
  {
    question: "Which subject did you enjoy in school?",
    options: ["Math/CS", "Biology", "Art", "Economics"]
  },
  {
    question: "How do you prefer working?",
    options: ["Independently", "With people", "On creative projects", "With spreadsheets"]
  },
];

let current = 0;
let userAnswers = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  nextBtn.disabled = true;

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      userAnswers[current] = opt;
      nextBtn.disabled = false;
    });
    optionsEl.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("quizAnswers", JSON.stringify(userAnswers));
    window.location.href = "dashboard.html";
  }
});

loadQuestion();
