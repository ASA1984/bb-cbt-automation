"use strict"

const queAndAnsObj = {};

const details = document.getElementsByClassName("details");



for (let i=0; i<details.length; i++) {
  let question= "";
  let answer;


  //問題文を取得
  (function getQuestion () {
    let questionElement = details[i].getElementsByClassName("vtbegenerated inlineVtbegenerated")[0];
    question = getText(questionElement);
  })();


  //正答を取得
  (function getAnswer () {
    let answerTables = details[i].getElementsByClassName("bWhite");
    let answersArray = [];
    //解答が複数だった場合
    if (answerTables) {
      for (let j=0; j<answerTables.length; j++) {
        let answerElement = answerTables[j].nextElementSibling;
        answersArray.push(answerElement.textContent);
      }
      answer = answersArray

    //解答が単一の場合
    } else {
      let answerDivs = details[i].getElementsByClassName("reviewQuestionsAnswerDiv");

      for (let j=0; j<answerDivs.length; j++) {
        let answerElement = answerDivs[j];
  
        let correctFlag = answerElement.getElementsByClassName("correctAnswerFlag")[0];
        if (correctFlag) {
          answerElement = answerElement.getElementsByClassName("answerTextSpan")[0];
          answer = getText(answerElement);
        }
      }
    }
  })();

  //オブジェクトに{問題文:正答}の形で保存
  queAndAnsObj[question] = answer;
}

console.log(queAndAnsObj);

chrome.storage.local.set(queAndAnsObj);