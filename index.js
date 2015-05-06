window.addEventListener("load", initApp, false);

var ongoingTouches = new Array();

function initApp() {
  addEventListeners();
  startup();
}

function addEventListeners() {
  //document.getElementById("initButton").addEventListener("click", startup, false);
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

function handleStart(event) {
  event.preventDefault();
  log("touchstart.");
  var el = document.querySelector("#canvas");
  var ctx = el.getContext("2d");
  var touches = event.changedTouches;
  
  for (var i = 0, len = touches.length; i < len; i++) {
    log("touchstart:" + i + "...");
    var thisTouch = touches[i];
    ongoingTouches.push(Object.create(thisTouch));
    var color = colorForTouch(thisTouch);
    ctx.beginPath();
    ctx.arc(thisTouch.pageX, thisTouch.pageY, 4, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
    log("touchstart:" + i + ".");
  }
}

function handleMove(event) {
  //console.log("touchmove event:", event);
}

function handleEnd(event) {
  //console.log("touchend event:", event);
}

function handleCancel(event) {
  //console.log("touchcancel event:", event);
}

function colorForTouch(touch) {
  var r = touch.identifier % 16;
  var g = Math.floor(touch.identifier / 3) % 16;
  var b = Math.floor(touch.identifier / 7) % 16;
  r = r.toString(16); // make it a hex digit
  g = g.toString(16); // make it a hex digit
  b = b.toString(16); // make it a hex digit
  var color = "#" + r + g + b;
  log("color for touch with identifier " + touch.identifier + " = " + color);
  return color;
}

function log(msg) {
  var el = document.getElementById("log");
  el.insertAdjacentHTML("afterbegin", msg + "\n");
}