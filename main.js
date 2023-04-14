/* 
1. 랜덤 번호 지정
2. 유저 번호 입력
3. 랜덤 번호랑 유저 번호랑 비교 (UP DOWN 정답)
4. 1~100 사잇값 아닐시 기회 차감X 경고창 출력
5. 동일 입력값 입력시 기회 차감 X 경고창 출력
6. 리셋 버튼 누를시 input창 비워짐, 기회 5번 랜덤 숫자 생성
7. 플레이 버튼 누를시 기회 차감, 비교 출력
8. 5번 기회 소진시 플레이 버튼 disabled
*/
let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("reset-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let chanceArea = document.getElementById("chance-area");
let chances = 5;
let gameOver = false;
let inputList = [];
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
let randomNum = 0;
function pickRandomNum() {
  randomNum = Math.floor(Math.random() * 100) + 1;
}
pickRandomNum();
console.log(randomNum);

function play() {let inputValue = userInput.value;
  if (inputValue < 1 || inputValue > 100) {
    resultArea.textContent = "1~100 사잇값을 입력하세요";
    return;
  }
  if (inputList.includes(inputValue)) {
    resultArea.textContent = "동일한 값을 입력하셨습니다";
    return;
  }
  chances--;
  resultArea.textContent=`남은 기회 : ${chances}번`;
  if (inputValue < randomNum) {
    resultArea.textContent = "UP!!";
  } else if (inputValue > randomNum) {
    resultArea.textContent = "DOWN!!";
  } else {
    resultArea.textContent = "정답!!";
  }
  inputList.push(inputValue);
  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNum();
  resultArea.textContent="";
}
