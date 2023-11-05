import React from 'react';
import { PlanetParams } from '../types/types';

const ItemPosts = (props: PlanetParams) => {
  return (
    <div className="post">
      <div className="title__post">
        <h2>{props.name}</h2>
      </div>
      <div className="content__post">
        <p>
          The orbital period of the planet is {props.name}
          days. The diameter of the planet is {props.diameter} miles. The
          rotation period is {props.rotation_period} solar days. The climate is
          {props.climate}. The population is
          {props.population} inhabitants. The type of terrain is
          {props.terrain}.
        </p>
      </div>
    </div>
  );
};

export default ItemPosts;
