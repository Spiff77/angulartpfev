import { Component } from '@angular/core';
import {Person} from './model/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formation Angular';
  theColor = 'blue';
  isDisabled = false;
  pers = new Person('Thomas', 'Lhomme');

  textColor = 'blue';

  f(): void {
    this.textColor = 'yellow';
  }

  val(e: any): void{
    console.log(e);
  }
}
