import { Component, OnInit } from '@angular/core';
import { MetaTagAndTitleService } from './Service and Model/metaTags-Title.service';
import {
  Router, NavigationStart, NavigationEnd,
  NavigationCancel, NavigationError, Event
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'akscellence';
  showLoadingIndicator = false;
  showdiv= false;

  constructor(private metaTagAndTitleService: MetaTagAndTitleService,private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {

      // On NavigationStart, set showLoadingIndicator to ture
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
         this.showdiv = true;
      }
      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel) {
        this.showLoadingIndicator = false;
        this.showdiv = false;
      }
    });
  }

  ngOnInit() {

  }
  pageMetaData() {
    this.metaTagAndTitleService.getTitleAndMetaTags(0);
  }
}
