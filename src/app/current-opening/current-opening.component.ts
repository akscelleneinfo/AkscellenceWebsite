import { Component, OnInit } from "@angular/core";
import { MetaTagAndTitleService } from "../Service and Model/metaTags-Title.service";

@Component({
  selector: "app-current-opening",
  templateUrl: "./current-opening.component.html",
  styleUrls: ["./current-opening.component.css"]
})
export class CurrentOpeningComponent implements OnInit {
  ajay: number = 1;

  current: any[] = [
    {
      id: 1,
      titel: "We require, Power Bi Expert. Location: Gurgaon, Haryana",
      dis: [
        {
          Location: "Gurgaon, Haryana/Bangalore",
          Position: "1",
          Requirement: `<ol>
          <li><span>We are looking for Power BI Developer as well as SME.</span></li>
          </ol>`,
          Required_Skills: `<p><ol><li>Experience in Creating Dashboards, Data Models, and Reports in Microsoft Power BI.</li>
          <li>Experience bringing in data from On-Premises Databases, Cloud Systems, and 3rd Party </li>
          <li>Applications, and Creating a Data Model and converting them into Story. XML Publisher </li>
          <li>reports/Basic Java will be added advantage</li>
          </ol></p>`,
          Preferences: `<p><span>Relevant 5+ Years.</span><br />
          <span> Notice Period: 15-30 Days.</span></p>`,
          hide: true
        }
      ]
    },
    {
      id: 2,
      hide: true,
      titel:
        "DotNet MVC Application Developer with Angular 2 or abore OR Knockout",
      dis: [
        {
          Location: "Gurgaon, Haryana/Bangalore",
          Position: "1",
          Requirement: `<ol>
          <li><span>We require DotNet MVC Developer</span></li>
          </ol>`,
          Required_Skills: `<p><span>Application Development, DotNet MVC, Angular 2 or abore OR Knockout, Oracle/SQL Server DB</span></p>`,
          Preferences: `<p><span>Relevant 5+ Years.</span><br /><span> Notice Period: 15-Days.</span></p>`,
          hide: true
        }
      ]
    }
  ];
  constructor(private metaTagAndTitleService: MetaTagAndTitleService) {}

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(12);
  }

  show(id: number) {
    this.ajay = id;
    if (this.ajay == 1) {
      console.log(this.current[0]);
    }
    if (this.ajay == 2) {
      console.log(this.current[1]);
    }
    // if (id == 1)
    //   this.ajay = this.current[0].dis[0].Location;

    // if (id == 2)
    //   this.ajay = '<h3>mohit</h3>';
  }

  toggle(obj) {
    obj.hide = !obj.hide;
  }
}
