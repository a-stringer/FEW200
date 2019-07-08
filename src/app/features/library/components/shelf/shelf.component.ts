import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../../models';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShelfComponent implements OnInit {

  @Input() shelf: Book[];
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }
}
