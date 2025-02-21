import { Component, ElementRef, ViewChild } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent {
  // Input References for the HTML Template input elements
  @ViewChild('titleInput') titleInput!: ElementRef<HTMLInputElement>;
  @ViewChild('descriptionInput')
  descriptionInput!: ElementRef<HTMLInputElement>;

  constructor(private todoService: TodoService) {}

  // This function is invoked when the add button is clicked
  onAddTodoClick() {
    const title = this.titleInput?.nativeElement?.value.trim();
    const description = this.descriptionInput?.nativeElement?.value.trim();

    // Checking if the inputs are valid or not
    if (!title || !description) {
      alert('Both title and description are required !');
      return;
    }

    // Adding the todo
    this.todoService.addTodo(new Todo(title, description));

    // Clearing the inputs
    this.titleInput.nativeElement.value = '';
    this.descriptionInput.nativeElement.value = '';
  }
}
