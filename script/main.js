// (function() {
//   var carousel = document.getElementsByClassName('carousel')[0];
//   var carouselUl = carousel.getElementsByTagName('ul')[0];
//   var carouselArr = carouselUl.getElementsByTagName('li');
//   var len = carouselArr.length;
//   var nextBtn = document.getElementsByClassName('next')[0];
//   var prevBtn = document.getElementsByClassName('prev')[0];


//   function nextHandler(e) {
//     e.preventDefault();
//     var t = carouselUl.removeChild(carouselArr[len-1]);

//     carouselUl.insertBefore(t, carouselArr[0]);
//   }

//   function prevHandler(e) {
//     e.preventDefault();
//     var t = carouselUl.removeChild(carouselArr[0]);

//     carouselUl.insertBefore(t, carouselArr[len-2].nextSibling);
//   }

//   nextBtn.addEventListener('click', nextHandler, false);
//   prevBtn.addEventListener('click', prevHandler, false);

//   function swipedetect(el, callback){
   
//     var touchsurface = el,
//     swipedir,
//     startX,
//     startY,
//     distX,
//     distY,
//     threshold = 150, //required min distance traveled to be considered swipe
//     restraint = 100, // maximum distance allowed at the same time in perpendicular direction
//     allowedTime = 300, // maximum time allowed to travel that distance
//     elapsedTime,
//     startTime,
//     handleswipe = callback || function(swipedir){};
   
//     touchsurface.addEventListener('touchstart', function(e){
//       var touchobj = e.changedTouches[0],
//       swipedir = 'none',
//       dist = 0,
//       startX = touchobj.pageX,
//       startY = touchobj.pageY,
//       startTime = new Date().getTime(); // record time when finger first makes contact with surface
//       e.preventDefault();
//     }, false);
   
//     touchsurface.addEventListener('touchmove', function(e){
//       e.preventDefault() // prevent scrolling when inside DIV
//     }, false);
   
//     touchsurface.addEventListener('touchend', function(e){
//       var touchobj = e.changedTouches[0],
//       distX = touchobj.pageX - startX, // get horizontal dist traveled by finger while in contact with surface
//       distY = touchobj.pageY - startY, // get vertical dist traveled by finger while in contact with surface
//       elapsedTime = new Date().getTime() - startTime; // get time elapsed
//       if (elapsedTime <= allowedTime){ // first condition for awipe met
//         if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
//           swipedir = (distX < 0)? 'left' : 'right'; // if dist traveled is negative, it indicates left swipe
//         } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
//           swipedir = (distY < 0)? 'up' : 'down'; // if dist traveled is negative, it indicates up swipe
//         }
//       }
//       handleswipe(swipedir);
//       e.preventDefault();
//    }, false);
//   }

//   swipedetect(carouselUl, function(swipedir){
//     if (swipedir =='left') {
//       var tprev = carouselUl.removeChild(carouselArr[0]);
//       carouselUl.insertBefore(t, carouselArr[len-2].nextSibling);
//     } else if (swipedir == 'right') {
//       var tnext = carouselUl.removeChild(carouselArr[len-1]);
//       carouselUl.insertBefore(t, carouselArr[0]);
//     }
//   });

// })();

$(document).ready(function() {

  /* some custom settings */
  $('.iosslider').iosSlider({
    snapToChildren: true,
    desktopClickDrag: true,
    infiniteSlider: true,
    keyboardControls: true,
    responsiveSlideContainer: true,
    responsiveSlides: true,
    navNextSelector: $('.prev'),
    navPrevSelector: $('.next')
  });

});