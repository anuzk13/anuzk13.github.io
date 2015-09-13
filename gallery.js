$(document).ready(function() {
			$('#fullpage').fullpage({
				verticalCentered: true,
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
				sectionsColor: ['#1bbc9b', '#444748', '#797B7B','#BDBEBE'],
				slidesNavigation: true,
				scrollBar: true,
				menu: '#menu',
				afterLoad: function(anchorLink, index){

				},
				afterRender: function(){
					//playing the video
					$('video').get(0).play();
				}
			
			});
		});
$(document).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    console.log(y_scroll_pos);
    var scroll_pos_test = 2913;             // set to whatever you want it to be
    if(y_scroll_pos == scroll_pos_test) {
        new Vivus('lol', {type: 'scenario-sync', duration: 10, start: 'autostart', dashGap: 20, forceRender: false},
		function () {
			if (window.console) {
				console.log('Animation finished. [log triggered from callback]');
			}
		});
		 new Vivus('comp', {type: 'scenario-sync', duration: 20, start: 'autostart', dashGap: 20, forceRender: false},
		function () {
			if (window.console) {
				console.log('Animation finished. [log triggered from callback]');
			}
		});
    }
});