
// start basic 
// // //////load
let load = document.querySelector(".load");
window.onload = function () {
  load.style.display = "none";
  document.body.style.overflowY = "auto";
};
// head.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// };
// window.onscroll = function () {
//   if (scrollY >= 650) {
//     header.classList.add("header-fixed");
//   } else {

//     header.classList.remove("header-fixed");
//   }
// };
// end basic 

// start header 



// start search  
let search= document.querySelector(".search")
let search_icon= document.querySelector(".search i")
let links_search= document.querySelector(".links-search .container")
// start bars 
let bar= document.querySelector(".bar")
let bar_icon= document.querySelector(".bar i")
let page_links= document.querySelector(".page-links")
let links= document.querySelector(".links")


search.onclick=()=>{
links_search.classList.toggle("top")
search_icon.classList.toggle("rotate-180")
page_links.classList.remove("width-70vw")
}
// start action bar 
bar.onclick=()=>{
links_search.classList.remove("top")
    bar.classList.toggle("close")
    bar_icon.classList.toggle("fa-close")
    page_links.classList.toggle("width-70vw")

}

let tops =document.querySelector(".top")
tops.onclick=()=>{
  window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

}

// end search 
// end header 







// /////////////////////////////////////
// // plugins
$(".fade1")
  .slick({
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    rtl: true,
  })
  .slickAnimation();
// // start swip photo 


// // ////autoplay 2
(function($){
    "use strict";

    if (screen.width <= 350) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }
     else if (screen.width <= 768) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }
    else if (screen.width <= 991) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }
    //
    else if (screen.width >= 991) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }

})(jQuery);


// // end slider
// ////////////////////////
// // start animation scroll
AOS.init();
// // end animation scroll
// //////////////////////////////

// // ///////////////////////////////

// // start counter 
//      // count in who us slide 

// // end count in who us slide 


// // end counter 



