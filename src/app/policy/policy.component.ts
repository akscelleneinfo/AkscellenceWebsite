import { Component, OnInit } from '@angular/core';
import {
  Router, NavigationStart, NavigationEnd,
  NavigationCancel, NavigationError, Event
} from '@angular/router';


@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  showLoadingIndicator = true;

  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {

      // On NavigationStart, set showLoadingIndicator to ture
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel) {
        this.showLoadingIndicator = false;
      }
    });
  }
  ngOnInit(){}
}


