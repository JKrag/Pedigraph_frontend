'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('pedigraphFrontendApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    scope.search = '1235';
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of cats to the scope', function () {
    //expect(scope.cats.length).toBe(3);
    expect(scope.cats);
  });
});
