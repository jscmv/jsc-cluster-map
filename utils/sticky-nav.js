export function stickyNav() {
  window.addEventListener("scroll", function () {
    if (!window.matchMedia("screen and (max-width: 992px)").matches) {
      if (window.scrollY > 105) {
        document.getElementById("navbar_top").classList.add("fixed-top");
        let navbar_height = document.querySelector(".navbar").offsetHeight;
        document.body.style.paddingTop = "65px";
        document.getElementById("navbar-brand").style.display = "block";
        if (!window.matchMedia("screen and (max-width: 992px)").matches) {
          const x = document.getElementsByClassName("margin-right-cl");

          var i;
          for (i = 0; i < x.length; i++) {
            x[i].style.marginRight = "55px";
          }
        }
      } else {
        document.getElementById("navbar_top").classList.remove("fixed-top");
        document.body.style.paddingTop = "0";
        document.getElementById("navbar-brand").style.display = "none";
        if (!window.matchMedia("screen and (max-width: 992px)").matches) {
          const d = document.getElementsByClassName("margin-right-cl");
          var j;
          for (j = 0; j < d.length; j++) {
            d[j].style.marginRight = "0px";
          }
        }
      }
    }
    if (window.matchMedia("screen and (max-width: 992px)").matches) {
      if (window.scrollY > 167) {
        document.getElementById("navbar_top").classList.add("fixed-top");
        let navbar_height = document.querySelector(".navbar").offsetHeight;
        document.body.style.paddingTop = "65px";
        document.getElementById("navbar-brand").style.display = "block";
        if (!window.matchMedia("screen and (max-width: 992px)").matches) {
          const x = document.getElementsByClassName("margin-right-cl");
         
          var i;
          for (i = 0; i < x.length; i++) {
            x[i].style.marginRight = "55px";
          }
        }
      } else {
        document.getElementById("navbar_top").classList.remove("fixed-top");
        document.body.style.paddingTop = "0";
        document.getElementById("navbar-brand").style.display = "none";
        if (!window.matchMedia("screen and (max-width: 992px)").matches) {
          const d = document.getElementsByClassName("margin-right-cl");

          var j;
          for (j = 0; j < d.length; j++) {
            d[j].style.marginRight = "0px";
          }
        }
      }
    }
  });
}
