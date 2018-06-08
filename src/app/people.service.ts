import { Injectable } from '@angular/core';
import { Person } from './person';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  
  people: Person[] = [
    {id:1, firstName: 'Bill', lastName: 'Wright', dateOfBirth: new Date('01/01/1950')},
    {id:2, firstName: 'Yeganeh', lastName: 'Ghasemi', dateOfBirth: new Date('01/01/1980')},
    {id:3, firstName: 'Sara', lastName: 'Jones', dateOfBirth: new Date('01/01/1990')},
  ]

  
  // allows you the get data when you are ready 
  getPeople(): Observable<Person[]>{
    return of(this.people);
  }
  
  constructor() { }
}
