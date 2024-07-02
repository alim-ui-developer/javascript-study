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

const taskInput = document.getElementById("task-button");
const addButton = document.getElementById("add-button");
const tabs = document.querySelectorAll(".task-tabs ul li")
let taskList = [];
let mode = 'all';

addButton.addEventListener("click", addTask)

for(tab of tabs){
  tab.addEventListener("click", function(event){filter(event)})
}

function addTask(){
  let taskContent = taskInput.value;
  let task = {
    id:randomIdGenerator(),
    taskContent: taskInput.value,
    isComplete: false,
  }

  taskList.push(task);
  render();
}

function render(){
  let resultHTML = '';
  let list = [];

  if(mode === 'all'){
    list = taskList;
  }else if(mode === 'ongoing' || mode === 'done'){
    list = filterList;
  }

  console.log("mode", mode, list)
  for(let i = 0; i < list.length; i++){
    if(list[i].isComplete === true){
      resultHTML += `
        <div class="task">
          <p class="task-done">${list[i].taskContent}</p>
          <div>
            <button onclick="toggleComplete('${list[i].id}')">check</button>
            <button onclick="deleteTask('${list[i].id}')">delete</button>
          </div>
        </div>
      `
    }else{
      resultHTML += `
        <div class="task">
          <p>${list[i].taskContent}</p>
          <div>
            <button onclick="toggleComplete('${list[i].id}')">check</button>
            <button onclick="deleteTask('${list[i].id}')">delete</button>
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
  render();
}

function deleteTask(id){
  console.log(id, "삭제하자");
  for(let i = 0; i < taskList.length; i++){
    if(taskList[i].id === id){
      taskList.splice(i, 1);
      break;
    }
  }
  render();
}

function filter(event){
  let mode = event.target.id;
  let filterList = [];

  console.log("filter mode", mode)
  switch(mode){
    case 'ongoing':
      // 진행중인 아이템
      // task.isComplete = false;
      for(task of taskList){
        if(task.isComplete === false){
          filterList.push(task);
        }
      }
      render();
      console.log("진행중", filterList)
    case 'done':
      // 끝나는 아이템
      // task.isComplete = true;
      for(task of taskList){
        if(task.isComplete === true){
          filterList.push(task);
        }
      }
      render();
      console.log("끝남", filterList)
    default:
      // 전체를 보여준다
      render();
      break;
  }
 
}

function randomIdGenerator(){
  return '_' + Math.random().toString(36).substr(2, 9);
}
