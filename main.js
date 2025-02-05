document.querySelector("button").addEventListener("click", () => {
    alert("what do you want!"); 
});

const CertificateImg = document.querySelector("img");

CertificateImg.querySelector(">").addEventListener("click", () => {
    const mySrc = CertificateImg.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
      } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
      }
});
