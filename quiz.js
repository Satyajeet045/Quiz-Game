const data = [
    {
      id:1,
      question:"What is capital of India ?",
      answers:[
        { answer: "Bangalore", isCorrect: false},
        { answer: "Mumbai", isCorrect:false},
        { answer:"Delhi", isCorrect:true},
        { answer: "Kolkata", isCorrect:false},
      ],
    },
    {
      id: 2,
      question: "Which of these fish is actually a fish?",
      answers: [
        { answer: "swordfish", isCorrect: true },
        { answer: "jellyfish", isCorrect: false },
        { answer: "starfish", isCorrect: false },
        { answer: "crayfish", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "A flutter is a group of:",
      answers: [
        { answer: "bees", isCorrect: false },
        { answer: "penguins", isCorrect: false },
        { answer: "butterflies", isCorrect: true },
        { answer: "camels", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "A group of which animals is referred to as a wake?",
      answers: [
        { answer: "bats", isCorrect: false },
        { answer: "vultures", isCorrect: true },
        { answer: "ants", isCorrect: false },
      ],
    },
  ];

  const gameScreen =document.querySelector(".game")
  const resultScreen =document.querySelector(".result")
  const question =document.querySelector(".question")
  const answersContainer =document.querySelector(".answers")
  const submit =document.querySelector(".submit")
  const play = document.querySelector(".Playagain")
  


let qIndex=0
let correctCount=0
let wrongCount=0
let score=0
let selectedAnswer;

const showQuestion =(qNumber)=>{
    selectedAnswer=null
    if(qNumber===data.length){
        return showresult()
        
    }
    question.textContent= data[qNumber].question
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) =>
        `
    <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.isCorrect}/>
        <label for="1">${item.answer}</label>
    </div>
        `
    ).join("")

    selectAnswer()
}

const selectAnswer =()=>{
    answersContainer.querySelectorAll("input").forEach(ele=>{
        ele.addEventListener("click",(e)=>{
            selectedAnswer= e.target.value
            console.log(selectedAnswer)
        })
    }) 

}
const submitAnswer= ()=>{
    submit.addEventListener("click", ()=>{
        if(selectedAnswer!== null){
            selectedAnswer==="true/" ? correctCount++ : wrongCount++ 
            qIndex++
            showQuestion(qIndex)
            
        }else alert("Select an answer")
        
        
       
    })

}
const showresult= ()=>{
    resultScreen.style.display="block"
    gameScreen.style.display="none"
    resultScreen.querySelector(".correct").textContent=`Correct Answers: ${correctCount}`
    resultScreen.querySelector(".wrong").textContent=`Wrong Answers: ${wrongCount}`
    resultScreen.querySelector(".score").textContent=`Score : ${(correctCount-wrongCount)*10}`
    


}

play.addEventListener("click",()=>{
    resultScreen.style.display="none"
    gameScreen.style.display="block"
    playagain()

})
const playagain =()=>{
   correctCount=0
   wrongCount=0
   score=0
   qIndex=0
  showQuestion(qIndex)
}

showQuestion(qIndex)
submitAnswer()