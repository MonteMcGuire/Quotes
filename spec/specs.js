describe('quotes test', function() {
	TEDDY=0; /// Teddy quotes are 0 to 4
	BILL=1;  /// Bills quotes are 5 to 9
	it('10 quotes returned', function() {
		var a = buildQuotes();
		a.length.should.equal(10);
	});
	it('2 people returned', function() {
		var b = buildPerson();
		b.length.should.equal(2);
	});
	it('Person "Bill Gates" is found', function() {
		var arr = buildQuotes();
		var c = searchQuotes(BILL, arr[5]);
		c.should.equal(true);
	});
	it('Person "T Roosevelt" is found', function() {
		var arr = buildQuotes();
		var c = searchQuotes(TEDDY, arr[4]);
		c.should.equal(true);
	});
	it('Try a BG quote for TR', function() {
		var arr = buildQuotes();
		var c = searchQuotes(TEDDY, arr[5]);
		c.should.equal(false);
	});
	//it('Random number between 1 and 10', function() {
		//var rand = getRandom(1,10);
		//expect(rand).to.be.at.least(0);
	//});
});
