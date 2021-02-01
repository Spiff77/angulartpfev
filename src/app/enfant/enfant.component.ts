import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../model/person.model';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {
  @Input()
  person!: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
