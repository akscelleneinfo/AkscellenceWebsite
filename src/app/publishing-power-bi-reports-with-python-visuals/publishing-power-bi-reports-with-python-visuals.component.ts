import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-publishing-power-bi-reports-with-python-visuals",
  templateUrl:
    "./publishing-power-bi-reports-with-python-visuals.component.html",
  styleUrls: ["./publishing-power-bi-reports-with-python-visuals.component.css"]
})
export class PublishingPowerBIReportsWithPythonVisualsComponent
  implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  onclick() {
    this.route.navigate(["blog"]);
  }
}
