import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingListItem } from './models';
import { Store } from '@ngrx/store';
import { selectShoppingListItems, State } from './reducers';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  stuff$: Observable<ShoppingListItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.stuff$ = this.store.select(selectShoppingListItems);
  }

}
