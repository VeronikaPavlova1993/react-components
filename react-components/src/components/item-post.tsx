import React from 'react';
import { IPlanet, PlanetParams } from '../types/types';

export default class ItemPosts extends React.Component {
  constructor(props: IPlanet) {
    super(props);
  }

  render(): React.ReactNode {
    //const { planet }: PlanetParams = this.props;
    return (
      <div className="post">
        <div className="title__post">
          <h2>{this.props.name}</h2>
        </div>
        <div className="content__post">
          <p>
            The orbital period of the planet is {this.props.orbital_period} days.
            The diameter of the planet is {this.props.diameter} miles. The rotation
            period is {this.props.rotation_period} solar days. The climate is{' '}
            {this.props.climate}. The population is {this.props.population} inhabitants.
            The type of terrain is {this.props.terrain}.
          </p>
        </div>
      </div>
    );
  }
}
