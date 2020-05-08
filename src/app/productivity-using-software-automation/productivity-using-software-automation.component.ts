import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productivity-using-software-automation',
  templateUrl: './productivity-using-software-automation.component.html',
  styleUrls: ['./productivity-using-software-automation.component.css']
})
export class ProductivityUsingSoftwareAutomationComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
onclick(){
  this.route.navigate(['blog']);
}
}
