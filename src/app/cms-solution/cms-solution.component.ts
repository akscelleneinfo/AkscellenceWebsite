import { Component, OnInit } from '@angular/core';
import { MetaTagAndTitleService } from '../Service and Model/metaTags-Title.service';

@Component({
  selector: 'app-cms-solution',
  templateUrl: './cms-solution.component.html',
  styleUrls: ['./cms-solution.component.css']
})
export class CMSSolutionComponent implements OnInit {

  constructor(private metaTagAndTitleService: MetaTagAndTitleService) {
  }

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(5);
  }

}
