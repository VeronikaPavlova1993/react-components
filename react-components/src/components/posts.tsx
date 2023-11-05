import React from 'react';
import ItemPosts from './item-post';
import { PlanetParams } from '../types/types';

function Posts({ posts }) {
  return (
    <div className="all_posts">
      <h1 className="title__posts">Planets</h1>
      {posts.map((planet: PlanetParams) => (
        <ItemPosts
          key={planet.name}
          name={planet.name}
          orbital_period={planet.orbital_period}
          diameter={planet.diameter}
          rotation_period={planet.rotation_period}
          climate={planet.climate}
          population={planet.population}
          terrain={planet.terrain}
        />
      ))}
    </div>
  );
}

export default Posts;
