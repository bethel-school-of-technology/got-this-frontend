import { Component, OnInit } from '@angular/core';
import { CountDataService} from '../count-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  
  constructor(private counterDataService: CountDataService, private router: Router) { }

  ngOnInit() {
  }

}
