let test = document.querySelector(".logo-heading");

test.addEventListener(
  "mouseenter",
  function (event) {
    event.target.style.fontSize = "5rem";

    setTimeout(function () {
      event.target.style.fontSize = "2rem";
    }, 500);
  },
  false
);
//paragraph keydown//
document.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
//wheel//
function zoom(event) {
  event.preventDefault();
  if (event.deltaY < 0) {
    scale *= event.deltaY * -1;
  } else {
    scale /= event.deltaY * 1;
  }
  scale = Math.min(Math.max(0.25, scale), 1);
  el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector("img");
document.onwheel = zoom;
//focus//
const password = document.querySelector('input[type="password"]');

password.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
});

password.addEventListener("blur", (event) => {
  event.target.style.background = "";
});
//dblclick//
const card = document.querySelector("p");

card.addEventListener("dblclick", function (e) {
  card.classList.toggle("large");
});
