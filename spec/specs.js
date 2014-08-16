describe('quotes test', function() {
	var quoteCount = 15;
	var personCount = 3;

	it('Last known count of quotes is ' + quoteCount, function() {
		var a = buildQuotes();
		a.length.should.equal(quoteCount);
	});
	it('Last known count of person is ' + personCount, function() {
		var b = buildPerson();
		b.length.should.equal(personCount);
	});
	it('Should set quote to Unseen after generating', function() {
		var quoteArray = buildQuotes();
		var seenCounter = 0;

		generateRandomQuote(quoteArray);

		for(var i=0;i<quoteArray.length;i++) {
			var thisQuote = quoteArray[i].split("|");  // Quote, Who, Seen
		  if (thisQuote[2] === "Seen")
		  	seenCounter++;
		}
		seenCounter.should.equal(1);
	});
});
