// document.querySelector("button").addEventListener("click", () => {
//     alert("Please enter your name!"); 
// });


//variable
// let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");
let myImage = document.querySelector("img");
let mySecButton = document.querySelector("#try");
let myUserName = document.querySelector("#Name");


function setUserName() { //set user name function
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `${myName}`;
    }
  }


  myUserName.addEventListener("click", () => {//function called
    setUserName();
  });

  mySecButton.addEventListener("click", () => {//image changer
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "image/computer science cropped.png") {
      myImage.setAttribute("src", "image/bekphnqftcb41 4.png");
    } else {
      myImage.setAttribute("src", "image/women yelling at cat cropped.png");
    } 
  });



//test
// let plusBtn = document.querySelector("#next");

// plusBtn.addEventListener("click", () => {
//   const myImg = myImage.getAttribute("Img");
//   if (myImg === "image/computer science.jpg") {
//     myImage.setAttribute("Img", "image/download.jpg");
//   } if (myImg === "image/download.jpg") {
//     myImage.setAttribute("Img", "image/women yelling at cat.jpg");
//   } if (myImg === "image/women yelling at cat.jpg") {
//     myImage.setAttribute("Img", "image/computer science.jpg");
//   }
//   console.log(plusBtn);
// });

