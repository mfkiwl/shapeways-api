// Generated by CoffeeScript 1.4.0

/* Tests for Models /model
*/


(function() {

  describe('upload a model', function() {
    it('should accept a valid .stl file');
    it('should display an error when an invalid model is specified');
    return it('should receive a successful response from the server when a valid model is uplaoded ');
  });

  describe('edit a model', function() {});

  describe('view a list of models', function() {
    it('should return a list of models when no parameter is specified');
    it('should list private models');
    return it('should list public models');
  });

  describe('view model by id', function() {
    it('should return a single model');
    return it('should return null when an invalid model is specified');
  });

}).call(this);
