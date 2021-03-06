// Generated by CoffeeScript 1.9.2
(function() {
  describe('datepicker', function() {
    return describe('get_day_of_week', function() {
      return it('should return correct day of the week', function() {
        var dp;
        dp = new Datepicker(2015, 5, 12);
        dp.get_day_of_week().should.equal(5);
        dp.setMonth(6);
        dp.get_day_of_week().should.equal(0);
        dp.setYear(1995);
        return dp.get_day_of_week().should.equal(3);
      });
    });
  });

}).call(this);
