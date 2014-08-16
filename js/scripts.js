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
//function searchQuotes(inPerson, inQuote) {
	//var who = inQuote.split("|");
	//return parseInt(who[1]) === inPerson;
	//return who[1];
//}
// console.log("message");

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
		if (thisQuote[2] === INIT)
			loopSw = false;
		if(loopSw === true) {
			randNumber++;
			if(randNumber === MAX)
				randNumber = 0;
			else 
				if(randNumber === originalRandNumber)
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
		case 1:
			showPeopleButtons();
			hideTryAgainButton();
			break;
		case 2:
			hidePeopleButtons();
			showTryAgainButton();
			break;
		case 3:
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

// Global/Constants variables
var SEEN = "Seen";
var INIT = "Unseen";
var PEOPLE = 1;
var TRYAGAIN = 2;
var NONE = 3;

$(document).ready(function() {
  var personArray = buildPerson();
  var quoteArray = buildQuotes();
	var right = 0;
	var wrong = 0;

	var answer = generateRandomQuote(quoteArray);

	$('#' + personArray[0]).click(function(event) { // answer should be 0
		showButtons(TRYAGAIN);
		if(answer === "0") {
		  $('.correct-or-not').text(personArray[0] + " is Correct");
	  	right++;
		} else {
		  $('.correct-or-not').text(personArray[0] + " is Wrong, it was " + personArray[answer]);
	  	wrong++;
		}
  });
	$('#' + personArray[1]).click(function(event) { // answer should be 1
		showButtons(TRYAGAIN);
		if(answer === "1") {
		  $('.correct-or-not').text(personArray[1] + " is Correct");
	  	right++;
	  } else {
		  $('.correct-or-not').text(personArray[1] + " is Wrong, it was " + personArray[answer]);
	  	wrong++;
		}
  });
	$('#' + personArray[2]).click(function(event) { // answer should be 2
		showButtons(TRYAGAIN);
		if(answer === "2") {
		  $('.correct-or-not').text(personArray[2] + " is Correct");
	  	right++;
	  } else {
		  $('.correct-or-not').text(personArray[2] + " is Wrong, it was " + personArray[answer]);
	  	wrong++;
		}
  });
	$('#AGAIN').click(function(event) {
		showButtons(PEOPLE);
		answer = generateRandomQuote(quoteArray);
		var percentage = (right / (right + wrong)) * 100;
		if (answer === -1) {
		  showButtons(NONE);
	    $('.correct-or-not').text("Right: " + percentage.toFixed(2) + "%, Right: " + right + " Wrong: " + wrong);
		} else {
	    $('.correct-or-not').text("Right: " + percentage.toFixed(2) + "%");
		}
  });
});
