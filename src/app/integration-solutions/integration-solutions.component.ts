import { Component, OnInit } from '@angular/core';
import { MetaTagAndTitleService } from '../Service and Model/metaTags-Title.service'

@Component({
  selector: 'app-integration-solutions',
  templateUrl: './integration-solutions.component.html',
  styleUrls: ['./integration-solutions.component.css']
})
export class IntegrationSolutionsComponent implements OnInit {

  constructor(private metaTagAndTitleService: MetaTagAndTitleService) {
  }

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(3);
  }

}
