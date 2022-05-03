export class User {
  public readonly age: number;

  constructor(public readonly name: string, age?: number) {
    if (age === undefined) {
      age = name.length;
    }

    this.age = age;
  }

  public greet(): string {
    return `Hello ${this.name}, you are ${this.age} years old.`;
  }
}
