import { Component, OnInit } from '@angular/core';
import { MetaTagAndTitleService } from '../Service and Model/metaTags-Title.service';




@Component({
  selector: 'app-life-at-aks',
  templateUrl: './life-at-aks.component.html',
  styleUrls: ['./life-at-aks.component.css']
})
export class LifeAtAksComponent implements OnInit {

  myIndex: number = 0;
  constructor(private metaTagAndTitleService: MetaTagAndTitleService) {
  }

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(8);
  }

}

