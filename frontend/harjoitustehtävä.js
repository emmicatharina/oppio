const questions = [
    {
        question: "Kuinka paljon on 40 % 60:sta?",
        optionA: "32",
        optionB: "24",
        optionC: "40",
        optionD: "16",
        correctOption: "optionB"
    },

    {
        question: "4X + 5 = 21",
        optionA: "X = 3",
        optionB: "X = 4",
        optionC: "X = 5",
        optionD: "X = 6",
        correctOption: "optionB"
    },

    {
        question: "0,014 kg =",
        optionA: "1,4 g",
        optionB: "14 g",
        optionC: "140 g",
        optionD: "1140 g",
        correctOption: "optionB"
    },

    {
        question: "Tuisku on koira. Kaikki koirat pitävät luista. Mikä pitää loogisesti paikkansa?",
        optionA: "Tuisku pitää luista.",
        optionB: "Tuisku saattaa pitää luista.",
        optionC: "Tuisku ei varmasti pidä luista.",
        optionD: "Ei voi päätellä mitään edellisistä.",
        correctOption: "optionA"
    },

    {
        question: "Suomessa on ainakin yksi Picasson taideteos. Kaikki Picasson taideteokset ovat erikoisia. Kenelläkään helsinkiläisellä ei ole Picasson taideteosta. Mikä pitää loogisesti paikkansa?",
        optionA: "Kenelläkään suomalaisella ei ole erikoista taideteosta.",
        optionB: "Jollakin suomalaisella on erikoinen taideteos.",
        optionC: "Kenelläkään suomalaisella ei ole Picasson taideteosta.",
        optionD: "Ei voi päätellä mitään edellisistä.",
        correctOption: "optionB"
    },

    {
        question: "Mikä on lukujonon 3, 13, 22, 30, 37, 43 seuraava luku?",
        optionA: "53",
        optionB: "46",
        optionC: "47",
        optionD: "48",
        correctOption: "optionD"
    },

    {
        question: "Viiden kissan yhteenlaskettu ikä on 45 vuotta ja ne ovat syntyneet neljän vuoden välein. Kuinka vanha on nuorin kissoista?",
        optionA: "1",
        optionB: "3",
        optionC: "5",
        optionD: "7",
        correctOption: "optionA"
    },

    {
        question: "Mikä seuraavista luvuista on jaollinen neljällä?",
        optionA: "62",
        optionB: "74",
        optionC: "84",
        optionD: "98",
        correctOption: "optionC"
    },

    {
        question: "X = 3Y. Paljonko on Y?",
        optionA: "3",
        optionB: "3X",
        optionC: "X/3",
        optionD: "(1/3)/X",
        correctOption: "optionC"
    },

    {
        question: "Kuinka monta paritonta lukua on 18 ja 88 välillä?",
        optionA: "33",
        optionB: "35",
        optionC: "37",
        optionD: "39",
        correctOption: "optionB"
    },

    {
        question: "Maapallon ympäri vedetään köysi. Köyttä halutaankin nostaa tasaisesi joka kohdasta yksi metri maanpintaa korkeammalle. Paljonko köyteen pitäisi lisätä?",
        optionA: "Noin kolme metriä",
        optionB: "Noin kuusi metriä",
        optionC: "Noin 600 metriä",
        optionD: "Noin 12 000 metriä",
        correctOption: "optionB"
    },

    {
        question: "Eräässä kokeessa bakteerien määrä tuplaantuu joka tunti. Kokeen toisen tunnin jälkeen oli kaksi bakteeria. Kuinka monta bakteeria on kuudennen tunnin alussa?",
        optionA: "16",
        optionB: "32",
        optionC: "64",
        optionD: "128",
        correctOption: "optionB"
    },


    {
        question: "Kuinka monta nollaa miljardissa on?",
        optionA: "6",
        optionB: "7",
        optionC: "8",
        optionD: "9",
        correctOption: "optionD"
    },

    {
        question: "Lämpötila laskee tasaisesti 35 asteesta 8 asteeseen. Aikaa kuluu 4,5 tuntia. Kuinka paljon lämpötila laskee tunnissa?",
        optionA: "4 astetta",
        optionB: "5 astetta",
        optionC: "6 astetta",
        optionD: "7 astetta",
        correctOption: "optionC"
    },

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 4) {
        remark = "Harjoittele vielä lisää!"
        remarkColor = "red"
    }
    else if (playerScore >= 5 && playerScore < 8) {
        remark = "Melko hyv' suoritus!"
        remarkColor = "orange"
    }
    else if (playerScore >= 8) {
        remark = "Osaat nämä asiat hienosti!"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}