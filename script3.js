const quizdata=[
    {
        question:"Which language runs in a web browser?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"Javascript",
        correct:"d",
    },
      {
        question:"What does css stand for?",
        a:"Central style shhets",
        b:"Cascading style sheets",
        c:"Cascading simple sheets",
        d:"Cars suns sailboats",
        correct:"b",
      },
      {
        question:"What does html stand for?",
        a:"Hypertext markup language",
        b:"Hypertext markdown language",
        c:"Hyperloop machine language",
        d:"none",
        correct:"a",
      },
      {
        question:"What year was javascript launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none of the above",
      },
];
const quiz=document.getElementsById('quiz')
const answerE1s=document.querySelectorAll('.answer')
const questionE1=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitbtn=document.getElementById('submit')


let currentQuiz=0
let score=0
loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizData=quizdata[currentQuiz]
    questionE1.innerText=currentQuizData.question
     a_text.innerText=currentQuizData.a
     b_text.innerText=currentQuizData.b
     c_text.innerText=currentQuizData.c
     d_text.innerText=currentQuizData.d
}
function deselectAnswers(){
    answerE1s.forEach(answerE1s=>answerE1s.checked=false)
}
function getselected(){
    let answerE1s
    answerE1s.forEach(answerE1=>{
       if(answerE1.checked){
          answer=answerE1.id
       }
    })
    return answer
}
submitbtn.addEventListener('click',()=>{
    const answer=getselected()
    if(answer){
        if(answer===quizdata[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if( currentQuiz<quizdata.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML=
            <h2>You answered ${score}/${quizdata.length}questions correctly</h2>
            
            <button onclick="location.reload()">Reload</button>
        }
    }
})