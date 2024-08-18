console.log("WELCOME ON AHAD QUIZ APP");
import inquirer from 'inquirer';
const questions = [
    {
        question: "What is the capital of France?",
        options: ["A: Berlin", "B: Madrid", "C: Paris", "D: Rome"],
        answer: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A: Earth", "B: Mars", "C: Jupiter", "D: Venus"],
        answer: "B"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["A: Charles Dickens", "B: J.K. Rowling", "C: Leo Tolstoy", "D: William Shakespeare"],
        answer: "D"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["A: Oxygen", "B: Gold", "C: Silver", "D: Helium"],
        answer: "A"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["A: Atlantic Ocean", "B: Indian Ocean", "C: Arctic Ocean", "D: Pacific Ocean"],
        answer: "D"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["A: China", "B: Japan", "C: South Korea", "D: Thailand"],
        answer: "B"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["A: Vincent van Gogh", "B: Pablo Picasso", "C: Leonardo da Vinci", "D: Claude Monet"],
        answer: "C"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["A: Gold", "B: Diamond", "C: Iron", "D: Platinum"],
        answer: "B"
    },
    {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["A: Germany", "B: Argentina", "C: Brazil", "D: France"],
        answer: "D"
    },
    {
        question: "What is the smallest prime number?",
        options: ["A: 0", "B: 1", "C: 2", "D: 3"],
        answer: "C"
    }
];
let score = 0;
let currentQuestion = 0;
const askQuestion = () => {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        inquirer.prompt([
            {
                type: 'list',
                name: 'userAnswer',
                message: q.question,
                choices: q.options
            }
        ]).then((answers) => {
            if (answers.userAnswer.charAt(0) === q.answer) {
                console.log("Correct!\n");
                score++;
            }
            else {
                console.log("Wrong!\n");
            }
            currentQuestion++;
            askQuestion();
        });
    }
    else {
        console.log(`Quiz Over! Your final score is ${score}/${questions.length}`);
    }
};
askQuestion();
