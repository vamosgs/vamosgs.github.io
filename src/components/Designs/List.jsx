import React from 'react';

const List = ({ iterable }) => (
  <div className="designList">
    {iterable.map((designs, key) => (
      <ul key={key} className="line">
        {designs.map((design, k) => (
          <a
            href={design.link_url || design.image_permalink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <li className="design" key={k}>
              <img src={design.photos[0].alt_sizes[2].url} alt={design.slug} />
            </li>
          </a>
        ))}
      </ul>
    ))}
  </div>
);

export default List;
