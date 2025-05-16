export enum Gender {
  male = 'male',
  female = 'female',
}

export interface AnimalState {
  name: string;
  species: string;
  age: number;
  gender: Gender;
}
