import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/Models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css'],
})
export class DisplayTodoComponent implements OnInit, OnDestroy {
  // Variable to store the todo details
  todoList: Todo[] = [];

  // Subscription object so we can destroy it when not needed
  private todoSubscription!: Subscription;

  // Constructor to inject the todo service
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // Initilize the todo list data
    this.todoList = this.todoService.getTodoList();

    // Subscribe to the changes in the todo list
    this.todoSubscription = this.todoService.todoEmitter.subscribe(
      (todoList: Todo[]) => {
        this.todoList = todoList;
      }
    );
  }

  // This function is used to delete a todo from the list
  onDeleteClick(id: string): void {
    this.todoService.removeTodo(id);
  }

  // This function is invoked when the user chooses to mark as done for a todo
  toggleDoneState(id: string): void {
    this.todoService.toggleDoneState(id);
  }

  // Prevent memory leaks by unsubscribing
  ngOnDestroy(): void {
    if (this.todoSubscription) {
      this.todoSubscription.unsubscribe();
    }
  }
}
