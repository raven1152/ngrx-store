import { createReducer, on } from '@ngrx/store';
import { AnimalActions } from './animal-actions';
import {AnimalState, Gender} from './animal-state';

export const initialState: AnimalState = {
  age: 10,
  gender: Gender.male,
  name: 'Bill',
  species: 'Cat'
}

export const animalReducer = createReducer(
  initialState,
  on(AnimalActions.updateName, (state, { name }) => {
    return { ...state, name };
  }),
  on(AnimalActions.updateSpecies, (state, { species }) => {
    return { ...state, species };
  })
);
