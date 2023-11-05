export type PlanetParams = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  created: string;
  edited: string;
  films: [];
  gravity: string;
  population: string;
  residents: string;
  surface_water: string;
  terrain: string;
  url: string;
};

export interface IPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  population: string;
  terrain: string;
}

export interface IState {
  planets: IPlanet[];
}

export interface IStateInput {
  inputValue: string;
  planets: IPlanet[];
}

export interface IResult {
  getInput: (search: string) => void;
}
