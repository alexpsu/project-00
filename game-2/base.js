$(document).ready(function(){
	count1 = 0;
	count2 = 0;
	$(document).keyup(function(e) {
		console.log(e.keyCode)
		if(e.keyCode === 65 || e.keyCode === 186) {
			if($('#p1').css("right") === "-375px") {
					alert("Player-1 has won!")
			} else if($('#p2').css("left") === "375px") {
				alert("Player-2 has won!")
			} else if(e.keyCode === 65) {
				count1++
				$('#p1').css("right", -750 + count1 * 25)
			} else if(e.keyCode === 186) {
				count2++
				$('#p2').css("left", count2 * 25)
			}
		}
	});

	$('#reset').on("click", function() {
		count1 = 0;
		count2 = 0;
		$('#p1').css("right", -750)
		$('#p2').css("left", 0)
	})
});