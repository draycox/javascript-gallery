'use strict';
(function() {
  var clock = {

    element: document.querySelector('.outer_face'),
    seconds: 0,
    minutes: 0,
    hours: 0,
    
    init: function() {
      clock.hands = {
        second: clock.element.querySelector('.second'),
        minute: clock.element.querySelector('.minute'),
        hour: clock.element.querySelector('.hour'),  
      };

      this.update( new Date() );

      for( var hand in this.hands ) {
        this.hands[hand].style.display = 'block';
      }
    },

    update: function( time ) {

      this.seconds = time.getSeconds();
      this.minutes = time.getMinutes();
      this.hours = time.getHours();
      
      this.setSecondHand();
      this.setMinuteHand();
      this.setHourHand();
    },

    setSecondHand: function() {
      const degrees = (this.seconds / 60 * 360) - 90;
      this.rotateHand( this.hands.second, degrees );
    },

    setMinuteHand: function() {
      const degrees = ( ( this.minutes + this.seconds / 60 ) / 60 * 360 ) - 90;
      this.rotateHand( this.hands.minute, degrees );
    },

    setHourHand: function() {
      const degrees = ( (this.hours + this.minutes / 60 + this.seconds / 3600 ) / 12 * 360) - 90;
      this.rotateHand( this.hands.hour, degrees );
    },

    rotateHand: function( hand, degrees ) {
      degrees += 90;
      hand.style.transform = `rotate(${degrees}deg)`;
    },
  };

  clock.init();
  setInterval( () => clock.update( new Date ), 1000 );
})();
