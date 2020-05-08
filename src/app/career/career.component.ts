import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IfStmt } from "@angular/compiler";
import { MetaTagAndTitleService } from "../Service and Model/metaTags-Title.service";

@Component({
  selector: "app-career",
  templateUrl: "./career.component.html",
  styleUrls: ["./career.component.css"]
})
export class CareerComponent implements OnInit {
  constructor(
    private route: Router,
    private metaTagAndTitleService: MetaTagAndTitleService
  ) {}

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(11);
  }
  onClick(number) {
    switch (number) {
      case 1:
        this.route.navigate(["/careers"]);
        break;
      case 2:
        this.route.navigate(["/life-at-Aks"]);
        break;
      case 3:
        this.route.navigate(["/experience-professional"]);
        break;
    }
  }
}
