// 유저가 값을 입력한다
// +버튼을 클릭하면 할 일이 추가된다
// delete버튼을 누르면 할 일이 삭제된다
// check버튼을 누르면 할 일이 끝나면서 밑줄이 생긴다
// 1. check버튼을 클릭하는 순간 true/false
// 2. true면 끝난걸로 간주하고 밑줄 그어주기
// 3. false면 안끝난 것으로 간주하고 그대로
// 진행 중, 끝남 탭을 누르면 언더바가 이동한다
// 끝남 탭은 끝난 아이템만. 진행 중 탭은 진행 중인 아이템만
// 전체 탭을 누르면 다시 전체 아이템으로 돌아온다

const imageList = [
  'https://pbs.twimg.com/media/E9rNPvJVoAANZZF.jpg',
  'https://mediafactory.play.kbs.co.kr/clip/2023/01/08/63ba85a9fb679de9c1a172c5/thumbnail/63ba85a9fb679de9c1a172c5_upload_1673169488919.jpeg',
  'https://i.namu.wiki/i/Tkhw0oq8hbg9efcVqMs7Q9CCaEu7cJLkdjM_15UEvxkAvbWujZsGvny400oOh2TnEpIILEFUEZDnxHjcznDBRQ.webp',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5YxZy1R_iBiYxAnwXaDLNy2ZRruAWW_4QUw&s',
  'https://dimg.donga.com/egc/CDB/VODA/Article/K02/T2017-0764/5f/e5/49/54/5fe549540c340.png',

  'https://i.pinimg.com/originals/24/0d/c6/240dc6450c207441fa7b620c57cd8c3b.jpg',
  'https://blog.kakaocdn.net/dn/bilP0P/btrpMQ0pcm5/7flHN4TMKL0DcjsRs7dBa1/img.jpg',
  'https://image.fmkorea.com/files/attach/new/20161009/486616/8236218/480837457/be0812a5d48b3e865d7ea6e1f49ecc01.jpg',
  'https://blog.kakaocdn.net/dn/mvrhH/btrpOxlWXkM/nk9kEsjlMJD3rShRaYcRY1/img.jpg',
  'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F996802365DF31FCA06',

  'https://i.pinimg.com/originals/88/49/a4/8849a48b0f3ee956d232cb5567bc6e79.jpg',
  'https://www.moneynet.co.kr/files/attach/images/162/852/354/006/b11a017bba2e4840cd5d2f52b03ec6f8.gif',
  'https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTVfNjYg/MDAxNjAyNzM1MTYzODE2.df9WMCfwrUjAEOstHb1BVIMo8r0R0H8fSmChA2aLl6sg.q8ZYIMCtZZYaql_eTvQTlfRhZpyBJhJPAQol5rKFKRYg.JPEG.yih8788/IMG_8677.JPG?type=w800',
  'https://i.pinimg.com/736x/5f/ad/11/5fad112b0332b83876f526c2faca6308.jpg',
  'https://images.munto.kr/production-socialing/1683975215537-photo-uffkq-432454-0',

  'https://pbs.twimg.com/media/ESlNk4bVAAARDPT.jpg',
  'https://mblogthumb-phinf.pstatic.net/MjAxNzA3MTBfMTYx/MDAxNDk5NjkwNzkwMTQz.WOcHn0tyjjFUvPRlkmEv2TBn45M1baEaQqNuQrGyt0Eg.qCQcshzdfBxsbB4-9-eTNXnHi-vGK6tkCzZ5O3hduG0g.JPEG.cosl922/se3_image_1722521202.jpg?type=w800',
  'https://ppss.kr/wp-content/uploads/2016/11/%EB%AC%B4%ED%95%9C%EB%8F%84%EC%A0%84_%EA%B7%B9%EA%B8%B0_%EC%9D%B8%EB%82%B4_%EC%95%88-%EC%A3%BD%EB%8A%94%EB%8B%A4_%EC%9D%BC%EC%96%B4%EB%82%98.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgn3b8y2rCqOG3bI_Fo0MaJNYKh545QnWgrg&s',
  'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/719/52e91e0aa6dc9e00e18ef89e00489b4b_res.jpeg',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fXN8Ai1zZxTiUG50kvqwo2E4JaEG73mp_g&s',
  'https://mblogthumb-phinf.pstatic.net/MjAyMjAyMDFfMTg2/MDAxNjQzNzE3NDgxMjI5.yBXVw3ftUFyfL-SgD__bJRwopHAPCFWusqREBM2mxMgg.t6fapEiyd_ava3eiozPGK9SAvbN48wvLUDqFZAnEn2og.JPEG.db30023/SE-6A6AABBF-4015-4994-B96E-07093149D55C.jpg?type=w800',
  'https://file3.instiz.net/data/cached_img/upload/2021/03/03/16/a84f36c9c6e484832e47f4e65d6498e3.jpg',
]


