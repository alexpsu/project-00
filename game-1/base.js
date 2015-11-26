$(document).ready(function(){
	count1 = 0;
	count2 = 0;
	$(document).keyup(function(e) {
		console.log(e.keyCode)
		if(e.keyCode === 65) {
			count1++
			$('#p1').css("left", count1 * 13)
		} if(e.keyCode === 186) {
			count2++
			$('#p2').css("left", count2 * 13)
		}
	});

});