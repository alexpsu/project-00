$(document).ready(function(){
	count1 = 0;
	count2 = 0;
	$(document).keyup(function(e) {
		console.log(e.keyCode)
		if(e.keyCode === 65 || e.keyCode === 186) {
			if(count1 > 29 || count2 > 29) {
				if(count1 > count2) {
					alert("Player-1 has won!")
				} else{
					alert("Player-2 has won!")
				}
			} else if(e.keyCode === 65) {
				count1++
				$('#p1').css("left", count1 * 24)
			} else if(e.keyCode === 186) {
				count2++
				$('#p2').css("left", count2 * 24)
			}
		}
	});

	$('#reset').on("click", function() {
		count1 = 0;
		count2 = 0;
		$('#p1').css("left", 0)
		$('#p2').css("left", 0)
	})
});