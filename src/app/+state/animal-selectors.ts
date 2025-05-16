import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AnimalState} from './animal-state';


export const selectAnimal = createFeatureSelector<AnimalState>("animal");

export const selectAnimalName = createSelector(selectAnimal, state => state.name);

export const selectAnimalSpecies = createSelector(selectAnimal, state => state.species);
