import LoGo from "./Todo.jpg";

import "./index.css";

function Todologo() {
  const Logo = document.getElementById("logoShow");

  const img = document.createElement("img");
  img.src = LoGo;

  Logo.append(img);
}

Todologo();

function inputtext() {
  const inputText = document.getElementById("userInput").value;

  const showText = document.getElementById("showText");

  // showText.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.innerHTML = inputText;

  showText.append(h1);
}

