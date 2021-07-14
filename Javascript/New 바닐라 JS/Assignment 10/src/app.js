/*
// 2.2 variables

console.log("You can put string or number here");
console.log(5+2);
console.log(5*2);
console.log(5/5);


// 2.3 const and let

const a=10;
const b=2;
console.log(a+b);
console.log(a*b);
console.log(a/b);
let myName = "nico";
// variable의 이름이 길면 공백 다음 글자를 대문자로 쓴다
console.log("hello " + myName);
myName = "nicolas";
console.log("hello " + myName);
// const와 let 의 차이점: const는 상수로서 변하지 않는 것. 업데이트할 수 없음
// let은 새로운 변경 가능한 변수를 설정할 때 사용


// 2.4 Boolean: true와 false 값만을 가지는 요소

const amIFat = true;
console.log(amIFat);
// null: 존재하지 않음으로 정의
const amITall = null;
console.log(amITall);
// undefined: 값 자체를 정의하지 않음
let something;
console.log(something);


// 2.5 Array

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
const daysOfWeek = [mon , tue , wed , thu , fri , sat , sun];

console.log(daysOfWeek);
// Array는 [] 안에 쉼표(,)로 구분하여 저장
const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];
// Array에는 number, string, boolean 모두 들어갈 수 있음
console.log(nonsense);
console.log(daysOfWeek,nonsense);

console.log(daysOfWeek[3]);
// Array에서 n번째 요소를 선택하고 싶으면 [n-1]을 대입

daysOfWeek.push("the eighth day");
console.log(daysOfWeek);
// Array에서 맨 뒤에 새로운 요소를 추가하고 싶으면 push() 이용

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");
console.log(toBuy);


// 2.6 Objects

const player = {
    Name : "nico",
    Points : 121212,
    Handsome : false,
    Fat : "little bit"
    }
// 중괄호 안에는 콜롬(:)과 콤마(,)로 구분

console.log(player);
console.log(player.Points);
console.log(player["Name"]);
// Object 안의 특성들을 불러오는 방법

player.Fat = "good looking";
// 특성값 수정하기 (string)
player.Points = player.Points + 202020;
// 특성값 수정하기 (number)
player.Handsome = true;
// 특성값 수정하기 (boolean)
player.lastName = "potato";
// 특성 추가하기
console.log(player);


// 2.7 Functions part One, 2.8 Functions part Two
function tellHello() {
    console.log("Hello");
}
tellHello();

function sayHello (names, age) {
    console.log("Hello my name is " + names + ". I'm " + age + " years old.");
}
sayHello("Michael", 29);
sayHello("Dal", 33);
sayHello("lynn", 2998);

function plus(a,b){
    console.log(a + b);
}
plus(200,3999);
// function에서 정의된 a,b는 function의 {} 안에서만  정의됨

const player = {
    name: "nico",
    sayHellos: function(otherPersonsName){
        console.log("hello " + otherPersonsName + "! Nice to meet you!")
    }
};
console.log(player.name);
player.sayHellos("fly me to the moon");
// Object 안에 function을 넣는 방법


// 2.9 Recap
// 데이터 종류: string, number, boolean (true, false, null, undefined)
// 값의 정의: const (업데이트 불가능), let (업데이트 가능), var (쓰지 말 것!)
// Array의 정의, 불러오기, 수정, 추가 


// 2.10 Recap 2
// Object의 정의, 불러오기, 수정, 추가
// 함수: function () {} 
const calculator = {
    add: function(a,b) {
        console.log(a+b)
    },
    minus: function(a,b){
        console.log(a-b)
    },
    product: function(a,b){
        console.log(a*b)
    },
    divide: function(a,b){
        console.log(a/b)
    },
    power: function(a,b){
        console.log(a**b)
    }
}
calculator.add(3,5);
calculator.minus(3,5);
calculator.product(3,5);
calculator.divide(3,5);
calculator.power(3,5);


// 2.11 Return

const calculator = {
    add: function(a,b) {
        return(a+b)
    },
    minus: function(a,b){
        return (a-b)
    },
    product: function(a,b){
        return (a*b)
    },
    divide: function(a,b){
        return (a/b)
    },
    power: function(a,b){
        return (a**b)
    }
}
calculator.add(3,5);
calculator.minus(3,5);
calculator.product(3,5);
calculator.divide(3,5);
calculator.power(3,5);

const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}
const krAge = calculateKrAge(age);
console.log(krAge);
// function(XXX)는 return 값을 되돌려 준다
const addResult = calculator.add(2,3);
const minusResult = calculator.minus(addResult,1);
const productResult = calculator.product(2,minusResult);
const powerResult = calculator.power(minusResult,productResult);
console.log(powerResult);


// 2.12 Recap

// return을 해야 해당 function 밖에서 값을 이용할 수 있음


// 2.13 Conditionals part One
// 2.14 Conditionals part Two
// 2.15 Conditionals part Three
// 2.16 Recap

const age = parseInt(prompt("How old are you?"));
// prompt는 사용자가 값을 입력할 때까지 ₩javascript를 잠시 정지. 지금은 html이나 css를 이용 
// prompt에 입력한 값은 string으로 저장 (typeof를 사용해 데이터 타입 확인)
// parseInt 함수를 사용해서 string으로 저장된 숫자를 number로 변환
// isNaN 함수는 입력한 값이 number이면 false, number가 아니면 true를 호출
// if 조건문 안의 조건은 &&로 "and"를, ||로 "or"을, ===로 "같음"을, !==로 "다름"을 표현 
if(isNaN(age) || age < 0) {
    console.log("Please write a positive number.")
} else if (age < 18) {
    console.log("You are too young to drink.")
} else if (age >= 18 && age <= 50) {
    console.log("You can drink.")
} else if (age > 50 && age <= 80){
    console.log("It would be better for you not to drink.")
} else if (age === 100) {
    console.log("You are so wise!")
} else if (age > 80) {
    console.log("You can do whatever you want.")
}


// 3.0 The Document Object
// 3.1 HTML in Javascript
// 3.2 Searching for Elements

document.title = "You can change the title using JavaScript!";

const something = document.getElementById("something");
something.innerText = "I got you!";

const hello = document.getElementsByClassName("hello");
console.log(hello);

const title = document.getElementsByTagName("h1");
console.log(title);

const title = document.querySelector(".hello h1");
title.innerText = "Hi!";
// getElementsBy...는 array로 불러옴
// querySelector는 첫 번째 요소만 불러옴 (불러오려는 것이 id(#)인지 class(.)인지 명시 필요)
// querySelectorAll는 조건에 해당되는 모든 요소들을 불러옴
const title_1 = document.querySelector("div.hello:first-child h1");
// .hello라는 이름의 div 안의 첫 번째 h1 요소
// style 함수: title이라는 object의 한 property
title.style.color = "yellow";


// 3.3 Events part One
// 3.4 Events part Two
// 3.5 More Events
const title = document.querySelector(".hello h1");
title.innerText = "Hi!";
function handleTitleClick(){
    title.style.color = "green"
    title.innerText = "This is clicked!"
}
function handleMouseEnter(){
    title.style.color = "white";
    title.innerText = "Mouse is here"
}
function handleMouseLeave(){
    title.style.color = "black";
    title.innerText = "Mouse is not here"
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
    title.innerText = "Window was resized!"
}
function handleWindowCopy(){
    alert("Copied!");
}
function handleWindowOffline(){
    alert("Now you are offline!");
}
function handleWindowOnline(){
    alert("Welcome! You are online!");
}
title.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick;
title.addEventListener("mouseenter", handleMouseEnter);
// title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeave);
// title.onmouseenter = handleMouseLeave;

// user가 title에 event를 발생시키면, handleTitleClick을 실행
// 더 많은 javascript Event 목록을 보려면 mdn에서 Web Api 언어에서 검색!
// console.dir(title)로 볼 수 있는 목록 중 on으로 시작하는 event를 on을 삭제하고 사용
// title.on~ = function 으로 addEventListener를 대체할 수 있다

window.addEventListener("resize",handleWindowResize); 
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


// 3.6 CSS in Javascript part One
// 3.7 CSS in Javascript part Two
// 3.8 CSS in Javascript part Three

// CSS를 사용하여 바꾸는 방법
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
    if(h1.style.color === "white"){
        h1.style.color = "tomato";
    } else {
        h1.style.color = "white";
    }
}
h1.addEventListener("click",handleTitleClick);

// let을 사용하여 바꿈
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}
h1.addEventListener("click",handleTitleClick);

// javascript가 CSS를 건드리지 않고 html을 통해서 상호작용하게 하는 게 더 나음
// html에 class를 추가/삭제하여 CSS가 class에 따라 속성을 부여하게 함
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
    const clickedClass = "clicked";
        // 반복해서 className을 쓸 때 실수할 가능성 존재
        // const를 사용해 className을 변수로 만들면 유용 
    if(h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
        // === 는 if 안의 조건문, = 은 특성 부여 
        // html에 이미 class가 주어져 있는 경우, className은 기존 class를 교체
    }
}
h1.addEventListener("click",handleTitleClick);

// classList를 사용하면 기존 class에 영향을 주지 않고 class를 추가/삭제할 수 있음
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}
h1.addEventListener("click",handleTitleClick);

// toggle 사용이 제일 간단! 기존에 class가 있으면 없애고, 없으면 생성
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
    h1.classList.toggle("clicked");
}
h1.addEventListener("click",handleTitleClick);


// 4.0 Input Values
 
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// loginForm 하나만 불러오고, 나머지는 그 안에서 불러오는 방식을 사용
function onLoginBtnClick(){
    const username = loginInput.value;
    if(username ===""){
        alert("Please write your name");
    } else if (username.length > 15){
    // length는 앞의 요소의 길이를 number로 알려 준다
            alert("Your name is too long.");
    }
}
loginButton.addEventListener("click",onLoginBtnClick)


// 4.1 Form Submission

// html에서 form에서 required, maxlength 등의 기능을 사용하는 것이 낫다
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(username);
}
// form을 사용하여 값을 submit하게 되면 웹페이지가 새로고침됨
// form을 사용하면 버튼을 클릭하는 것을 신경쓸 필요도 없다


// 4.2 Events part One
// 4.3 Events part Two

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value
    console.log(username);
}
function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
}
// form을 submit했을 때 입력값을 받아옴.
// addEventListener는 방금 일어난 event에서 정보를 뽑아 argument에 입력
// argument를 채우면, 그 정보를 입력해서 함수를 호출
// 새로고침을 막기 위해, xxx.preventDefault(); 사용
loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinkClick)

*/
// 4.4 Getting Username
// 4.5 Saving Username
// 4.6 Loading Username
// 4.7 Super Recap

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    // localStorage.setItem("key", value): 브라우저에 key 항목에 value를 저장
    // paintGreetings 함수로 대체: greeting.innerText = `Hello ${username}`;
    // 다른 방법: greeting.innerText = "Hello " + username;
    // ``: 백틱으로 variable 불러와 사용하는 법: ${variable}
    // paintGreetings 함수로 대체: greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername);
}


