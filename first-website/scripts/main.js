const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/diet-coke.webp") {
    myImage.setAttribute("src", "images/diet-coke-cans.jpg");
  } else {
    myImage.setAttribute("src", "images/diet-coke.webp");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `I Love Diet Coke, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `I Love Diet Coke, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
