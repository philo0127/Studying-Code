const toDoForm = document.querySelector(".js-toDoForm"),
      /* form 불러오기 */
    toDoInput = toDoForm.querySelector("input"),
      /* form 안의 input 불러오기 */
    toDoList = document.querySelector(".js-toDoList");
      /* ul (unordered List element) 불러오기 */

const TODOS_LS = "toDos";
      /* TODOS_LS 정의: 왜??? */

let toDos = [];
      /* toDos라는 array 만들기. let은 재지정 가능한 방법 */
function filterFn(toDo) {
      /* filterFn(toDo) 함수 정의: toDo 안에는 뭐가 들어갈까? */
    return toDo.id === 1
      /* return: 함수를 종료하고, 함수 caller 에 반환되는 값을 특정함 */
}

function deleteToDo(event) {
      /* deleteToDo(event): 이미 기록된 todo를 삭제하는 함수 */
    const btn = event.target;
      /* btn을 event에서 선택된 값으로 정의함 */
    const li = btn.parentNode;
      /* li를 btn의 parent 노드로 정의함 */
    toDoList.removeChild(li);
      /* toDoList의 child를 삭제함 (li는 뭘까???) */
    const cleanToDos = toDos.filter(function(toDo){
      /* cleanToDos를 toDos 의 요소 중 테스트를 통과하는 요소를 모아 반환 */
      return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}


function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId =  toDos.length + 1
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
        };
    toDos.push(toDoObj);
    saveToDos();    
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init(){
     loadToDos();
     toDoForm.addEventListener("submit", handleSubmit)
    }
init();