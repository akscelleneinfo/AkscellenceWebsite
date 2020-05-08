import { Component, OnInit } from '@angular/core';
import { MetaTagAndTitleService } from '../Service and Model/metaTags-Title.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private metaTagAndTitleService: MetaTagAndTitleService) {
  }

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(7);
  }

}

