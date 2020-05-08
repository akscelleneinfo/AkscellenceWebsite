import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitecore-and-other-cms',
  templateUrl: './sitecore-and-other-cms.component.html',
  styleUrls: ['./sitecore-and-other-cms.component.css']
})
export class SitecoreAndOtherCMSComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
onclick(){
  this.route.navigate(['blog']);
}
}
