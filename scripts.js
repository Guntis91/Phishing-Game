let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let playerName = "";
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

document.getElementById("start-game-btn").addEventListener("click", startGame);
document.getElementById("reset-leaderboard-btn").addEventListener("click", resetLeaderboard);
document.getElementById("exit-game-btn").addEventListener("click", exitGame);
document.getElementById("next-btn").addEventListener("click", nextQuestion);
document.getElementById("back-to-menu").addEventListener("click", exitGame);

function startGame() {
    playerName = document.getElementById("player-name").value || "Anonymous"; 
    document.getElementById("menu-screen").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
    resetGame();
}

function resetGame() {
    score = 0;
    currentQuestionIndex = 0;
    selectedQuestions = getRandomQuestions(10);
    showQuestion();
}

function getRandomQuestions(num) {
    let shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5); // Now selects only 5 questions
}

function showQuestion() {
    let q = selectedQuestions[currentQuestionIndex];
    document.getElementById("question-text").textContent = q.question;
    document.getElementById("answers").innerHTML = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-btn").classList.add("hidden");

    q.answers.forEach((answer, index) => {
        let button = document.createElement("button");
        button.classList.add("answer-btn");
        button.textContent = answer;
        button.addEventListener("click", () => checkAnswer(button, index, q.correct, q.explanation));
        document.getElementById("answers").appendChild(button);
    });
}

function checkAnswer(button, selected, correct, explanation) {
    let buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === correct) {
            btn.classList.add("correct");
        } else {
            btn.classList.add("wrong");
        }
    });

    document.getElementById("feedback").textContent = explanation;
    document.getElementById("next-btn").classList.remove("hidden");

    if (selected === correct) {
        streak++; // Increase streak for correct answers
        score += streak * 10; // More points for consecutive correct answers
    } else {
        streak = 0; // Reset streak on wrong answer
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById("game-container").classList.add("hidden");
    document.getElementById("game-over-screen").classList.remove("hidden");

    document.getElementById("final-score").textContent = `${playerName}, your score: ${score}`;
    
    leaderboard.push({ name: playerName, score: score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);
    
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    updateLeaderboard();
}

function resetLeaderboard() {
    leaderboard = [];
    localStorage.removeItem("leaderboard");
    updateLeaderboard();
}

function exitGame() {
    document.getElementById("game-over-screen").classList.add("hidden");
    document.getElementById("game-container").classList.add("hidden");
    document.getElementById("menu-screen").classList.remove("hidden");
}

function updateLeaderboard() {
    let leaderboardList = document.getElementById("leaderboard");
    let gameOverLeaderboardList = document.getElementById("game-over-leaderboard");

    if (leaderboardList) {
        leaderboardList.innerHTML = leaderboard
            .map(entry => `<li>${entry.name}: ${entry.score} pts</li>`)
            .join("");
    }

    if (gameOverLeaderboardList) {
        gameOverLeaderboardList.innerHTML = leaderboard
            .map(entry => `<li>${entry.name}: ${entry.score} pts</li>`)
            .join("");
    }
}

updateLeaderboard();
