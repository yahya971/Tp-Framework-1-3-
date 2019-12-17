export class Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  cin: number;
  job: string;
  path: string;

  constructor(id = 0, firstName = '', lastName = '', age = 0, cin = 0, job = '', path = '') {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.cin = cin;
    this.job = job;
    this.path = path;
  }
}
