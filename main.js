document.querySelector("button").addEventListener("click", () => {
    alert("what do you want!"); 
});

const CertificateImg = document.querySelector("img");

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }


  myButton.addEventListener("click", () => {
    setUserName();
  });
  




// CertificateImg.querySelector(">").addEventListener("click", () => {
//     const mySrc = CertificateImg.getAttribute("src");
//     if 

// });
