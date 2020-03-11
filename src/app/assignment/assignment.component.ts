import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  pType : string;
  passengers = [
    {name: 'passenger 1', ticketType: 'Premium'},
    {name: 'passenger 2', ticketType: 'Firstclass'},
    {name: 'passenger 3', ticketType: 'Secondclass'}
  ];

  constructor() { }

  ngOnInit() {
  }

  setType(type) {

    this.pType = type;
    
  }

  
}