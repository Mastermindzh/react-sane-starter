import {getRandomColor} from './colors';

describe('Color utilities', () => {
  describe('getRandomColor', () => {
    it('returns a random hexadecimal color', () => {

      // assert
      expect(getRandomColor()).toHaveLength(7);
    });

  });
})
