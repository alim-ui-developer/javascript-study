// 랜덤 번호 지정
// 유저가 번호를 입력 후 'go'라는 버튼을 누른다
// 만약에 유저가 랜덤번호를 맞추면 맞췄습니다!
// 랜덤번호 < 유저번호 down
// 랜덤번호 > 유저번호 up
// reset버튼을 누르면 게임이 리셋됨
// 5번의 기회를 다 쓰면 게임 종료(더이상 추측 불가. 버튼 비활성화)
// 유저가 1~100범위 밖의 숫자를 입력하면 알려준다. 기화를 깎지 않는다.

let computerNum = 0;

const playButton = document.getElementById("playButton");
const resetButton = document.getElementById("resetButton");
const userInput = document.getElementById("userInput");
const resultArea = document.getElementById("resultArea");
const chanceArea = document.getElementById("chanceArea");

let chances = 5;
let gameOver = false;

let history = [];

// event
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){userInput.value = ''})

function pickRandomNum(){
  computerNum = Math.floor(Math.random() * 100) + 1; // Math.random은 1은 포함하지 않는다.
  console.log("정답", computerNum)
}

function play(){
  let userValue = userInput.value;
  
  // 유효성 체크
  if(userValue < 1 || userValue > 100){
    resultArea.textContent = '1과 100사이 숫자를 입력해주세요';
    return;
  }

  // 유저가 입력했더 값을 또 입력하는 경우 실행되지 못하게
  if(history.includes(userValue)){
    resultArea.textContent = '이미 입력한 숫자입니다. 다른 숫자를 입력해주세요.'
    return;
  }

  // 찬스 1회 감소
  chances--;
  console.log("찬스", chances)
  chanceArea.textContent = `남은 기회: ${chances}번`;

  if(userValue < computerNum){
    resultArea.textContent = 'up!!';
  }else if(userValue > computerNum){
    resultArea.textContent = 'down!!';
  }else{
    resultArea.textContent = 'same!!';
    gameOver = true;
  }

  // 유저가 입력했던 값 빈 배열에 넣어주기
  history.push(userValue);

  if(chances < 1){
    gameOver = true;
  }

  if(gameOver === true){
    playButton.disabled = true;
  }

}

function reset(){
  // user input창이 깨끗하게 정리되고
  userInput.value = "";
  // 새로운 번호가 생성되고
  pickRandomNum();
  gameOver = false  ;

  chances = 5;
  resultArea.textContent = '결과가 나온다';
}