import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils/';
import { shortText, longText, posts, users } from './__data__/testData';

describe('shortenText', () => {
  test(`'shortenText' should not alter a string under 100 characters`, () => {
    expect(shortenText(shortText).length).toBeLessThanOrEqual(100);
  });
  test(`'shortenText' should shorten strings that are longer than 100 characters and end in ...`, () => {
    let newText = shortenText(longText);
    expect(newText.length).not.toBe(longText.length);
    let lastChar = newText.slice(-3);
    expect(lastChar).toBe('...');
  });
});

describe('wordCount', () => {
  test('post count should be 233', () => {
    expect(wordCount(posts)).toBe(233);
  });
});

describe('attachUserName', () => {
  test('should have a display name', () => {
    expect(attachUserName(users, posts)[0].displayName).toBeTruthy();
  });
  test('there are no post with missing display names', () => {
    expect(attachUserName(users, posts)).not.toContainEqual(posts[5]);
  });
});
