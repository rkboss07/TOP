const body = document.querySelector('body');
const paragraph = document.createElement("p");
paragraph.textContent = "Hey, I am red!";
paragraph.style.color = "red";
body.appendChild(paragraph);

const heading3 = document.createElement("h3");
heading3.textContent = "I'm a blue h3!";
heading3.style.color = "blue";
body.appendChild(heading3);

const container = document.createElement("div");
container.classList.add("container");
container.style.backgroundColor = "pink";
container.style.border = "1px solid black";

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";
container.appendChild(heading1);

const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";
container.appendChild(paragraph2);

body.appendChild(container);

const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
  console.log(e.target);
});
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
