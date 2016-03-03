"{{letrs.setPhrase($parent.$index, $index)}}"
<!--ng-class={'notvisible':{{letrs.hide(letrs.setLetterID($parent.$index, $index))}}}-->

 ng-repeat="row in letrs.setLoop(4) track by $index"

{{letrs.setLetterID(0,0)}}

			if(id !== 1 && id !== 12 && id !== 37 && id !== 48) {
				
			}

		this.hide = function(id){
			return id === 1 | id === 12 | id === 37 | id === 48;
		};

	<div ng-class={"noletter":{{letrs.hasLetter(phraseletter)}},"hasletter":true}><p>{{phraseletter}}</p></div>

.letter_box > div > p {
	/*wish I could could vertical align middle and display inline-block with height 100%. Doesn't work.
	display: inline;
	vertical-align: -35px;
	font-size: 32px;*/
}
$('#msgPane').append(character);