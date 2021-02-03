/*------------------------------------------------------------------------------- */
/* 1. localStorage.getItem(A) : KEY가 A인 local storage의 value를 get */
/* 2. from.classList.add(B) : form에 해당하는 것의 class list에 B 클래스를 추가 */
/* 3. from.addEventListener("submit", handleSubmit) 
    : form에서 submit event가 발생하길 기다리다 handleSubmit 실행한다 */
/* 4. event.preventDefault() : */
/* 5. localStorage.setItem(A, text) : KEY가 A인 local storage의 value를 text로 set */
/* 6. form.classList.remove(B) : form에 해당하는 것의 class list에 B 클래스를 삭제 */
/*-------------------------------------------------------------------------------  */

const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
const SHOWING_ON = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text); //5 
}

function handleSubmit(event) {
  event.preventDefault(); //4
  const currentValue = input.value; 
  displayGreeting(currentValue);
  saveName(currentValue);
}

function askName(){
  form.classList.add(SHOWING_ON); //2 
  form.addEventListener("submit", handleSubmit); //3
}

function displayGreeting(text){
  form.classList.remove(SHOWING_ON); //6
  greeting.classList.add(SHOWING_ON);
  greeting.innerText = `Hello, ${text}`;
}

function loadName(){
  const currentName = localStorage.getItem(USER_LS); //1
  if (currentName === null){
    askName(); 
  }
  else{
    displayGreeting(currentName);
  }
}

function init(){
  loadName();
}

init();