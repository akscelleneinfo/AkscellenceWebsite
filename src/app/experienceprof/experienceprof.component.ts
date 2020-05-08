import { Component, OnInit } from '@angular/core';
import { MetaTagAndTitleService } from '../Service and Model/metaTags-Title.service';


@Component({
  selector: 'app-experienceprof',
  templateUrl: './experienceprof.component.html',
  styleUrls: ['./experienceprof.component.css']
})
export class ExperienceprofComponent implements OnInit {

  constructor(private metaTagAndTitleService: MetaTagAndTitleService) {
  }

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(13);
  }


}
