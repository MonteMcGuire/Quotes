describe('quotes test', function() {
	it('15 quotes returned', function() {
		var a = buildQuotes();
		a.length.should.equal(15);
	});
	it('3 people returned', function() {
		var b = buildPerson();
		b.length.should.equal(3);
	});
});
