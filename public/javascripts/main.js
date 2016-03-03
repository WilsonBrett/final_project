$(function(){

	//reveal button functionality
	$('#reveal_btn').click(function(){
		$('.hasletter').attr('class','reveal');
	});
	
	//check guessed letter functionality
	$('#guess_letter').submit(function(evt){
		evt.preventDefault();
		var hits = 0; //counts the number of hits per submission and resets on submitted letter
		var character = $('#letter_input').val().toUpperCase();
		var letters = $('.letter_box').children();

		$.each(letters, function(key, value){
			if(value.innerHTML) {//if the value of the letter is present check it against the input value
				if(character === value.innerHTML) {
					hits += 1;
					$(letters[key]).attr('class','reveal');
					//check for a complete phrase somehow
						//if (phrase is complete) {
							//$('#msgBox').append('You Won!');
						//} else {
							//phrase not complete - solve puzzle or go again prompt
						//}
				}; //no else on equality check
			}; //no else on value.innerhtml check
			$('#letter_input').val(null);
		}); //end of each loop

		if (!hits) {//check to see if there were any matches and write the value to the msgPane if not
			$('#msgPane p').append(character);
			
		}
	});
});