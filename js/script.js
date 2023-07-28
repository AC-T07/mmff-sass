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


// SWIPER

var mySwiper = new Swiper('.swiper', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },

  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 150,
    depth: 200,
    slideShadows: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

var swiperContainer = document.querySelector('.swiper');
swiperContainer.addEventListener('click', function (event) {
  var clickedSlide = event.target.closest('.swiper-slide');
  if (clickedSlide) {
    var clickedIndex = Array.from(clickedSlide.parentNode.children).indexOf(clickedSlide);
    mySwiper.slideTo(clickedIndex);
  }
});
