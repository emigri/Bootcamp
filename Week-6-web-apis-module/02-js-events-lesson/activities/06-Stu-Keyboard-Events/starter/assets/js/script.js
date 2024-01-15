function keydownAction(event) {
  // TODO: Complete keydown function
  var keyCode = event.code;
  var key = event.key;

  document.querySelector("#code").textContent = keyCode
  document.querySelector("#key").textContent = key
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);

// TODO: Add Event Listener for "keydown" event



