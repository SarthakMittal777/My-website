  
           $(document).ready(function() {

            var counters = $(".count");
            var countersQuantity = counters.length;
            var counter = [];
            
            for (i = 0; i < countersQuantity; i++) {
              counter[i] = parseInt(counters[i].innerHTML);
            }
            
            var count = function(start, value, id) {
              var localStart = start;
              setInterval(function() {
                if (localStart < value) {
                  localStart++;
                  counters[id].innerHTML = localStart;
                }
              }, 40);
            }
            
            for (j = 0; j < countersQuantity; j++) {
              count(0, counter[j], j);
            }
            });

//my js section
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});
//my js


            
  $('.count').each(function () {
         $(this).prop('Counter',0).animate({
         Counter: $(this).text()
         }, {
         duration: 3300,
         easing: 'swing',
         step: function (now) {
             $(this).text(Math.ceil(now));
    }
  });
});
 /*******/
var move_img = document.getElementById("banner-right-img");
move_img.addEventListener("mousemove", (e) =>{
  let x = e.layerX
  let y = e.layerY
  move_img.style.transform = `translate(-${x /6}px`;
})
/********/
// UPDATE: I was able to get this working again... Enjoy!
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var cur=document.getElementById('banner-right-con');
var section_element=document.querySelectorAll('.service-box-item');
section_element.forEach(item=>{
item.addEventListener('mousemove',function(e){
  var a = e.clientX;
  var b = e.clientY;
  cursor.style.visibility="visible";
  cursorinner.style.visibility="visible";
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  cursorinner.style.left = a + 'px';
  cursorinner.style.top = b + 'px';
  let x = e.layerX
  
  let y = e.layerY
  //item.style.transform = `rotate(-${x /90}deg`;
});

item.addEventListener('mouseover',function(e){
  let x = e.layerX
  item.style.transform = `rotate(-1deg)`;
  console.log("rotate" + x);

});
item.addEventListener('mouseout',function(e){

  //console.log("Mouse out");

  cursor.style.visibility="hidden";

  cursorinner.style.visibility="hidden";

  let x = e.layerX

  let y = e.layerY

  item.style.transform = 'rotate(0deg)';

});

})
console.log(section_element.length);

cur.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.visibility="visible";
  cursorinner.style.visibility="visible";
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});
cur.addEventListener('mouseover', function(e){
  cursor.classList.add('cursor');
  cursorinner.classList.add('cursor2');
});

cur.addEventListener('mouseout', function(){
  cursor.style.visibility="hidden";
  cursorinner.style.visibility="hidden";
});



