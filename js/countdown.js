(function() {
  angular.module('app', []).directive('countdown', [
    'Util',
    '$interval',
    function(Util,
    $interval) {
      return {
        restrict: 'A',
        scope: {
          date: '@'
        },
        link: function(scope,
    element) {
          var future;
          future = new Date(scope.date);
          $interval(function() {
            var diff;
            diff = Math.floor((future.getTime() - new Date().getTime()) / 1000);
            return element.text(Util.dhms(diff));
          },
    1000);
        }
      };
    }
  ]).factory('Util', [
    function() {
      return {
        dhms: function(t) {
          var days,
    hours,
    minutes,
    seconds;
          days = Math.floor(t / 86400);
          t -= days * 86400;
          hours = Math.floor(t / 3600) % 24;
          t -= hours * 3600;
          minutes = Math.floor(t / 60) % 60;
          t -= minutes * 60;
          seconds = t % 60;
          return [days + 'd',
    hours + 'h',
    minutes + 'm',
    seconds + 's'].join(' ');
        }
      };
    }
  ]);

}).call(this);

// Set the date we're counting down to
var countDownDate = new Date("May 19, 2020 18:00:00 UTC").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="timer"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
  	window.location = "buy.html";
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
