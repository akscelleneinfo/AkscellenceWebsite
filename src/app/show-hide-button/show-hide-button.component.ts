import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-show-hide-button",
  templateUrl: "./show-hide-button.component.html",
  styleUrls: ["./show-hide-button.component.css"]
})
export class ShowHideButtonComponent implements OnInit {
  constructor() {}
  // icon = "more-less glyphicon glyphicon-plus";
  faqID: number;
  faqs = [
    {
      header: "SITECORE SERVICES THAT AKSCELLENCE OFFERS",
      description: `<p>
      <strong>SITECORE DEVELOPMENT</strong><br />We help businesses with
      Sitecore development solutions and services. Get Sitecore CMS development
      services for better control and collaborative work environment for your
      business.
    </p>
    <p>
      <strong>SITECORE MIGRATIO</strong>N<br />We help you migrate all your data
      to the latest Sitecore versions. Our expert Sitecore engineers are well
      versed with the migration tools and technology.
    </p>
    <p>
      &nbsp;<strong>SITECORE IMPLEMENTATION</strong><br />Our expert and
      experienced Sitecore CMS consultants suggest the best Sitecore
      implementation practices for big enterprise level businesses and SMEs.
    </p>
    <p>
      <strong>SITECORE SUPPORT</strong><br />We give complete support and
      maintenance to all our clients to make their businesses and processes
      smooth and hassle-free. We make sure that our customers have access to the
      best assistance.
    </p>
    <p>
      <strong>SITECORE UPGRADATION</strong><br />Our efficient support service
      helps you in implementing the latest Sitecore technology by upgrading to
      the latest version 8.0 to making your business efficient, engaged, and
      effective.
    </p>
    <p>
      <strong>SITECORE CONSULTATION</strong><br />Let’s create a connected
      commerce for your enterprise business. Get a complete consultation and
      learn how to leverage Sitecore to make your business more efficient and
      effective.
    </p>`,
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "What are cloud computing services offered by Akscellence ?",
      description: `<p><span>Cloud Computing is a process of delivering/enabling scalable, expandable and almost perfectly elastic software services using internet technologies. It is a method of delivering Software as a Service (SaaS), delivered in a pay-per-use basis.</span></p>
      <p><span>The goal of our cloud computing consultancy is to allow client(s) to take beneﬁt of latest &amp; suitable technologies for them in cloud solutions, without the need for deep knowledge about or expertise with each one of them. Our cloud team aims to cut costs, and helps the clients focus on their core business instead of being impeded by IT obstacles.</span></p>
      <p>We provide SaaS ( Software as a Service )Cloud computing services end to end</p>
      <ul>
      <li class="_AXc">Help in selection of right cloud provider</li>
      <li class="_AXc">Do configuration of server and software on cloud infrastructure</li>
      <li class="_AXc">Do deployment of&nbsp; application on cloud server</li>
      <li class="_AXc">Do Maintenance &amp; Support of cloud infrastructure and applications deployed</li>
      </ul>`,
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "SITECORE SERVICES THAT AKSCELLENCE OFFERS - 3",
      description: "Text 3",
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "SITECORE SERVICES THAT AKSCELLENCE OFFERS - 4",
      description: "Text 4",
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "SITECORE SERVICES THAT AKSCELLENCE OFFERS - 5",
      description: "Text 5",
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "SITECORE SERVICES THAT AKSCELLENCE OFFERS - 6",
      description: "Text 6",
      icon: "more-less glyphicon glyphicon-plus"
    }
  ];

  toggle(ID) {
    this.faqID = this.faqID == ID ? -1 : ID;

    for (var i = 0; i < this.faqs.length; i++) {
      if (i == ID) {
        if (this.faqs[i].icon == "more-less glyphicon glyphicon-plus") {
          this.faqs[ID].icon = "more-less glyphicon glyphicon-minus";
        } else {
          this.faqs[ID].icon = "more-less glyphicon glyphicon-plus";
        }
      } else this.faqs[i].icon = "more-less glyphicon glyphicon-plus";
    }
  }

  ngOnInit() {}
}
