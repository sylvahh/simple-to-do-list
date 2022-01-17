var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

// create list item
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  delBtn;

  // create delete button
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("delete"));
  li.appendChild(btn);
  btn.onclick = removeParent;
}

// click event
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

//keypress event
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

// stikethrough event
function crossOffItem(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
}

function listLength() {
  return listItem.length;
}

// delete function
function removeParent(evt) {
  evt.target.parentNode.remove();
}

// event listeners
ul.addEventListener("dblclick", crossOffItem);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
