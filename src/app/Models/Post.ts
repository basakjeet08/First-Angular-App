export class Post {
  constructor(
    readonly id: number,
    readonly userId: number,
    readonly title: string,
    readonly body: string,
  ) {}
}
