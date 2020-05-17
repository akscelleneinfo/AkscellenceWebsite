import { Component, OnInit } from '@angular/core';
import { MetaTagAndTitleService } from '../Service and Model/metaTags-Title.service';

@Component({
  selector: 'app-dot-net-solution',
  templateUrl: './dot-net-solution.component.html',
  styleUrls: ['./dot-net-solution.component.css']
})
export class DotNetSolutionComponent implements OnInit {

  constructor(private metaTagAndTitleService: MetaTagAndTitleService) {
  }

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(6);
  }

}

