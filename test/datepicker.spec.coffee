description 'datepicker', ->

  description 'get_day_of_week', ->

    it 'should return correct day of the week', ->
      dp = new Datepicker 2015, 5, 12
      dp.get_day_of_week().should.equal 5;
      dp.setMonth 6;
      dp.get_day_of_week().should.equal 0;
      dp.setYear 1995;
      dp.get_day_of_week().should.equal 3;
