import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-more-revenue-for-video-content-company",
  templateUrl: "./more-revenue-for-video-content-company.component.html",
  styleUrls: ["./more-revenue-for-video-content-company.component.css"]
})
export class MoreRevenueForVideoContentCompanyComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  onclick() {
    this.route.navigate(["blog"]);
  }
}
