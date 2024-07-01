let answer = 0;

const initialChanceValue = 3;
let change = initialChanceValue;
let historyArray = [];

const minValue = 1;
const maxValue = 100;
const initialResultValue = '날 이길 수 있겠는가 휴먼?';

const rightAnswerArea = document.querySelector('.rightAnswerArea');
const inputBox = document.querySelector('.userInput');
const resultArea = document.querySelector('.resultArea');
const chanceArea = document.querySelector('.chanceArea span');
const playButton = document.querySelector('.btn_play');
const resetButton = document.querySelector('.btn_reset');
const toastMessage = document.querySelector('.toastMessage');
const historyArea = document.querySelector('.historyArea');
const imageBox = document.querySelector('.imageBox img');

const aiImageURL = 'https://image.fmkorea.com/files/attach/new/20180508/33854530/727953339/1048723109/1f8d1f0dd06e5daa2edddcbaa4369305.jpg';

const successImageURL = 'https://lh4.googleusercontent.com/proxy/Hr1y8fmw_NorLxFBQj82ndr6D6OE63YRkPZYaZCT76lwKFCjRfAvdp4thpmIaIdG0WqL_WTYsglZ2X8zkMimxLHOWghGoYRVRj0nnJROuRrEgl5Etc_8C3dZiYWBILKq';
const successMessage = '나의 패배를 인정한다 휴먼';

const failImageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGxVbbyFcxuzbqqF-nnVi9zWWayTACXM4OA&s';
const failMessage = '완벽한 나의 승리다 휴먼';

const upImageURL = 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/179/33531d1dffc43ba255706bb3baa24536.jpeg';
const downImageURL = 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcVIL3K%2Fbtra33L4bBB%2FQvMft9H9TKTeqigbKKIx6K%2Fimg.jpg';



// 랜덤 값 생성
function makeAnswer(){
  console.log("makeAnswer")
  answer = Math.floor(Math.random() * 100) + 1;
  rightAnswerArea.textContent = `정답은 ${answer}입니다`;
  
}

// 초기 셋팅
function initialSetting(){
  chanceArea.textContent = initialChanceValue;
  imageBox.src = aiImageURL;
  resultArea.textContent = initialResultValue;
}

initialSetting();
makeAnswer();

// 토스트 팝업
let isToastShown = false;
function showToastMessage(){
  if (isToastShown) return;
  isToastShown = true;
  toastMessage.classList.add("show");

  setTimeout(function () {
    toastMessage.classList.remove("show");
    isToastShown = false;
  }, 800);
}

// 입력 창 초기화
function inputValueClear(){
  inputBox.value = '';
}

function setDisabled(boolean){
  inputBox.disabled = boolean;
  playButton.disabled = boolean;
}

function play(){
  const userValue = Number(inputBox.value); 

  // 입력 숫자 범위 넘어갈 경우 예외처리
  if(userValue < minValue || userValue > maxValue){
    alert(`${minValue}부터 ${maxValue}까지의 숫자만 입력 가능합니다.`);
    inputValueClear();
    return;
  }

  // 중복 값 입력 방지
  if(historyArray.includes(userValue)){
    alert("이미 입력한 값입니다");
    inputValueClear();
    return;
  }

  change--;
  chanceArea.textContent = change;


  if(change <= 0 && userValue !== answer){
    imageBox.src = failImageURL;
    resultArea.textContent = failMessage;
    alert("기회를 모두 사용하셨습니다");
    setDisabled(true);
    return;
  }

  historyArray.push(userValue);
  historyArea.textContent = `입력한 값: ${historyArray}`

  if(userValue > answer){
    imageBox.src = downImageURL;
    resultArea.textContent = '⬇️DOWN⬇️'
    toastMessage.textContent = '땡!';;
    showToastMessage();
    inputValueClear();
    return;
  }
  
  if(userValue < answer){
    imageBox.src = upImageURL;
    resultArea.textContent = '⬆️UP⬆️';
    toastMessage.textContent = '땡!';
    showToastMessage();
    inputValueClear();
    return;
  }
  
  if(userValue === answer){
    imageBox.src = successImageURL;
    resultArea.textContent = successMessage;
    toastMessage.textContent = '딩동댕!';
    showToastMessage();
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
  
  inputValueClear();
  makeAnswer();
  setDisabled(false);
  historyArray = [];
  imageBox.src = aiImageURL;
  change = initialChanceValue;
  resultArea.textContent = initialResultValue;
  chanceArea.textContent = initialChanceValue;
}

