import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-features-in-sitecore',
  templateUrl: './new-features-in-sitecore.component.html',
  styleUrls: ['./new-features-in-sitecore.component.css']
})
export class NewFeaturesInSitecoreComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
onclick(){
  this.route.navigate(['blog']);
}
}
