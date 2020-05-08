import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitecore-experience-platform-implementation',
  templateUrl: './sitecore-experience-platform-implementation.component.html',
  styleUrls: ['./sitecore-experience-platform-implementation.component.css']
})
export class SitecoreExperiencePlatformImplementationComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  onclick(){
    this.route.navigate(['blog']);
  }
}
