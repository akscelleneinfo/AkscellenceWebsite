import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-analytics-beyond-spreadsheet',
  templateUrl: './analytics-beyond-spreadsheet.component.html',
  styleUrls: ['./analytics-beyond-spreadsheet.component.css']
})
export class AnalyticsBeyondSpreadsheetComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onclick(){
    this.route.navigate(['blog']);
  }
}
