const navbar = document.querySelector(".navigation-container");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function (e) {
  console.log(e);
  e.preventDefault();
  const check = toggle.getAttribute("data-toggle");
  if (check == "false") {
    navbar.setAttribute("data-expended", true);
    toggle.setAttribute("data-toggle", true);
  } else {
    navbar.setAttribute("data-expended", false);
    toggle.setAttribute("data-toggle", false);
  }
});
// -----------------------------------
// var mySwiper = new Swiper(".swiper-container", {
//   loop: true,
//   speed: 1000,
//   autoplay: {
//     delay: 5000,
//   },
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 80,
//     depth: 500,
//     modifier: 1,
//     slideShadows: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// var swiperContainer = document.querySelector(".swiper-container");
// swiperContainer.addEventListener("click", function (event) {
//   var clickedSlide = event.target.closest(".swiper-slide");
//   if (clickedSlide) {
//     var clickedIndex = Array.from(clickedSlide.parentNode.children).indexOf(
//       clickedSlide
//     );
//     mySwiper.slideTo(clickedIndex);
//   }
// });

// ---------expended------------------------
// const submissionToggle = document.querySelector(".submission-detail-arrow");
// const submissionContent = document.querySelector(".submission-detail-content");
// const ruleToggle = document.querySelector(".rule-arrow");
// const ruleContent = document.querySelectorAll(".rule-content");

// // dataexpend
// submissionToggle.addEventListener("click", function () {
//   const check = submissionToggle.getAttribute("data-toggle");
//   console.log(check);
//   if (check === "false") {
//     submissionToggle.setAttribute("data-toggle", true);
//     submissionContent.setAttribute("data-expend", true);
//   } else {
//     submissionToggle.setAttribute("data-toggle", false);
//     submissionContent.setAttribute("data-expend", false);
//   }
// });
// ------------------------------------------
const card = document.querySelectorAll(".card");
const slider = document.querySelectorAll(".card1");
const slider2 = document.querySelectorAll(".card2");
const slider3 = document.querySelectorAll(".card3");
const slider4 = document.querySelectorAll(".card4");
const slider5 = document.querySelectorAll(".card5");

const swap = function (x, b) {
  if (x === "active") {
    b.setAttribute("data-trigger", "deactive1");
  }
  if (x === "deactive1") {
    b.setAttribute("data-trigger", "deactive2");
  }
  if (x === "deactive2") {
    b.setAttribute("data-trigger", "deactive3");
  }
  if (x === "deactive3") {
    b.setAttribute("data-trigger", "active");
  }
};
const slide = function (arr) {
  const getTrigger1 = arr[0].getAttribute("data-trigger");
  const getTrigger2 = arr[1].getAttribute("data-trigger");
  const getTrigger3 = arr[2].getAttribute("data-trigger");
  const getTrigger4 = arr[3].getAttribute("data-trigger");
  // console.log(getTrigger1);
  swap(getTrigger1, arr[0]);
  swap(getTrigger2, arr[1]);
  swap(getTrigger3, arr[2]);
  swap(getTrigger4, arr[3]);
};

slider.forEach((el) => el.addEventListener("click", () => slide(slider)));
slider2.forEach((el) => el.addEventListener("click", () => slide(slider2)));
slider3.forEach((el) => el.addEventListener("click", () => slide(slider3)));
slider4.forEach((el) => el.addEventListener("click", () => slide(slider4)));
slider5.forEach((el) => el.addEventListener("click", () => slide(slider5)));
// [slider, slider2, slider3, slider4, slider5].map((arr) =>
//   arr.forEach((el) => el.addEventListener("click", () => slide(el)))
// );
// --------------------------------------------------

const cardA = document.querySelectorAll(".cardA");
const cardB = document.querySelectorAll(".cardB");
const cardC = document.querySelectorAll(".cardC");
const cardD = document.querySelectorAll(".cardD");
const cardE = document.querySelectorAll(".cardE");
const resize = function () {
  if (window.innerWidth > 767) {
    [cardA, cardB, cardC, cardD, cardE].forEach((arr) =>
      arr.forEach((el) =>
        el.classList.remove("card1", "card2", "card3", "card4", "card5")
      )
    );
  }
  if (window.innerWidth < 767) {
    const sort = function (arr, b) {
      arr.forEach((el) => el.classList.add(b));
    };
    sort(cardA, "card1");
    sort(cardB, "card2");
    sort(cardC, "card3");
    sort(cardD, "card4");
    sort(cardE, "card5");
  }
};

resize();
window.addEventListener("resize", resize);
// --------------About page carousle------------------------------------------
const callforContainer = document.querySelector(".cfp-past-performances");
const callCard = document.querySelectorAll(".card-1");
console.log(callforContainer, callCard);

const change = function () {
  if (window.innerWidth > 720) {
    console.log("Desktop");
  }
  if (window.innerWidth < 720) {
    console.log("mobile");
  }
};

window.addEventListener("resize", change);

// SWIPER

var mySwiper = new Swiper(".swiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },

  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 150,
    depth: 200,
    slideShadows: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperContainer = document.querySelector(".swiper");
swiperContainer.addEventListener("click", function (event) {
  var clickedSlide = event.target.closest(".swiper-slide");
  if (clickedSlide) {
    var clickedIndex = Array.from(clickedSlide.parentNode.children).indexOf(
      clickedSlide
    );
    mySwiper.slideTo(clickedIndex);
  }
});
