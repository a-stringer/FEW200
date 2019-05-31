import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectCurrentCount, selectCantDecrement, selectAtTheStart, selectCountingBy } from '../../reducers';
import { Observable } from 'rxjs';
import * as CounterActions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;
  cantDecrement$: Observable<boolean>;
  atTheStart$: Observable<boolean>;
  by$: Observable<number>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.count$ = this.store.select(selectCurrentCount);
    this.by$ = this.store.select(selectCountingBy);
    this.cantDecrement$ = this.store.select(selectCantDecrement);
    this.atTheStart$ = this.store.select(selectAtTheStart);
  }
  increment() {
    // this.count++;
    this.store.dispatch(new CounterActions.CountIncremented());
  }
  decrement() {
    // this.count--;
    this.store.dispatch(new CounterActions.CountDecremented());
  }
  reset() {
    this.store.dispatch(new CounterActions.CountReset());
  }
  setCountby(what: number) {
    this.store.dispatch(new CounterActions.CountBySet(what));
  }
}
