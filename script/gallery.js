// $(function () {
//   var swiper = new Swiper('.gallery_inner ', {
//     slidesPerView: 3,//보여지는 갤러리 수
//     spaceBetween: 60,//갤러리 사이 간격
//     speed: 8000,//버튼을 슬라이드가 넘어가는 시간
//     autoplay: {
//         delay: 0,//자동으로 넘어가기 전 머무르는 시간
//         disableOnInteraction: false,
//       },
//       loop: true,//슬라이드 무한반복
//     breakpoints: {
//       800: {
//         slidesPerView: 3,  //브라우저가 768보다 클 때
//         spaceBetween: 20,
//       },

//       700: {
//         slidesPerView: 2,  //브라우저가 768보다 클 때
//         spaceBetween: 20,
//       },

//       500: {
//         slidesPerView: 1,  //브라우저가 1024보다 클 때
//         spaceBetween: 20,
//       },

//       400: {
//         slidesPerView: 1,  //브라우저가 1024보다 클 때
//         spaceBetween: 20,
//       },

//       300: {
//         slidesPerView: 1,  //브라우저가 1024보다 클 때
//         spaceBetween: 20,
//       },
//     },
//   });
// });


const swiper = new Swiper('.gallery_inner ', {
  //$('.gallery_inner').fullpage({
    slidesPerView: 2,//보여지는 갤러리 수
    spaceBetween: 60,//갤러리 사이 간격
    speed: 8000,//버튼을 슬라이드가 넘어가는 시간
	  autoplay: {
        delay: 0,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    breakpoints: {
      800: {
        slidesPerView: 2,  //브라우저가 768보다 클 때
        spaceBetween: 20,
      },
  
      700: {
        slidesPerView: 2,  //브라우저가 768보다 클 때
        spaceBetween: 20,
      },

      600: {
        slidesPerView: 1,  //브라우저가 768보다 클 때
        spaceBetween: 20,
      },
  
      500: {
        slidesPerView: 1,  //브라우저가 1024보다 클 때
        spaceBetween: 20,
      },
  
      400: {
        slidesPerView: 1,  //브라우저가 1024보다 클 때
        spaceBetween: 20,
      },
  
      300: {
        slidesPerView: 1,  //브라우저가 1024보다 클 때
        spaceBetween: 20,
      },
    },
  });


window.addEventListener('resize', function(){ // 화면 리사이즈 이벤트가 발생할 경우
  swiper.autoplay.stop(); // swiper autoplay를 멈춘 다음
  swiper.autoplay.start(); // 다시 실행
});
