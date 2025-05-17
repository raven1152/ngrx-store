import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AnimalState} from './+state/animal-state';
import {selectAnimal} from './+state/animal-selectors';

@Component({
  selector: 'ogs-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-store';
  animal$: Observable<AnimalState>;

  constructor(private store: Store) {
    this.animal$ = this.store.select(selectAnimal);
  }
}
