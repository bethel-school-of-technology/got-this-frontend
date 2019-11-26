import { Component, OnInit } from '@angular/core';
import {CountDataService} from '../count-data.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter-edit',
  templateUrl: './counter-edit.component.html',
  styleUrls: ['./counter-edit.component.css']
})
export class CounterEditComponent implements OnInit {

  editCounter: Counter = new Counter();

  saveCounter() {
    this.countDataService
    .editCounter(this.editCounter)
    .subscribe(c=> this.router.navigate(["list"]));
  }
  constructor(private countDataService: CountDataService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params
      .subscribe(param => {this.countDataService
        .getCounter(+param["id"])
        .subscribe(c=> (this.editCounter =c ));
        
      });
  }

}
