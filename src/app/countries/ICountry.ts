import { IState } from './IState';

export interface ICountry {
  name: string;
  code: string;
  states: IState[];
}
