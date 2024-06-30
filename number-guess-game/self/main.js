let answer = 0;

const initialChanceValue = 5;
let change = initialChanceValue;

const minValue = 1;
const maxValue = 100;
const initialResultValue = '결과는?';

const inputBox = document.querySelector('.userInput');
const resultArea = document.querySelector('.resultArea');
const chanceArea = document.querySelector('.chanceArea span');
const playButton = document.querySelector('.btn_play');
const resetButton = document.querySelector('.btn_reset');

let historyArray = [];

const imageBox = document.querySelector('.imageBox img');
const guessImageURL = 'https://velog.velcdn.com/images/leeeeeyeon/post/8500868a-95c6-4440-804e-90b2012c6ea6/image.jpg';
const successImageURL = 'https://pbs.twimg.com/media/ESNTcR8UUAUAiKX?format=png&name=small';
const failImageURL = 'https://pbs.twimg.com/media/EIdHY9TXsAAyK1H.jpg';
const upImageURL = 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/179/33531d1dffc43ba255706bb3baa24536.jpeg';
const downImageURL = 'https://pbs.twimg.com/media/EUHsdbzUYAYVpxm.jpg';



// 랜덤 값 생성
function makeAnswer(){
  answer = Math.floor(Math.random() * 100) + 1;
  console.log(answer)
}

makeAnswer();

function setDisabled(boolean){
  inputBox.disabled = boolean;
  playButton.disabled = boolean;
}

function play(){
  const userValue = Number(inputBox.value); 

  // 입력 숫자 범위 넘어갈 경우 예외처리
  if(userValue < minValue || userValue > maxValue){
    alert(`${minValue}부터 ${maxValue}까지의 숫자만 입력 가능합니다.`);
    inputBox.value = '';
    return;
  }

  // 중복 값 입력 방지
  if(historyArray.includes(userValue)){
    alert("이미 입력한 값입니다")
    return;
  }


  change--;
  chanceArea.textContent = change;

  if(change <= 0){
    imageBox.src = failImageURL;
    alert("기회를 모두 사용하셨습니다");
    setDisabled(true);

    return;
  }

  historyArray.push(userValue);

  if(userValue > answer){
    imageBox.src = downImageURL;
    resultArea.textContent = 'DOWN⬇️';
    return;
  }
  
  if(userValue < answer){
    imageBox.src = upImageURL;
    resultArea.textContent = 'UP⬆️';
    return;
  }
  
  if(userValue === answer){
    imageBox.src = successImageURL;
    resultArea.textContent = '🎉맞췄어요🎉';
    setDisabled(true);
    return;
  }
}

function reset(){
  // 잔여 찬스 수에 따른 alert
  if(change !== 0 && Number(inputBox.value) !== answer){
    if(confirm("아직 기회가 남아있어요! 리셋하시겠어요?")){ 
      alert("리셋 완료");
    }
  }else{
    alert("한번 더!");
  }
  
  inputBox.value = '';
  imageBox.src = guessImageURL;

  setDisabled(false);
  change = initialChanceValue;
  resultArea.textContent = initialResultValue;
  chanceArea.textContent = initialChanceValue;
}

