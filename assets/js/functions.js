(function($) {
	$.fn.typewriter = function(speed=60) {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '' : '|'));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, speed);
		});
		return this;
	};
})(jQuery);