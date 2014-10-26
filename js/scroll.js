
$( window ).scroll(
	function (){
		max=150
		min = 60
		$("header").css("height",height_calc())
			function height_calc(){
				var scroll=$(window).scrollTop();
				if (scroll>max-min) {return min}
				else {return max-scroll};
			}
		$("ul").css("margin-top",margin_calc())
			function margin_calc(){
				var scroll=$(window).scrollTop();
				if (scroll>min) {return -min}
				else {return -scroll};
			}

}
);
