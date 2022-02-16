"use strict"

//テキストと画像のsrcを取得し空白を削除して値を返す
function getText (element) {
  let text = element.textContent;
  text = text.replace(/\s+/g,"");

  let img = element.getElementsByTagName("img")[0];
  if (img) {
    let imgSrc = img.getAttribute("src");
    text = text + imgSrc;
  }

  return text;
}