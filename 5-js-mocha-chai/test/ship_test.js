var expect = require('chai').expect;

//Test Suite
describe('checkForShip',function() {
    var checkForShip = require('../game_logic/ship_methods').checkForShip;
  //specs  check for behaviour
    it('should correctly report no ship at a given players coordinate',function() {
      player = {
        ships : {
          location: [[0, 0]]
        }
      };
      expect(checkForShip(player,[9,9])).to.be.false;

    });
});