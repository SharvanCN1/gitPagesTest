const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc == "images/b-031.jpg") {
    myImage.setAttribute("src", "images/b-003.jpg");
  } else {
    myImage.setAttribute("src", "images/b-031.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `You are cool ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("Name");
  myHeading.textContent = `You are cool ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
