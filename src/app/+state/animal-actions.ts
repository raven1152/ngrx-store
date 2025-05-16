import { createActionGroup, props } from '@ngrx/store';

export const AnimalActions = createActionGroup({
  source: 'Animal',
  events: {
    'Update Name': props<{ name: string }>(),
    'Update Species': props<{ species: string }>(),
    'Update Age': props<{ age: string }>(),
  }
})
