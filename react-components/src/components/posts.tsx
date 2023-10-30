import React from 'react';
import Planets from '../api-info/apiPlanet';
import ItemPosts from './item-post';
import { IPlanet, IState } from '../types/types';

export default class Posts extends React.Component<{}, IState> {
  public state: IState;
  constructor(props: IPlanet) {
    super(props);
    this.state = {
      planets: [],
    };
  }
  componentDidMount() {
    const response = Planets.getAll();
    response.then((res: IPlanet[]) => {
      this.setState({ planets: res });
    });
  }

  render(): React.ReactNode {
    return (
      <div className="all_posts">
        <h1 className="title__posts">Planets</h1>
        {this.state.planets.map((planet) => (
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
}
