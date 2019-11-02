import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { GreetComponent } from "./greet.component";
import { PersonService } from './person.service';

@NgModule({
  declarations: [AppComponent, GreetComponent],
  imports: [BrowserModule],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
