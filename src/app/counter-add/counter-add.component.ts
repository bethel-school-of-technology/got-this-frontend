import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import {CountDataService} from '../count-data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter-add',
  templateUrl: './counter-add.component.html',
  styleUrls: ['./counter-add.component.css']
})
export class CounterAddComponent implements OnInit {

  newCounter: Counter = new Counter();

  addCounter() {
    this.counterDataService.addCounter(this.newCounter).subscribe(c=>(this.router.navigate(["list"])))
  }

  constructor(private counterDataService: CountDataService, private router : Router) { }

  ngOnInit() {
  }

}
