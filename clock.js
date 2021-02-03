/*------------------------------------------------------------------------*/
/* 1. Date : */
/* 2. getMinutes, getHours, getSeconds : */
/* 3. innerText : */
/* 4. setInterval(func, timeInterval) : func를 timeInterval(ms) 간격으로 실행 */
/*------------------------------------------------------------------------*/

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date(); //1
  const hours = date.getHours(); //2
  const minutes = date.getMinutes(); //2
  const seconds = date.getSeconds(); //2
  clockTitle.innerText = `${
    hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`; //3
}

function init() {
  getTime();
  setInterval(getTime, 1000); //4
}

init();