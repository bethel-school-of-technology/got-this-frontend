import { Component, OnInit } from '@angular/core';
import { CountDataService} from '../count-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private counterDataService: CountDataService, private router: Router) { }

  ngOnInit() {
  }

}
