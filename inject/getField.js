"use strict"
//シングルページ・選択用

const queAnsChoicesObjArray = [];
const queNumAndInputsIdArray = [];

const fields = document.getElementsByClassName("field");

for (let i=0; i<fields.length; i++) {
  let question = "";
  let choices = [];
  let inputs = [];
  
  //問題文の取得
  (function getQuestion () {
    let questionElement = fields[i].getElementsByClassName("legend-visible")[0];
    question = getText(questionElement);
  })();


  //選択肢の取得
  (function getChoices () {
    let choiceDivs = fields[i].getElementsByClassName("multiple-choice-table")[0].getElementsByClassName("vtbegenerated inlineVtbegenerated");

    for (let j=0; j<choiceDivs.length; j++) {
      let choiceElement = choiceDivs[j];
      choices.push(getText(choiceElement));
    }
  })();


  //選択ボタンの取得
  (function getInputs () {
    let inputElements = fields[i].getElementsByClassName("multiple-choice-table")[0].getElementsByClassName("multiple-choice-question");

    for (let j=0; j<inputElements.length; j++) {
      let inputId = inputElements[j].getAttribute("id");
      inputs.push(inputId);
    }
  })();

  
  //配列にオブジェクト"{問題文:[選択肢]}"を格納
  queAnsChoicesObjArray.push({[question] : choices});

  //配列にオブジェクト"{問題番号:[選択ボタンのid]}"を格納
  queNumAndInputsIdArray.push(inputs);
}

// console.log(queAnsChoicesObjArray);
// console.log(queNumAndInputsIdArray);


(function matchStorage () {
  chrome.storage.local.get(null, function matchQuestions (allCorrectAnsObj) {
    // console.log(allCorrectAnsObj);
    

    for (let i=0; i<queAnsChoicesObjArray.length; i++) {
      let queAndChoicesObj = queAnsChoicesObjArray[i];
      let queKey = Object.keys(queAndChoicesObj)[0];
      let choiceArray = Object.values(queAndChoicesObj)[0];

      if (queKey in allCorrectAnsObj) {
        let correctChoice = allCorrectAnsObj[queKey];

        for (let j=0; j<choiceArray.length; j++) {
          if (choiceArray[j] === correctChoice) {
            choiceAutofill(i,j);
          }
        }
      } else {
        alert("未取得の問題が検出されました")
      }
    }
  });
})();


//指定した問題番号,選択肢番号のボタンを自動入力
function choiceAutofill (queNum, ansNum) {
  let selectId = queNumAndInputsIdArray[queNum];
  selectId = selectId[ansNum];
  
  let selectInput = document.getElementById(selectId);
  selectInput.checked = true;
}