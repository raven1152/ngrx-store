import {Component, ElementRef, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectAnimalName, selectAnimalSpecies} from '../../+state/animal-selectors';
import {Observable} from 'rxjs';
import {AnimalActions} from '../../+state/animal-actions';

@Component({
  selector: 'ogs-bottom',
  standalone: false,

  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.scss'
})
export class BottomComponent {
  @ViewChild('bottomanimal') bottomAnimal!: ElementRef;
  animalName$!: Observable<string>;
  animalSpecies$!: Observable<string>;

  constructor(private store: Store) {
    this.animalName$ = this.store.select(selectAnimalName);
    this.animalSpecies$ = this.store.select(selectAnimalSpecies);
  }

  SetValue() {
    console.log(this.bottomAnimal.nativeElement.value);
    this.store.dispatch(AnimalActions.updateSpecies({
      species: this.bottomAnimal.nativeElement.value
    }));
  }
}
