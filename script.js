let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right answer": 3
    },
    {
        "question": "Was ist keine Gaming Marke?",
        "answer_1": "Asus ROG",
        "answer_2": "Nike",
        "answer_3": "Corsair",
        "answer_4": "Roccat",
        "right answer": 2
    },
    {
        "question": "Was ist das besondere an mechanischen Tastaturen?",
        "answer_1": "Mehr RGB",
        "answer_2": "Schönere Schrift",
        "answer_3": "Handballen Ablage",
        "answer_4": "Switches",
        "right answer": 4
    },
    {
        "question": "Was sagt die Herz Zahl an Monitoren aus?",
        "answer_1": "Mögliche Bilder pro Sekunde",
        "answer_2": "Herz - Schläge bis defekt",
        "answer_3": "Sehr netter Monitor",
        "answer_4": "Index für Spenden",
        "right answer": 1
    },
    {
        "question": "Von welchem Hersteller kommt i5 10400f?",
        "answer_1": "AMD",
        "answer_2": "Asus",
        "answer_3": "Intel",
        "answer_4": "Radeon",
        "right answer": 3
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById('questionLenght').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = `${question['question']}`
    document.getElementById('answerText1').innerHTML = `${question['answer_1']}`
    document.getElementById('answerText2').innerHTML = `${question['answer_2']}`
    document.getElementById('answerText3').innerHTML = `${question['answer_3']}`
    document.getElementById('answerText4').innerHTML = `${question['answer_4']}`
}

function answer(selection,) {
    let question = questions[currentQuestion];
    console.log('selected answer is', selection)
    let theAnswerNumber = selection.slice(-1) ; //slice(-1) wird benutzt um ein das letzte Element eines Wortes oder Zahl zu ziehen, in diesem Fall also die letzte stelle von z.B. answer_3 also 3
    console.log('the answer number is', theAnswerNumber)
    console.log('Current question is', question['right answer'])

    if(theAnswerNumber == question['right answer']) {
        console.log('richtige Antwort')
    } else {
        console.log('falsche Antwort')
    }
}