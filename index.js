import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");
const memeModal = document.getElementById("meme-modal");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModalCloseBtn = document.querySelector(".meme-modal-close-btn");

memeModalCloseBtn.addEventListener("click", closeModal);
function closeModal() {
  memeModal.style.display = "none";
}
getImageBtn.addEventListener("click", renderCat);

emotionRadios.addEventListener("change", function (e) {
  const radios = document.getElementsByClassName("radio");
  for (let radio of radios) {
    radio.classList.remove("highlight");
  }
  const selectedElement = document.getElementById(e.target.id);
  const selectedParentEl = selectedElement.parentElement;
  selectedParentEl.classList.add("highlight");
});
function renderCat() {
  const catObject = getSingleCatObject();
  memeModalInner.innerHTML = `
  <img
  class="cat-img"
  src="./images/${catObject.image}"
  >
  `;
  memeModal.style.display = "flex";
}

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();
  if (catsArray.length === 1) {
    return catsArray[0];
  } else {
    const randomNumber = Math.floor(Math.random() * catsArray.length);
    return catsArray[randomNumber];
  }
}

function getMatchingCatsArray() {
  const isGif = gifsOnlyOption.checked;
  const selectedEmotion = document.querySelector(
    `input[type="radio"]:checked`
  ).value;
  const matchingCatsArray = catsData.filter(function (cat) {
    if (isGif) {
      return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
    } else {
      return cat.emotionTags.includes(selectedEmotion);
    }
  });
  return matchingCatsArray;
}

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let item of cats) {
    for (let emotion of item.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
}

function renderEmotionRadios(cats) {
  const emotions = getEmotionsArray(cats);
  let radioItems = "";
  for (let emotion of emotions) {
    radioItems += `
    <div class="radio">
        <label for="${emotion}">${emotion}</label>
        <input 
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
        >
    </div>
    `;
  }
  emotionRadios.innerHTML = radioItems;
}

renderEmotionRadios(catsData);

// 실습 문제 1 — for of
// 웹페이지에 과일 이름 배열 ['apple', 'banana', 'cherry']가 있습니다.
// 조건: for of를 사용해 배열 요소를 <li>로 만들어 <ul> 안에 넣으세요.
// let fruits = ["apple", "banana", "cherry"];
// let b = "";
// for (const value of fruits) {
//   b += `<ul>
//           <li>${value}
//         </ul>`;
// }
// console.log(b);

// 실습 문제 2 — import/export
// 파일1에서 export할 함수 greet(name)은 이름을 받아 "Hello, {name}!"를 alert로 띄우세요.
// 파일2에서 import해 greet('Seongho')를 실행하세요.
import { greeting } from "./greet.js";
greeting("Seongho");

// 실습 문제 3 — radio & checkbox inputs
// 성별(radio: male, female)과 관심사(checkbox: sports, music, reading)를 선택할 수 있는 폼을 만들어보세요.
// 조건: 선택한 값을 JS로 읽어 콘솔에 출력하세요.

// 실습 문제 4 — querySelector
// id가 'color-box'인 <div> 안에 버튼을 만들고, querySelector로 버튼을 찾아 클릭 시 div 배경색을 파란색으로 변경하세요.

// 실습 문제 5 — getElementsByClassName
// .highlight 클래스를 가진 <p> 태그 3개가 있습니다.
// 조건: getElementsByClassName으로 선택 후, 버튼 클릭 시 배경색을 노란색으로 바꾸세요.

// 실습 문제 6 — classList.remove / classList.add
// id가 'toggle-box'인 <div>에 .hidden 클래스를 추가/제거하는 버튼을 만드세요.
// 조건: classList.add, classList.remove를 모두 사용하세요.

// 실습 문제 7 — .includes()
// 배열 ['cat', 'dog', 'rabbit']에서 사용자 입력값(input)을 받아 includes()로 배열에 존재하는지 alert로 알려주세요.

// 실습 문제 8 — .filter() & .parentElement
// 할 일 배열 [{text: 'study', done: true}, {text: 'play', done: false}]에서 완료된 항목만 남기고, 화면에서 나머지를 삭제하세요.

// 응용 문제 1
// 과일 배열 ['apple', 'banana', 'cherry']를 import한 뒤 for of로 출력하고, 클릭한 항목은 classList.add로 'selected' 클래스를 추가하세요.

// 응용 문제 2
// querySelector로 선택한 라디오 버튼(male, female) 값을 가져와 includes(['male', 'female'])로 특정 값이 선택되었는지 확인하세요.

// 응용 문제 3
// checkbox 선택 항목 ['sports', 'music', 'reading'] 중 선택된 것만 filter로 걸러서 리스트에 출력하세요.

// 응용 문제 4
// getElementsByClassName('item')으로 선택한 요소들 중 parentElement의 id가 'container'인 것만 배경색을 바꾸세요.

// 응용 문제 5
// import한 배열 ['apple', 'banana', 'cherry']에서 'banana'가 있는지 includes()로 찾고, 결과에 따라 classList.add로 'found' 메시지를 표시하세요.

// 응용 문제 6
// radio 선택 값('fruit', 'vegetable')에 따라 배열 [{type: 'fruit', name: 'apple'}, {type: 'vegetable', name: 'carrot'}]을 filter해 <ul>로 출력하세요.

// 응용 문제 7
// querySelector로 선택한 버튼을 클릭하면 getElementsByClassName('item')으로 선택한 항목들의 hidden 클래스를 토글하세요.

// 응용 문제 8
// import/export로 분리된 모듈에서 filter(['apple', 'banana', 'cherry'], item => item !== 'banana')로 걸러진 데이터를 for of로 출력하세요.
