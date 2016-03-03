$(function(){
	$('#reveal_btn').click(function(){
		alert('puzzle revealed!');
	});

	$('#guess_letter').submit(function(evt){
		evt.preventDefault();
		var character = $('#letter_input').val();

		var letters = $('.letter_box').children();
		$.each(letters, function(key, value){
			//console.log(key + ": " + value.innerHTML)
			if(value.innerHTML) {//if the value of the letter is present check it against the input value
				if(character === value.innerHTML) {
					$(letters[key]).attr('class','reveal');
					//console.log(letters[key]);
					//change the class name of  to .reveal
					//check for a complete phrase somehow
						//if (phrase is complete) {
							//$('#msgBox').append('You Won!');
						//} else {
							//phrase not complete - solve puzzle or go again prompt
						//}
				} else {
					//if the input value and letter don't match go to the next key
				}
			} else {
				//if the letter has no value go to the next key

			};
		});
	});
});