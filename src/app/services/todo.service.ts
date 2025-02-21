import { EventEmitter, Injectable } from '@angular/core';
import { Todo } from '../Models/Todo';

// This Service is used to manage Todo Data and the event and data passing for the todos
@Injectable({ providedIn: 'root' })
export class TodoService {
  // This variable contains all the user Todos
  private todoList: Todo[] = [];

  // This variable is used to emit data and events to the subscribers
  todoEmitter = new EventEmitter<Todo[]>();

  // Public Getter function to protect the todo List data
  getTodoList(): Todo[] {
    return [...this.todoList];
  }

  // This function is used to add todos to the todoList
  addTodo(todo: Todo): void {
    this.todoList.push(todo);

    // Emitting the new todo state for the Components
    this.todoEmitter.emit(this.getTodoList());
  }

  // This function is used to remove a todo from the list
  removeTodo(id: string) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);

    // Emitting the new Todo state for the components
    this.todoEmitter.emit(this.getTodoList());
  }
}
