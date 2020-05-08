import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitecore-experience-commerce-implementation',
  templateUrl: './sitecore-experience-commerce-implementation.component.html',
  styleUrls: ['./sitecore-experience-commerce-implementation.component.css']
})
export class SitecoreExperienceCommerceImplementationComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
onclick(){
  this.route.navigate(['blog']);
}
}
