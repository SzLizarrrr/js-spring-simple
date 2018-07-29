describe('person factory', function () {

  var personService;

  beforeEach(angular.mock.module('api'));

  beforeEach(inject(function(_personService_){
    personService = _personService_;
  }));

  it('should exist', function () {
    expect(personService).toBeDefined();
  });

  describe('persons', function () {
    it('return list of persons', function () {
      expect(personService.persons.length).toBe(7);
    });
  });
});