let colors = ["#00b4d8", "#F98404", "#12b35a", "#8338ec", "#3a86ff"];

(function () {
  setBioEventListener();
})();

/* Colors */

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

/* Bio Toggles */

function setBioEventListener() {
  Array.from(document.getElementsByTagName("button")).forEach((e) => {
    e.addEventListener("click", bioToggle);
  });
}

function bioToggle(e) {
  let bioType = e.target;
  let color = getRandomColor();
  off(bioType);
  bioType.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
  let bioTypeElement = document.getElementsByClassName(bioType.id)[0];
  if (bioTypeElement !== undefined) bioTypeElement.classList.add("show");
}

function off(bioType) {
  Array.from(document.getElementsByTagName("button")).forEach((btn) => {
    btn.style.borderColor = "#96979c";
    btn.style.color = "#96979c";
    btn.style.fontWeight = "normal";
  });
  Array.from(document.getElementsByClassName("bio")).forEach((e) => {
    e.classList.remove("show");
  });
}
