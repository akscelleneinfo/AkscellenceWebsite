import { Component, OnInit } from '@angular/core';
import { MetaTagAndTitleService } from '../Service and Model/metaTags-Title.service';

@Component({
  selector: 'app-leadership-kamlesh-jha',
  templateUrl: './leadership-kamlesh-jha.component.html',
  styleUrls: ['./leadership-kamlesh-jha.component.css']
})
export class LeadershipKamleshJhaComponent implements OnInit {

  constructor(private metaTagAndTitleService: MetaTagAndTitleService) {
  }

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(16);
  }

}
