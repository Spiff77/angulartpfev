import {Component, HostListener, OnInit} from '@angular/core';
import {Person} from '../model/person.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  person1 = new Person('Thomas', 'Lhomme');
  person2 = new Person('Jean-Claude', 'Dus');

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event']) onClick(event: any): void {
    console.log(event);
  }


}
