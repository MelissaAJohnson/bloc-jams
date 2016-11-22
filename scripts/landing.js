window.addEventListener("load", function animatePoints(event) {

   var points = document.getElementsByClassName('point');

  //  var revealFirstPoint = function() {
  //      points[0].style.opacity = 1;
  //      points[0].style.transform = "scaleX(1) translateY(0)";
  //      points[0].style.msTransform = "scaleX(1) translateY(0)";
  //      points[0].style.WebkitTransform = "scaleX(1) translateY(0)";
  //      points[0].style.transition = "all 2s ease-in-out";
  //  };
   //
  //  var revealSecondPoint = function() {
  //      points[1].style.opacity = 1;
  //      points[1].style.transform = "scaleX(1) translateY(0)";
  //      points[1].style.msTransform = "scaleX(1) translateY(0)";
  //      points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
  //  };
   //
  //  var revealThirdPoint = function() {
  //      points[2].style.opacity = 1;
  //      points[2].style.transform = "scaleX(1) translateY(0)";
  //      points[2].style.msTransform = "scaleX(1) translateY(0)";
  //      points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
  //  };
   //
  //  revealFirstPoint();
  //  revealSecondPoint();
  //  revealThirdPoint();

  // reveal point should animate a single point
  // it should take in one index number
   var revealPoint = function(index) {
     points[index].style.transitionDelay = "2s";
     points[index].style.opacity = 1;
     points[index].style.transform = "scaleX(1) translateY(0)";
     points[index].style.msTransform = "scaleX(1) translateY(0)";
     points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
     points[index].style.transition = "all 2s ease-in-out";
   }

   for (var i = 0; i < points.length; i++) {
     revealPoint(i);
   }
});
