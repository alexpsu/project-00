$(document).ready(function(){
	count1 = 0;
	count2 = 0;
	$(document).keyup(function(e) {
		console.log(count1)
		if(e.keyCode === 65 || e.keyCode === 186) {
			if(($('#p1').css("top") === "150px") && ($('#p1').css("left") === "0px")) {
				alert("Player-1 has won!")
			} else if(($('#p2').css("top") === "150px") && ($('#p2').css("left") === "0px")) {
				alert("Player-2 has won!")
			} else if(($('#p1').css("top") === "150px") && ($('#p1').css("left") === "700px")) {
				count1 = 0;
				$('#p1').css("transform", "rotate(180deg)")
				$('#p1').css("left", "701px");
			} else if(($('#p2').css("top") === "150px") && ($('#p2').css("left") === "700px")) {
				count2 = 0;
				$('#p2').css("transform", "rotate(180deg)")
				$('#p2').css("left", "701px")
			} else if(($('#p1').css("top") === "0px") && ($('#p1').css("left") === "700px")) {
				count1 = 0;
				$('#p1').css("transform", "rotate(90deg)")
				$('#p1').css("top", -1)
			} else if(($('#p2').css("top") === "0px") && ($('#p2').css("left") === "700px")) {
				count2 = 0;
				$('#p2').css("transform", "rotate(90deg)")
				$('#p2').css("top", -1)
			} 

			else if(e.keyCode === 65) {
				if($('#p1').css("top") === "150px") {
					count1++
					$('#p1').css("left", 700 - count1 * 50);
				} else if($('#p1').css("left") === "700px") {
					count1++
					$('#p1').css("top", count1 * 25);
				} else {
					count1++
					$('#p1').css("left", count1 * 50)
				}
			}

			else if(e.keyCode === 186) {
				if($('#p2').css("top") === "150px") {
					count2++
					$('#p2').css("left", 700 - count2 * 50)
				} else if($('#p2').css("left") === "700px") {
					count2++
					$('#p2').css("top", count2 * 25)
				} else {
					count2++
					$('#p2').css("left", count2 * 50)
				}
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