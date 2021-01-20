var pages = new Pageable("#hompage", {
  pips: true, // display the pips
  animation: 400, // the duration in ms of the scroll animation
  delay: 150, // the delay in ms before the scroll animation starts
  orientation: "vertical", // or horizontal
  swipeThreshold: 50, // swipe / mouse drag distance (px) before firing the page change event
  //freeScroll: false,
  events: {
    wheel: true, // enable / disable mousewheel scrolling
    mouse: true, // enable / disable mouse drag scrolling
    touch: true, // enable / disable touch / swipe scrolling
    keydown: true, // enable / disable keyboard navigation
  },
});

setTimeout(function () {
  window.scrollTo(0, 1);
}, 1000);

document.getElementById("gif").src =
  "img/logo_good_quality.gif?a=" + Math.random();

//Pips 조절
const pips = document.querySelector(".pg-pips");
const section0 = document.querySelector(".welcome");

pages.on("scroll", () => {
  if (Math.floor(pages.scrollPosition) > section0.clientHeight/2) {
    console.log("bar 생성  " + Math.floor(pages.scrollPosition));
    pips.classList.add("appear");
    pips.style.display = "flex";
  } else {
    console.log("bar 제거  " + Math.floor(pages.scrollPosition));
    pips.classList.remove("appear");
    pips.style.display = "none";
  }
});

// 새로 고침시 첫 페이지로 이동하기
// window.addEventListener("load", () => {
//   pages.scrollToAnchor("#page-0");
// });

//767px 이하면 extra 메세지 안 보이게 설정
const extra = document.querySelectorAll(".extra");
if (document.body.offsetWidth > 767) {
  extra.forEach((e) => e.classList.add("visible"));
} else {
  extra.forEach((e) => e.classList.remove("visible"));
}
