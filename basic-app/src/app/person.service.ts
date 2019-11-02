import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {
  private firstName: string = 'Ruben';

  getFirstName(): string {
    return this.firstName;
  }

  changeFirstName(name: string): void {
    this.firstName = name;
  }
}