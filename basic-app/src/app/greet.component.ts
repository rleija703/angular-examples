import { Component, Input } from "@angular/core";

@Component({
  selector: "greet",
  template: "<h1>{{message}}</h1>"
})
export class GreetComponent {
  @Input() message: string = "";
}
