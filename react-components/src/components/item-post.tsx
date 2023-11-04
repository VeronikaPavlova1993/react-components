import React from 'react';
import { IPlanet } from '../types/types';

const ItemPosts = (props: IPlanet[]) => {
  return (
    <div className="post">
      <div className="title__post">
        <h2>{props.post.name}</h2>
      </div>
      <div className="content__post">
        <p>
          The orbital period of the planet is {props.post.name}
          days. The diameter of the planet is {props.post.diameter} miles. The
          rotation period is {props.post.rotation_period} solar days. The
          climate is
          {props.post.climate}. The population is
          {props.post.population} inhabitants. The type of terrain is
          {props.post.terrain}.
        </p>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ItemPosts;