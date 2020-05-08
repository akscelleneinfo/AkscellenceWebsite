import { Component, OnInit } from '@angular/core';
import { MetaTagAndTitleService } from '../Service and Model/metaTags-Title.service'

declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private metaTagAndTitleService: MetaTagAndTitleService) { 

  }

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(0)
    
  }

}
