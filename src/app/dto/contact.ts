export class Contact {
  id: number;
  givenname: string;
  surname: string;

  constructor ( givenname: string, surname: string ) {
      this.givenname = givenname;
      this.surname = surname;
  }
}
