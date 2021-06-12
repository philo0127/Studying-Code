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

*/
// 2.12 Recap

// return을 해야 해당 function 밖에서 결과값을 이용할 수 있다
//