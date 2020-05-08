import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketfor-biand-data-analytics',
  templateUrl: './marketfor-biand-data-analytics.component.html',
  styleUrls: ['./marketfor-biand-data-analytics.component.css']
})
export class MarketforBIAndDataAnalyticsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onclick(){
    this.route.navigate(['blog']);
  }

}
