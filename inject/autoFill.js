"use strict"

const fields = document.getElementsByClassName("field");

let question;
let inputs;
let choices;
let allCorrectAnsObj;



chrome.storage.local.get(null, function (value) {
  allCorrectAnsObj = value;

  if (fields.length) {
    const fieldArray = Array.from(fields);
    fieldArray.forEach(rootElement => {
      autoFill(rootElement);
    });

  } else {
    const rootElement = document.getElementsByClassName("takeQuestionDiv")[0];
    autoFill(rootElement);
  }
})



function autoFill (root) {
  question = "";
  inputs = [];
  choices = [];
  
  getQueElement(root);
  autoInput(question);

  console.log(question);
  console.log(choices)
  console.log(inputs)
}



//要素取得
function getQueElement (element) {
  getQuestion(element);
  getInput(element);
  // console.log({getQueElement : inputs})

  let choiceTable = element.getElementsByClassName("multiple-choice-table")[0];
  if (choiceTable) {
    getChoices(element);
  }




  function getQuestion (block) {
    let queElement = block.getElementsByClassName("legend-visible")[0];
    question = getText(queElement);
  }

  function getInput (block) {
    let inputCollection = block.getElementsByTagName("input");
    let inputArray = Array.from(inputCollection);

    inputArray.forEach(inputElement => {
      let inputId = inputElement.getAttribute("id");
      inputs.push(inputId);
    });
  }

  function getChoices (block) {
    let choiceDivs = block.getElementsByClassName("multiple-choice-table")[0].getElementsByClassName("vtbegenerated inlineVtbegenerated");
    let choiceArray = Array.from(choiceDivs);

    choiceArray.forEach(choiceElement => {
      choices.push(getText(choiceElement));
    });
  }
  
}

//自動回答
function autoInput (queKey) {
  matchStorage(queKey);

  function matchStorage (key) {
    if (key in allCorrectAnsObj) {
      let correctAns = allCorrectAnsObj[key];
      autoChoice(correctAns);

    } else {
      alert("保存されていない問題を検出しました");
    }
  }

  function autoChoice (correct) {
    if (choices.length) {
      // console.log("選択");

      for (let j=0; j<choices.length; j++) {
        if (choices[j] === correct) {
          console.log(choices[j]);
          let correctId = inputs[j];
          let selection = document.getElementById(correctId);
          selection.checked = true;
        }
      }

    } else {
      // console.log("入力");

      // console.log({"debug":[question,inputs,choices]})
      for (let j=0; j<inputs.length; j++) {
        let textArea = document.getElementById(inputs[j]);
        textArea.value = correct[j];
      }
    }
  }
}

