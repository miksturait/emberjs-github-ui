/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import { isInArray } from 'github-ui/utils/computed-macro';
import Ember from 'ember';

describe('Computed Macro', function () {
  describe('isInArray', function () {
    const emberObject = Ember.Object.extend({
      item: 'one',
      items: [],
      elementInCollection: isInArray('item', 'items')
    });

    const sampleObject = emberObject.create();

    it('is false when element is not in collection', function () {
      expect(sampleObject.get('elementInCollection')).to.be.false;
    });

    it('is true right after we add element to collection', function () {
      // let's cache computed property first
      sampleObject.get('elementInCollection');
      sampleObject.get('items').pushObject('one');

      expect(sampleObject.get('elementInCollection')).to.be.true;
      // would be nice to use https://github.com/matthijsgroen/chai-changes
    });
  });
});
