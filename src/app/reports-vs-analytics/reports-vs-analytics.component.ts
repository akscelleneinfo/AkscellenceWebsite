import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports-vs-analytics',
  templateUrl: './reports-vs-analytics.component.html',
  styleUrls: ['./reports-vs-analytics.component.css']
})
export class ReportsVsAnalyticsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onclick(){
    this.route.navigate(['blog']);
  }
}
