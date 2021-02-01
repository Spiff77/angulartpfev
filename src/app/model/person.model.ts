export class Person {

  constructor(private  $firstname: string, private $lastname: string) {
  }
  get firstname(): string {
    return this.$firstname;
  }

  set firstname(value: string) {
    this.$firstname = value;
  }

  get lastname(): string {
    return this.$lastname;
  }

  set lastname(value: string) {
    this.$lastname = value;
  }
}
