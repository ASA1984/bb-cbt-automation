"use strict"

//テキストと画像のsrcを取得し空白を削除して値を返す
function getText (element) {
  let text = element.innerText;
  text = text.replace(/\s+/g,"");

  let img = element.getElementsByTagName("img")[0];
  if (img) {
    let imgSrc = img.getAttribute("src");
    text = text + imgSrc;
  }

  const hideElement = element.getElementsByClassName("hideoff");
  if (hideElement.length) {
    for (let i=0; i<hideElement.length; i++) {
      const alphabet = "abcdefghijklmnopqrstuvwxyz"

      let inputSpace = text.match("空欄" + (i+1))[0];
      let spaceStrNum = alphabet.slice(i,i+1);

      text = text.replace(String(inputSpace),"[" + String(spaceStrNum) + "]");

      if (text.match(/表材料・ドリル径に対応した切削速度/)) {
        text = text.replace("[a]","[S]").replace("[b]","[F]");
      }
    }
  }

  return text;
}


// function temporary () {
//   let labelTable = document.getElementsByClassName("quesTable");
//   let labelArray = Array.from(labelTable);
  
//   labelArray.forEach(labelElement => {
//     let labelText = labelElement.innerText;
//     if (labelText.match(/正解 : /)) {
//       labelText = labelText.replace("正解 : ", "");
//     }
//   })

//   for (let i=0; i<hideElement.length; i++) {


//     let inputSpace = text.match("空欄" + (i+1))[0];

//     let spaceLabel = labelArray[i];
//     text = text.replace(String(inputSpace),"[" + String(spaceLabel) + "]");
//   }
// }