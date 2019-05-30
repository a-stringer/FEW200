import { TodoListItem } from './models';
import { Observable, BehaviorSubject } from 'rxjs';

export class TodoDataService {

  private data: TodoListItem[] = [
    { description: 'Fix Front Door', completed: false },
    { description: 'Change bathroom lightbulbs', completed: false },
    { description: 'Kill Thistles', completed: true }
  ];
  private todoListSubject = new BehaviorSubject<TodoListItem[]>(this.data);
  getTodoList(): Observable<TodoListItem[]> {
    const observable = this.todoListSubject.asObservable();
    return observable;
  }
  add(what: string) {
    this.data = [{ description: what, completed: false }, ...this.data];
    this.todoListSubject.next(this.data);
  }
}
