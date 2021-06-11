import React from 'react';
import { render } from '@testing-library/react';
import PostWidget from '../components/PostWidget';
import { MemoryRouter } from 'react-router-dom';
import { shortenText } from '../utils/functions';
import { posts } from './__data__/testData';

let longPost = posts[0];
let post = posts[1];

describe('PostWidget', () => {
  test('inner text content contains the passed in posts text content', () => {
    const { container } = render(
      <MemoryRouter>
        <PostWidget {...post} />
      </MemoryRouter>
    );
    expect(container.textContent).toContain(post.text);
  });

  test('inner text content contains the passed in posts text content longPost, that has been shortened by the shortentext function', () => {
    const { container } = render(
      <MemoryRouter>
        <PostWidget {...longPost} />
      </MemoryRouter>
    );
    expect(container.textContent).toContain(shortenText(longPost.text));
  });

  test('all text is displayed', () => {
    const { container } = render(
      <MemoryRouter>
        <PostWidget {...longPost} expanded={true} />
      </MemoryRouter>
    );
    expect(container.textContent).toContain(longPost.text);
  });
});
