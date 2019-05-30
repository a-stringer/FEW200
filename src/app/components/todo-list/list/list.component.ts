import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListItem } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: TodoListItem[];
  @Output() removedItems = new EventEmitter();
  @Output() markedComplete = new EventEmitter<TodoListItem>();

  constructor() { }

  ngOnInit() {
  }

  markComplete(item: TodoListItem) {
    this.markedComplete.emit(item);
  }
  removeCompleted() {
    this.removedItems.emit();
  }

}
