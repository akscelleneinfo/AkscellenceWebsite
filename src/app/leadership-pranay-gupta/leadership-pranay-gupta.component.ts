import { Component, OnInit } from '@angular/core';
import { MetaTagAndTitleService } from '../Service and Model/metaTags-Title.service';

@Component({
  selector: 'app-leadership-pranay-gupta',
  templateUrl: './leadership-pranay-gupta.component.html',
  styleUrls: ['./leadership-pranay-gupta.component.css']
})
export class LeadershipPranayGuptaComponent implements OnInit {
  constructor(private metaTagAndTitleService: MetaTagAndTitleService) {
  }

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(17);
  }

}
