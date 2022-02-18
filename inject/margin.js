const autoSkip = false;

const backLink = document.getElementsByClassName("backLink")[0];

if (backLink && autoSkip) {
  let link = backLink.getElementsByTagName("a")[0];
  link = link.getAttribute("href");
  link = link.split("('")[1];
  link = link.split("')")[0];

  window.location = link;
}