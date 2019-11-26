import { Component, OnInit } from '@angular/core';
import { CountDataService} from '../count-data.service';
import {Counter} from '../counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

    counters: Counter[];

    getCounters(): void {
      this.countDataService.getCounters().subscribe(c=> (this.counters = c));    }

    deleteCounter(id:number): void {
      this.countDataService.deleteCounter(id).subscribe(c=>
        this.getCounters());
    }

    
  constructor(private countDataService : CountDataService) { }

  ngOnInit() {
    this.getCounters();
  }

}
