import { TodoListItem } from './models';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnDestroy {
  items$: Observable<TodoListItem[]>;
  // items: TodoListItem[];
  // subscription: Subscription;

  constructor(private service: TodoDataService) { }

  ngOnInit() {
    this.items$ = this.service.getTodoList();

    //   this.subscription = this.items$.subscribe(tdl => {
    //     console.log('Got a new todo list', tdl);
    //     this.items = tdl;
    //   });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  markComplete(item: TodoListItem) {
    // item.completed = true;
  }
  add(what: string) {
    // this.items.unshift({ description: what, completed: false });
    this.service.add(what);
  }
  removeCompleted() {
    // this.items = this.items.filter(item => item.completed === false);
  }
}

