import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingListItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() list: ShoppingListItem[];
  constructor() { }

  ngOnInit() {
  }

}
