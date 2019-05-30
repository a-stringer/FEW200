import { TodoListItem } from './models';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  items: TodoListItem[];

  constructor(private service: TodoDataService) { }

  ngOnInit() {
    this.items = this.service.getTodoList();
  }
  markComplete(item: TodoListItem) {
    item.completed = true;
  }
  add(what: string) {
    this.items.unshift({ description: what, completed: false });
  }
  removeCompleted() {
    this.items = this.items.filter(item => item.completed === false);
  }
}

