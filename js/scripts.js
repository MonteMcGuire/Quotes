function buildPerson() {
	var p = new Array();
	p.push("Theodore_Roosevelt");
	p.push("Bill_Gates");
	p.push("Andrew_Carnegie");
	return p;
}
function buildQuotes() {
	var q = new Array();

	q.push("Do what you can, with what you have, where you are.|0|" + INIT);
  q.push("A vote is like a rifle: its usefulness depends upon the character of the user.|0|" + INIT);
  q.push("Patriotism means to stand by the country. It does not mean to stand by the president.|0|" + INIT);
  q.push("To educate a man in mind and not in morals is to educate a menace to society.|0|" + INIT);
  q.push("Whenever you are asked if you can do a job, tell 'em, 'Certainly I can!' Then get busy and find out how to do it.|0|" + INIT);

  q.push("Success is a lousy teacher. It seduces smart people into thinking they can't lose.|1|" + INIT);
  q.push("The great thing about a computer notebook is that no matter how much you stuff into it, it doesn't get bigger or heavier.|1|" + INIT);
  q.push("Your most unhappy customers are your greatest source of learning.|1|" + INIT);
  q.push("Just in terms of allocation of time resources, religion is not very efficient. There's a lot more I could be doing on a Sunday morning.|1|" + INIT);
  q.push("Your parents weren't always like this, they only became this way after you came along.|1|" + INIT);

  q.push("There is little success where there is little laughter.|2|" + INIT);
  q.push("Do your duty and a little more and the future will take care of itself.|2|" + INIT);
  q.push("You cannot push any one up a ladder unless he be willing to climb a little himself.|2|" + INIT);
  q.push("Aim for the highest.|2|" + INIT);
  q.push("There is no class so pitiably wretched as that which possesses money and nothing else.|2|" + INIT);
	return q;
}

function getRandomNumber(low, high) {
	return parseInt(Math.random() * (high - low) + low);
}
function generateRandomQuote(array) {
	var loopSw = true;
	var MAX = array.length;

	var randNumber = getRandomNumber(0,MAX);
	var originalRandNumber = randNumber;
	while (loopSw) {
		var thisQuote = array[randNumber].split("|");  // Quote, Who, Seen
		if (thisQuote[2] === INIT)  // Valid quote
			loopSw = false;
		else { // Already seen quote, get another if possible
			randNumber++;
			if(randNumber === MAX)
				randNumber = 0;
			else 
				if(randNumber === originalRandNumber)  // None left
					return -1;
		}
	}
	thisQuote[2] = SEEN;
	array[randNumber] = thisQuote.join("|");

	$('.quote1').text(thisQuote[0]);
  $('#result').show();

	return thisQuote[1]; // Returning the correct answer
}
function showButtons(whichType) {
	switch(whichType) {
		case PEOPLE_BUTTONS:
			showPeopleButtons();
			hideTryAgainButton();
			break;
		case TRY_AGAIN_BUTTONS:
			hidePeopleButtons();
			showTryAgainButton();
			break;
		case NONE_BUTTON:
			hidePeopleButtons();
			hideTryAgainButton();
			break;
	}
}
function showPeopleButtons() {
  $('#Theodore_Roosevelt').show();
  $('#Bill_Gates').show();
  $('#Andrew_Carnegie').show();
}
function hidePeopleButtons() {
  $('#Theodore_Roosevelt').hide();
  $('#Bill_Gates').hide();
  $('#Andrew_Carnegie').hide();
}
function showTryAgainButton() {
  $('#AGAIN').show();
}
function hideTryAgainButton() {
  $('#AGAIN').hide();
}
function checkAnswer(selected, goodAnswer, whoArray) {
	showButtons(TRY_AGAIN_BUTTONS);
	if(selected == goodAnswer) {
	  $('.correct-or-not').text(whoArray[selected] + " is Correct");
  	right++;
	} else {
	  $('.correct-or-not').text(whoArray[selected] + " is Wrong, it was " + whoArray[goodAnswer]);
  	wrong++;
	}
}

// Global/Constants variables
var SEEN = "Seen";
var INIT = "Unseen";
var PEOPLE_BUTTONS = 1;
var TRY_AGAIN_BUTTONS = 2;
var NONE_BUTTON = 3;
	var right = 0;
	var wrong = 0;

$(document).ready(function() {
  var personArray = buildPerson();
  var quoteArray = buildQuotes();

	var answer = generateRandomQuote(quoteArray);

	$('#' + personArray[0]).click(function(event) {
		checkAnswer(0, answer, personArray);
  });
	$('#' + personArray[1]).click(function(event) {
		checkAnswer(1, answer, personArray);
  });
	$('#' + personArray[2]).click(function(event) {
		checkAnswer(2, answer, personArray);
  });
	$('#AGAIN').click(function(event) {
		showButtons(PEOPLE_BUTTONS);
		answer = generateRandomQuote(quoteArray);
		var percentage = (right / (right + wrong)) * 100;
		if (answer === -1)
		  showButtons(NONE_BUTTON);
	  $('.correct-or-not').text("Right: " + percentage.toFixed(2) + "%, Right: " + right + " Wrong: " + wrong);
  });
});
