import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-failure-of-traditional-bi',
  templateUrl: './failure-of-traditional-bi.component.html',
  styleUrls: ['./failure-of-traditional-bi.component.css']
})
export class FailureOfTraditionalBiComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
onclick(){
  this.route.navigate(['blog']);
}
}
