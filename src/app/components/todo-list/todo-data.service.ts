import { TodoListItem } from './models';

export class TodoDataService {
  getTodoList(): TodoListItem[] {
    return [
      { description: 'Fix Front Door', completed: false },
      { description: 'Change bathroom lightbulbs', completed: false },
      { description: 'Kill Thistles', completed: true }
    ];
  }
}
