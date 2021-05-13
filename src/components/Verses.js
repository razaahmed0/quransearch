import React from 'react';
import bg from '../bubble.png';

function Verses({ verses }) {
  const grid = {
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(32rem, 1fr))',
    gridTemplateRows: '1fr',
    gap: '1em',
    fontFamily: `'Goudy Bookletter 1911', serif`,
  };
  const cardBg = {
    backgroundImage: `url(${bg})`,
  };

  return (
    <ul className='list pa2 bg-near-white br2' style={grid}>
      {verses.length ? (
        verses.map((post, index) => (
          <li
            key={index}
            className='f3 ma3 pa4 b--dark-green br3 shadow-5 lh-copy bg-white mid-gray pointer grow'
            style={cardBg}
          >
            {post.text}
          </li>
        ))
      ) : (
        <h2 className='center'>No results</h2>
      )}
    </ul>
  );
}

export default Verses;
