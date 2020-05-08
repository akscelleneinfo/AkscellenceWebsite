import { Component, OnInit } from '@angular/core';
import { MetaTagAndTitleService } from '../Service and Model/metaTags-Title.service';

@Component({
  selector: 'app-leadership-sanjay-kumar',
  templateUrl: './leadership-sanjay-kumar.component.html',
  styleUrls: ['./leadership-sanjay-kumar.component.css']
})
export class LeadershipSanjayKumarComponent implements OnInit {
  constructor(private metaTagAndTitleService: MetaTagAndTitleService) {
  }

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(18);
  }

}