function randomImageGenerator(){
  return Math.floor((Math.random() * 22) + 1)
}

const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const tabs = document.querySelectorAll(".task-tabs ul li");
const underLine = document.getElementById("under-line");

let taskList = [];
let filterList = [];
let mode = 'all';

addButton.addEventListener("click", addTask);
taskInput.addEventListener('keydown', (event) => {
  if (event.key == "Enter" || event.keyCode == 13) {
    addTask();
  }
});

for(let i = 0; i < tabs.length; i++){
  tabs[i].addEventListener("click", 
    function(event){
      filter(event);
      tabActiveEffect(event, i);
    }
  )
}

function tabActiveEffect(event, i){
  let el = document.getElementById(event.target.id);
  let width = el.clientWidth;
  underLine.style.left = (width * i) + 'px';
}

function addTask(){
  let taskContent = taskInput.value;
  let task = {
    id:randomIdGenerator(),
    taskContent: taskInput.value,
    isComplete: false,
  }

  taskList.push(task);
  filter();

  taskInput.value = '';
}

function render(){
  let resultHTML = '';
  list = [];

  if(mode === 'all'){
    list = taskList;
  }else{
    list = filterList;
  }

  for(let i = 0; i < list.length; i++){
    if(list[i].isComplete === true){
      resultHTML += `
        <div class="task task-done">
          <div class="photo">
            <p class="image">
              <img src="https://cdn.imweb.me/upload/S20210809c06cc49e8b65a/5fe6b510ae811.jpg" alt="" />
            </p>
            <p class="text">${list[i].taskContent}</p>
          </div>
          <div class="buttons">
            <button class="btn_delete" onclick="deleteTask('${list[i].id}')">delete</button>
            <button class="btn_check" onclick="toggleComplete('${list[i].id}')">check</button>
          </div>
        </div>
      `
    }else{
      resultHTML += `
        <div class="task">
          <div class="photo">
            <p class="image">
              <img src="${imageList[randomImageGenerator()]}" alt="">
            </p>
            <p class="text">${list[i].taskContent}</p>
          </div>
          <div class="buttons">
            <button class="btn_delete" onclick="deleteTask('${list[i].id}')">delete</button>
            <button class="btn_check" onclick="toggleComplete('${list[i].id}')">check</button>
          </div>
        </div>
      `
    }
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id){
  for(task of taskList){
    if(task.id === id) {
      task.isComplete = !task.isComplete;
      break;
    }
  }
  filter();
}

function deleteTask(id){
  for(let i = 0; i < taskList.length; i++){
    if(taskList[i].id === id){
      taskList.splice(i, 1);
      break;
    }
  }
  filter();
}

function getAttainmentRate(){
  const attainmentRateText = document.querySelector(".attainmentRate span");
  let doneItemList = [];
  let allItemLength = taskList.length;

  // 완료한 일감 갯수
  for(task of taskList){
    if(task.isComplete === true){
      doneItemList.push(task);
    }
  }

  if(doneItemList.length){
    let rate = (doneItemList.length * 100) / allItemLength;
    attainmentRateText.textContent = rate.toFixed(1);
  }
}

function filter(event){
  if(event){
    mode = event.target.id;
  }
  
  filterList = [];
  
  switch(mode){
    case 'ongoing':
      // 진행중인 아이템
      for(task of taskList){
        if(task.isComplete === false){
          filterList.push(task);
        }
      }
      render();
      break;
    case 'done':
      // 끝나는 아이템
      for(task of taskList){
        if(task.isComplete === true){
          filterList.push(task);
        }
      }
      render();
      break;
    default:
      // 전체를 보여준다
      render();
      break;
  }
  getAttainmentRate();
}

function randomIdGenerator(){
  return '_' + Math.random().toString(36).substr(2, 9);
}

