import { Component, OnInit } from "@angular/core";
import { PersonService } from './person.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  greetMessage: string;

  constructor(private person: PersonService) {}

  ngOnInit() {

    // Hi there, my name is Ruben
    this.greetMessage = `Hi there, my name is ${this.person.getFirstName()}`;

    // In 2 seconds, change the first name
    setTimeout(() => {

      // Changing the first name
      this.person.changeFirstName('John');

      // But people call me John
      this.greetMessage = `But people call me ${this.person.getFirstName()}`;
    }, 2000);
  }
}
