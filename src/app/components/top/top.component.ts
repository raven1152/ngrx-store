import {Component, ElementRef, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectAnimal} from '../../+state/animal-selectors';
import {AnimalState} from '../../+state/animal-state';

@Component({
  selector: 'ogs-top',
  standalone: false,

  templateUrl: './top.component.html',
  styleUrl: './top.component.scss'
})
export class TopComponent {
  @ViewChild('topanimal') topAnimal!: ElementRef;
  animal$!: Observable<AnimalState>;

  constructor(private store: Store) {
    this.animal$ = store.select(selectAnimal)
  }
}
