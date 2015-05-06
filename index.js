window.addEventListener("load", initApp, false);

function initApp() {
  addEventListeners();
}

function addEventListeners() {
  document.getElementById("initButton").addEventListener("click", startup, false);
}

function startup() {
  var el = document.getElementById("canvas");
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchmove", handleMove, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchleave", handleEnd, false);
  log("initialized.");
}

function handleStart() {
  
}

function handleMove() {
  
}

function handleEnd() {
  
}

function handleCancel() {
  
}

function log(msg) {
  var el = document.getElementById("log");
  el.insertAdjacentHTML("afterbegin", msg + "\n");
}