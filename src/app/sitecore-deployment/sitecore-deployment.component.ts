import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitecore-deployment',
  templateUrl: './sitecore-deployment.component.html',
  styleUrls: ['./sitecore-deployment.component.css']
})
export class SitecoreDeploymentComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
onclick(){
  this.route.navigate(['blog']);
}
}
