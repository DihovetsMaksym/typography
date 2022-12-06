(function($){

	$.fn.fancybox = function(options){

		var defaults = {
			overlayColor: 'rgba(0,0,0,.5)'
		}

		var $link = this;
		var $body = $('body');
		var $modal;
		var $overlay;
		var settings = $.extend(defaults, options);
		function showModel(e){
			var $href = $link.attr('href')
			$modal = $('<div class="fancybox_modal"><img src="' + $href + '" alt="" /></div>');
			$overlay = $('<div class="fancybox_overlay"></div>');
			$overlay.css({
				'background-color': settings.overlayColor
			})
			e.preventDefault();
			
			$body.append($modal);
			$body.append($overlay);
			$overlay.one('click', hideModel);
		};
		function hideModel(){
			$modal.fadeOut();
			$overlay.fadeOut();
		};

		$link.on('click', showModel);
		return this;

	};

})(jQuery)