// This is the Higher-Order Function that creates a Closure
function changeBackgroundTo(color) {
  // The inner function is the 'closure'
  // It 'traps' the 'color' variable in its memory
  return function () {
    document.body.style.backgroundColor = color;
  };
}

// We assign the RESULT of the function (the closure) to the event
document.getElementById("redBtn").onclick = changeBackgroundTo("#de1756");
document.getElementById("blueBtn").onclick = changeBackgroundTo("#007bff");
document.getElementById("greenBtn").onclick = changeBackgroundTo("#28a745");
document.getElementById("yellowBtn").onclick = changeBackgroundTo("#e8ef63");
