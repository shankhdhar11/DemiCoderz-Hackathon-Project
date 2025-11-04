// Learn & Act Page Specific JavaScript

const quizzes = [
    {
        question: "What percentage of global food production is wasted annually?",
        options: ["10%", "25%", "33%", "50%"],
        correct: 2
    },
    {
        question: "Which food item is wasted the most in households?",
        options: ["Meat", "Bread", "Fruits & Vegetables", "Dairy"],
        correct: 2
    },
    {
        question: "What is the best way to store fresh herbs?",
        options: ["In the refrigerator door", "In a plastic bag in the fridge", "In water like flowers", "In the freezer"],
        correct: 2
    },
    {
        question: "How many people face hunger globally?",
        options: ["200 million", "500 million", "800 million", "1 billion"],
        correct: 2
    },
    {
        question: "What is the difference between 'best before' and 'use by' dates?",
        options: ["They mean the same thing", "'Best before' is about quality, 'use by' is about safety", "'Use by' is about quality, 'best before' is about safety", "Neither matters"],
        correct: 1
    }
];

let currentQuiz = 0;
let selectedAnswer = null;
let score = 0;

function loadQuiz() {
    if (currentQuiz >= quizzes.length) {
        document.getElementById('quizContent').innerHTML = `
            <h2 style="color: var(--primary-color); text-align: center; margin-bottom: 2rem;">Quiz Complete!</h2>
            <div style="text-align: center; font-size: 1.5rem; margin-bottom: 2rem; color: var(--text-dark);">
                You scored ${score} out of ${quizzes.length}!
            </div>
            <button class="submit-button" onclick="resetQuiz()" style="margin: 0 auto; display: block;">Take Quiz Again</button>
        `;
        return;
    }

    const quiz = quizzes[currentQuiz];
    document.getElementById('question').textContent = quiz.question;
    
    const optionsHtml = quiz.options.map((option, index) => `
        <div class="quiz-option" onclick="selectAnswer(${index})" id="option-${index}">
            ${option}
        </div>
    `).join('');
    
    document.getElementById('options').innerHTML = optionsHtml;
    document.getElementById('submitBtn').style.display = 'block';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    selectedAnswer = null;
}

function selectAnswer(index) {
    selectedAnswer = index;
    document.querySelectorAll('.quiz-option').forEach((opt, i) => {
        opt.classList.remove('selected');
        if (i === index) opt.classList.add('selected');
    });
}

function submitAnswer() {
    if (selectedAnswer === null) {
        alert('Please select an answer!');
        return;
    }

    const quiz = quizzes[currentQuiz];
    const resultDiv = document.getElementById('result');
    const isCorrect = selectedAnswer === quiz.correct;

    if (isCorrect) {
        score++;
        resultDiv.className = 'quiz-result correct';
        resultDiv.innerHTML = '✓ Correct! Well done!';
    } else {
        resultDiv.className = 'quiz-result incorrect';
        resultDiv.innerHTML = `✗ Incorrect. The correct answer is: ${quiz.options[quiz.correct]}`;
    }

    resultDiv.style.display = 'block';
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion() {
    currentQuiz++;
    loadQuiz();
}

function resetQuiz() {
    currentQuiz = 0;
    score = 0;
    loadQuiz();
}

// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        const tabId = btn.dataset.tab;
        document.getElementById(tabId).classList.add('active');
        
        if (tabId === 'quiz') {
            resetQuiz();
        }
    });
});

// Initialize quiz if on quiz tab
if (document.getElementById('quiz').classList.contains('active')) {
    loadQuiz();
}

