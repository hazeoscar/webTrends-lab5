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

  // defiing a new person
  guestSearch: Person = new Person();
  
  // undefined var that will hold your data 
  guests: Person[];

  // method to find people 
  findPeople(personQuery: Person): void{
    console.log('search button clicked');
    this.peopleService.getPeople(personQuery).subscribe(results => this.guests = results);
  }



  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(results => this.guests = results);
    this.guestSearch.firstName = "Di Mascio";
  }

}
