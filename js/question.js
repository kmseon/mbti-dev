// data.js 가져오기 --> 배열
// 변수 3개 , 
import {questions} from './data.js'

//question.html 에 있는 각 태그 위치를 정의(변수)
const progressValueE1 = document.querySelector('.progress .value')
const numberE1 = document.querySelector('.number')
const questionE1 = document.querySelector('.question')
const choice1E1 = document.querySelector('.choice1')
const choice2E1 = document.querySelector('.choice2')

//mbti 타입을 저장하는 변수
let mbti = ""

// 선택버튼에 EventListener를 달아놓는다.
//(, 콜백 함수)
choice1E1.addEventListener('click', function(){
  // console.log("첫번째 단추가 눌렸습니다.")
  nextQuestion(0)
}) 
choice2E1.addEventListener('click', function(){
  // console.log("두번째 단추가 눌렸습니다.")
  nextQuestion(1)
}) 

let currentNumber = 0

function rendomQuestion(){
  const question = questions[currentNumber]
  numberE1.innerHTML = question.number
  questionE1.innerHTML = question.question
  choice1E1.innerHTML = question.choices[0].text
  choice2E1.innerHTML = question.choices[1].text
}

function nextQuestion(choiceNumber){
  const question = questions[currentNumber]

  if(currentNumber === questions.length -1 ){
    //결과 페이지 보이기
    showReasultPage()
    return 
  }
  //해당 mbti의 타입을 읽어와야 함
  mbti = mbti + question.choices[choiceNumber].value
  console.log("mbti = " + mbti)

  currentNumber = currentNumber + 1;
  progressValueE1.style.width = (currentNumber + 1) * 10 + '%'
  rendomQuestion()
}

function showReasultPage(){
  //http://127.0.0.1:5500/result.html?mbti=istj
  location.href = './result.html?mbti=' + mbti
}

rendomQuestion()