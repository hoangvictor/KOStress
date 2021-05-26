var navbar_brand_img =  document.querySelector(".navbar-brand img");
var navbar_brand = document.querySelector(".navbar-brand");
var navbar = document.querySelector(".navbar");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navbar_brand_img.setAttribute("src", "images/logo-black.png");
      navbar_brand.style.setProperty("color", "black", "important");
      navbar.style.backgroundColor = "white";
      for (let i = 1; i <= 4; i++) {
        document.querySelector(".nav-link" + i).style.setProperty("color", "black", "important");
      }
    } else {
      navbar_brand_img.setAttribute("src", "images/logo-white.png");
      navbar_brand.style.setProperty("color", "white", "important");
      navbar.style.backgroundColor = "inherit";
      for (let i = 1; i <= 4; i++) {
        document.querySelector(".nav-link" + i).style.setProperty("color", "white", "important");
      }
    }
};

document.querySelector(".btn-navbar").addEventListener("click", function() {
  navbar_brand_img.setAttribute("src", "images/logo-black.png");
  navbar_brand.style.setProperty("color", "black", "important");
  navbar.style.backgroundColor = "white";
  for (let i = 1; i <= 4; i++) {
    document.querySelector(".nav-link" + i).style.setProperty("color", "black", "important");
  }
});
