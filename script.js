var backToTopBTN = document.getElementById("back-to-top");
  window.onscroll=function(){
    if (window.scrollY > 300) {
      backToTopBTN.style.display = "block";
    } else {
      backToTopBTN.style.display = "none";
    }
  }
  backToTopBTN.onclick= function(){
    window.scrollTo(0,0);
  }