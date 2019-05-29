import { Component } from '@angular/core';
import { TodoListItem } from './models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class ToDoListComponent {
  items: TodoListItem[] = [
    { description: 'Fix Front Door', completed: false },
    { description: 'Change bathroom lightbulbs', completed: false },
    { description: 'Kill Thistles', completed: true }
  ];

  markComplete(item: TodoListItem) {
    item.completed = true;
  }
  total(what: HTMLInputElement) {
    console.log(what.value);
    this.items.unshift({ description: what.value, completed: false });
    what.value = '';
  }
  removeCompleted() {
    this.items = this.items.filter(item => item.completed === false);
  }
}
