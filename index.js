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
pages.on("scroll", () => {});

document.getElementById("gif").src =
  "img/logo_good_quality.gif?a=" + Math.random();

const pips = document.querySelector(".pg-pips");
const section0 = document.querySelector(".welcome");

pages.on("scroll", () => {
  if (Math.floor(pages.scrollPosition) > 0) {
    console.log("bar 생성  " + Math.floor(pages.scrollPosition));
    pips.classList.add("appear");
    pips.classList.remove("disappear");
    pips.style.display = "flex";
  } else {
    console.log("bar 제거  " + Math.floor(pages.scrollPosition)); //section 0이므로
    pips.classList.remove("appear");
    pips.classList.add("disappear");
  }
});

if (Math.floor(pages.scrollPosition) < 1) {
  //section0 에서는 pips 동작 block
  pips.style.display = "none";
}

// 새로 고침시 첫 페이지로 이동하기
window.addEventListener("load", () => {
  pages.scrollToAnchor("#page-0");
});

//767px 이하면 extra 메세지 안 보이게 설정
const extra = document.querySelectorAll(".extra");
if (document.body.offsetWidth > 767) {
  extra.forEach((e) => e.classList.add("visible"));
} else {
  extra.forEach((e) => e.classList.remove("visible"));
}

//페이지 active되면 stop 시키기

// const sections = document.querySelectorAll(".section");
// sections.forEach((e) => {
//   if (e.classList.contains("pg-active")) {
//     console.log(e.classList);

//     setTimeout(() => {
//       console.log("잠시 멈춤");
//       document.body.style.overflow = "hidden";
//       //   pages = new Pageable("#hompage", {
//       //     events: {
//       //       wheel: false, // enable / disable mousewheel scrolling
//       //     },
//       //   });
//     }, 5000);
//   }
// });

// pages.on("scroll.end", (e) => {
//   console.log(e.index);
//   // do something when scrolling ends
// });
// if (클래스에 pg-active가 있으면)
//setTimeOut으로 events: wheel: false로 하기. 한 100ms동안??

//스크롤 한 양이 섹션 크기와 동일해지면 스크롤 멈추게 하기!!
