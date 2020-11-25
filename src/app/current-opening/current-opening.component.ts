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
      titel: "Oracle Technical/Functional Consultant - Any Module for Bangkok/Gurgaon, Haryana",
      dis: [
        {
          Job_Location: "Bangkok/Gurgaon, Haryana",
          Job_Overview: "Oracle Technical/Functional Consultant – Any Module",
          // Responsibilities_Duties: `<ol>
          //                           <li><span>0 - 2 years experience developing Power BI solutions and reporting</span></li>
          //                           <li><span>0 - 2 years experience in Data Visualization and Analysis</span></li>
          //                           <li><span>0 - 2 years experience in Excel Pivot/vLookup/Reports etc.</span></li>
          //                          </ol>
          //                          <p><span>Experience working with dataset ingestion, data model creation, reports, dashboards, KPIs, Power BI Pro features, workspaces, security, etc.</span></p>`,
          // Qualifications: "Required Qualifications Bachelor's degree or equivalent experience",
          // Preferred_Qualifications: `<ol>
          //                           <li><span>ETL, SSAS and SSIS experience.</span></li>
          //                           <li><span>Strong data modeling experience.</span></li>
          //                           <li><span>Experience in building data marts.</span></li>
          //                           <li><span>Experience working with a variety of stakeholders, from managers to technical resources, to include the translation of business requirements into operational measures and reports.</span></li>
          //                           <li><span>AgileScrum project experience nice to have.</span></li>
          //                           <li><span>High level of demonstrable proficiency with Microsoft Excel, including Power Query, Power Pivot.</span></li>
          //                           <li><span>Connections to external data sources, REST APIs, pivot tables, charts, and slicers.</span></li>
          //                           <li><span>Proven ability to create, publish, and manage content packs.</span></li>
          //                           <li><span>Deep understanding of security as it pertains to data access, scope, and distribution of reports and Dashboards.</span></li>
          //                          </ol>`,
          // Contact_Us: `<p><span>Interested applicants, please share your profile at <a href="mailto:pranay@akscellenceinfo.com">pranay@akscellenceinfo.com</a> or you can reach me at my Mobile# +91-98112-33516, Thanks...</span></p>`,
          
        }
      ]
    },
    {
      id: 2,
      hide: true,
      titel: "DotNet + React - Dot Net Framework, ASP.NET, C# for Hyderabad",
      dis: [
        {
          Job_Location: "Hyderabad",
          Job_Overview: "DotNet + React - Dot Net Framework, ASP.NET, C#",
          // Responsibilities_Duties: `<ol>
          //                           <li><span>0 - 2 years experience developing Power BI solutions and reporting</span></li>
          //                           <li><span>0 - 2 years experience in Data Visualization and Analysis</span></li>
          //                           <li><span>0 - 2 years experience in Excel Pivot/vLookup/Reports etc.</span></li>
          //                          </ol>
          //                          <p><span>Experience working with dataset ingestion, data model creation, reports, dashboards, KPIs, Power BI Pro features, workspaces, security, etc.</span></p>`,
          // Qualifications: "Required Qualifications Bachelor's degree or equivalent experience",
          // Preferred_Qualifications: `<ol>
          //                           <li><span>ETL, SSAS and SSIS experience.</span></li>
          //                           <li><span>Strong data modeling experience.</span></li>
          //                           <li><span>Experience in building data marts.</span></li>
          //                           <li><span>Experience working with a variety of stakeholders, from managers to technical resources, to include the translation of business requirements into operational measures and reports.</span></li>
          //                           <li><span>AgileScrum project experience nice to have.</span></li>
          //                           <li><span>High level of demonstrable proficiency with Microsoft Excel, including Power Query, Power Pivot.</span></li>
          //                           <li><span>Connections to external data sources, REST APIs, pivot tables, charts, and slicers.</span></li>
          //                           <li><span>Proven ability to create, publish, and manage content packs.</span></li>
          //                           <li><span>Deep understanding of security as it pertains to data access, scope, and distribution of reports and Dashboards.</span></li>
          //                          </ol>`,
          // Contact_Us: `<p><span>Interested applicants, please share your profile at <a href="mailto:pranay@akscellenceinfo.com">pranay@akscellenceinfo.com</a> or you can reach me at my Mobile# +91-98112-33516, Thanks...</span></p>`,
          hide: true
        }
      ]
    },
    {
      id: 3,
      hide: true,
      titel: "Microsoft Power BI Developer - Data Visualization & Analysis",
      dis: [
        {
          Job_Location: "Gurgaon, Haryana",
          Job_Overview: "Microsoft Power BI Developer - Data Visualization & Analysis",
          // Responsibilities_Duties: `<ol>
          //                           <li><span>0 - 2 years experience developing Power BI solutions and reporting</span></li>
          //                           <li><span>0 - 2 years experience in Data Visualization and Analysis</span></li>
          //                           <li><span>0 - 2 years experience in Excel Pivot/vLookup/Reports etc.</span></li>
          //                          </ol>
          //                          <p><span>Experience working with dataset ingestion, data model creation, reports, dashboards, KPIs, Power BI Pro features, workspaces, security, etc.</span></p>`,
          // Qualifications: "Required Qualifications Bachelor's degree or equivalent experience",
          // Preferred_Qualifications: `<ol>
          //                           <li><span>ETL, SSAS and SSIS experience.</span></li>
          //                           <li><span>Strong data modeling experience.</span></li>
          //                           <li><span>Experience in building data marts.</span></li>
          //                           <li><span>Experience working with a variety of stakeholders, from managers to technical resources, to include the translation of business requirements into operational measures and reports.</span></li>
          //                           <li><span>AgileScrum project experience nice to have.</span></li>
          //                           <li><span>High level of demonstrable proficiency with Microsoft Excel, including Power Query, Power Pivot.</span></li>
          //                           <li><span>Connections to external data sources, REST APIs, pivot tables, charts, and slicers.</span></li>
          //                           <li><span>Proven ability to create, publish, and manage content packs.</span></li>
          //                           <li><span>Deep understanding of security as it pertains to data access, scope, and distribution of reports and Dashboards.</span></li>
          //                          </ol>`,
          // Contact_Us: `<p><span>Interested applicants, please share your profile at <a href="mailto:pranay@akscellenceinfo.com">pranay@akscellenceinfo.com</a> or you can reach me at my Mobile# +91-98112-33516, Thanks...</span></p>`,
          hide: true
        }
      ]
    },
    {
      id: 4,
      hide: true,
      titel: "Azure Cloud Lead with up to 10 years of experience on Data Factory, Lake, Brick and Synapse",
      dis: [
        {
          Job_Location: "Gurgaon, Haryana",
          Job_Overview: "Microsoft Power BI Developer - Data Visualization & Analysis",
          // Responsibilities_Duties: `<ol>
          //                           <li><span>0 - 2 years experience developing Power BI solutions and reporting</span></li>
          //                           <li><span>0 - 2 years experience in Data Visualization and Analysis</span></li>
          //                           <li><span>0 - 2 years experience in Excel Pivot/vLookup/Reports etc.</span></li>
          //                          </ol>
          //                          <p><span>Experience working with dataset ingestion, data model creation, reports, dashboards, KPIs, Power BI Pro features, workspaces, security, etc.</span></p>`,
          // Qualifications: "Required Qualifications Bachelor's degree or equivalent experience",
          // Preferred_Qualifications: `<ol>
          //                           <li><span>ETL, SSAS and SSIS experience.</span></li>
          //                           <li><span>Strong data modeling experience.</span></li>
          //                           <li><span>Experience in building data marts.</span></li>
          //                           <li><span>Experience working with a variety of stakeholders, from managers to technical resources, to include the translation of business requirements into operational measures and reports.</span></li>
          //                           <li><span>AgileScrum project experience nice to have.</span></li>
          //                           <li><span>High level of demonstrable proficiency with Microsoft Excel, including Power Query, Power Pivot.</span></li>
          //                           <li><span>Connections to external data sources, REST APIs, pivot tables, charts, and slicers.</span></li>
          //                           <li><span>Proven ability to create, publish, and manage content packs.</span></li>
          //                           <li><span>Deep understanding of security as it pertains to data access, scope, and distribution of reports and Dashboards.</span></li>
          //                          </ol>`,
          // Contact_Us: `<p><span>Interested applicants, please share your profile at <a href="mailto:pranay@akscellenceinfo.com">pranay@akscellenceinfo.com</a> or you can reach me at my Mobile# +91-98112-33516, Thanks...</span></p>`,
          hide: true
        }
      ]
    }
  ];
  constructor(private metaTagAndTitleService: MetaTagAndTitleService) { }

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
    if (this.ajay == 3) {
      console.log(this.current[2]);
    }
    if (this.ajay == 4) {
      console.log(this.current[3]);
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
