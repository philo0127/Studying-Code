// 7.0 Setup
// 7.1 Adding ToDos
// 7.2 Deleting To Dos
// 7.3 Saving To Dos
// 7.4 Loading To Dos Part One 
// 7.5 Loading To Dos Part Two
// 7.6 Deleting To Dos Part One
// 7.7 Deleting To Dos Part Two
// 7.8 Deleting To Dos Part Three

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];
// 새로고침했을 때 toDos를 localStorage에 저장된 요소들이 포함된 array로 시작하게 업데이트하려고.
function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
    // JSON.stringify: 다른 타입의 데이터를 단순한 string으로 전환 
}

function deleteToDo(event){
    const li = event.target.parentElement;    
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    // 앞의 li는 다른 걸 써도 되지만, 뒤의 "li"는 반드시 html 요소 이름이어야 함
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    // 버튼을 문장 뒤에 두어야 버튼을 오른쪽에 둘 수 있음
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    // 이 시점에서 toDoInput.value를 복사해 두는 것. newTodo는 아랫줄에 영향을 받지 않음
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    // push: newTodo를 toDos의 array로 집어넣음
    // 나중에 원활하게 삭제하기 위해 데이터를 object로 넣어 줄 것임
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit",handleToDoSubmit);
/* function sayHello(item){
    console.log("this is ", item);
}
*/
// arrow function으로 대체될 수 있음!
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // JSON.parse: string을 다른 타입의 데이터로 전환
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // arrow function, forEach: array의 각 item에 대해 function을 실행
}

/* filter 함수의 이용법
function goodfilter(item)
{return item !== 3}
console.log(([1,2,3,4].filter(goodfilter))
goodfilter의 함수값이 true이면 새로운 array에 해당 item을 포함, false이면 제외
*/



