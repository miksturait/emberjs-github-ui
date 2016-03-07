/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  niceNumber
} from 'github-ui/helpers/nice-number';

describe('NiceNumberHelper', function() {
  it('pass unaltered numbers < 1000', function() {
    expect(niceNumber(1)).to.equal('1');
    expect(niceNumber(999)).to.equal('999');
  });

  it('numbers above 1000 it returns as kilo', function() {
    expect(niceNumber(1000)).to.equal('1K');
    expect(niceNumber(27600)).to.equal('27.6K');
    expect(niceNumber(2001)).to.equal('2K');
    expect(niceNumber(7991)).to.equal('8K');
  });
});
