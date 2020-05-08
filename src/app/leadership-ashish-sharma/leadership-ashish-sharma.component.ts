import { Component, OnInit } from '@angular/core';
import { MetaTagAndTitleService } from '../Service and Model/metaTags-Title.service';

@Component({
  selector: 'app-leadership-ashish-sharma',
  templateUrl: './leadership-ashish-sharma.component.html',
  styleUrls: ['./leadership-ashish-sharma.component.css']
})
export class LeadershipAshishSharmaComponent implements OnInit {

  constructor(private metaTagAndTitleService: MetaTagAndTitleService) {
  }

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(15);
  }

}
