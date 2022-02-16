"use strict"

const queAndAnsObj = {};

const details = document.getElementsByClassName("details");



for (let i=0; i<details.length; i++) {
  let question= "";
  let answer = "";


  //問題文を取得
  (function getQuestion () {
    let questionElement = details[i].getElementsByClassName("vtbegenerated inlineVtbegenerated")[0];
    question = getText(questionElement);
  })();


  //正答を取得
  (function getAnswer () {
    let answerDivs = details[i].getElementsByClassName("reviewQuestionsAnswerDiv");

    for (let j=0; j<answerDivs.length; j++) {
      let answerElement = answerDivs[j];

      let correctFlag = answerElement.getElementsByClassName("correctAnswerFlag")[0];
      if (correctFlag) {
        answerElement = answerElement.getElementsByClassName("answerTextSpan")[0];
        answer = getText(answerElement);
      }
    }
  })();


  //オブジェクトに{問題文:正答}の形で保存
  queAndAnsObj[question] = answer;
}


// console.log(queAndAnsObj);

chrome.storage.local.set(queAndAnsObj);