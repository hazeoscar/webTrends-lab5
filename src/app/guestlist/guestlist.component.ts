import { Component, OnInit } from '@angular/core';
// importing class and service
import { Person } from '../person'
import { PeopleService } from '../people.service';


@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent implements OnInit {

  // undefined var that will hold your data 
  guests: Person[];



  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(results => this.guests = results);
  }

}
