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


let clickRightQuestions = 0;  // Variable startet bei null
let currentQuestion = 0;    // Variable startet bei null

let audioSuccess = new Audio ('audio/success.mp3')
let audioFail = new Audio ('audio/fail.mp3') 





function init() {
    //durch diese Funktion wird die Seite mit Javascript gestartet
    document.getElementById('questionLenght').innerHTML = questions.length; 
    showQuestion();
   
}

function showQuestion() {
    //show Endscreen
    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = ''
        document.getElementById('questionBody').style = 'display: none'
        document.getElementById('showPrecent').innerHTML= `100%`,
        document.getElementById('showPrecent').style.width= `100%`;

    } else {
        // Show Question
        let precent = currentQuestion / questions.length * 100
        console.log(precent) ;
        document.getElementById('showPrecent').innerHTML= `${precent}%`
        document.getElementById('showPrecent').style.width= `${precent}%`

        console.log('die Frage und die Antworten werden aus dem Array geladen')
        let question = questions[currentQuestion];
        document.getElementById('questionText').innerHTML = `${question['question']}`
        document.getElementById('answer_1').innerHTML = `${question['answer_1']}`
        document.getElementById('answer_2').innerHTML = `${question['answer_2']}`
        document.getElementById('answer_3').innerHTML = `${question['answer_3']}`
        document.getElementById('answer_4').innerHTML = `${question['answer_4']}`
    }

}

function answer(selection) {
    let question = questions[currentQuestion];
    //die Variable "selection" gibt die ausgewählte Antwort an
    let theAnswerNumber = selection.slice(-1); //slice(-1) wird benutzt um ein das letzte Element eines Wortes oder Zahl zu ziehen, in diesem Fall also die letzte stelle von z.B. answer_3 also 3
    //die Variable "teAnswerNumber" zeigt die Nummer der ausgewählten antwort an


    let idOfRightAnswer = `answer_${question['right answer']}`

    if (theAnswerNumber == question['right answer']) {
        console.log('richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        clickRightQuestions++;
        audioSuccess.play()
    } else {
        console.log('falsche Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audioFail.play();
    }
    
    rightQuestions();
    buttenEnabled();
}

function buttenEnabled() {
    //durch diese Funktion wird der Button aktiviert
    document.getElementById('button').disabled = false;
}

function nextQuestion() {
    //Diese Funktion lässt die nächste Frage laden
    currentQuestion++; // die variable wird von 0 auf 1 erhöht.
    showQuestion();
    document.getElementById('button').disabled = true;
    for (i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-danger', 'bg-success')
        document.getElementById('questionNumber').innerHTML = `${currentQuestion + 1}`
    }
}

function rightQuestions() {
    document.getElementById('allQuestions').innerHTML = `${questions.length}`;
    document.getElementById('numberOfRightQuestions').innerHTML = clickRightQuestions;
}

function restartGame() {
    currentQuestion = 0 ;   // Variable zurücksetzen
    clickRightQuestions = 0 ;   // Variable zurücksetzen
    init()      // Funktion ausführen, um Spiel erneut zu spielen
    document.getElementById('questionBody').style = '' // QuestionScrenn wieder einblenden
    document.getElementById('endScreen').style = 'display : none' // Endscreen ausbelnden
    document.getElementById('questionNumber').innerHTML = `${currentQuestion + 1}` // Anzeige in welcher Frage wir sind, wieder zurücksetzen
}