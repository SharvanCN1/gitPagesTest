const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc == "images/b-031.jpg") {
    myImage.setAttribute(
      "src",
      "/home/sharvancn/Pictures/Wallpapers/b-003.jpg",
    );
  } else {
    myImage.setAttribute("src", "images/b-031.jpg");
  }
});
