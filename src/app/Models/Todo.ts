// Custom TODO Class with the data for the Todos that will be stored
export class Todo {
  // Random Generated ID for the todos
  readonly id: string = crypto.randomUUID();

  // Passing the title and description for all the todos
  constructor(readonly title: string, readonly description: string) {}
}
