import { Component, OnInit } from '@angular/core';
import { MetaTagAndTitleService } from '../Service and Model/metaTags-Title.service'

@Component({
  selector: 'app-bi',
  templateUrl: './bi.component.html',
  styleUrls: ['./bi.component.css']
})
export class BiComponent implements OnInit {

  constructor(private metaTagAndTitleService: MetaTagAndTitleService) {
  }

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(1);
  }
BIID: number;
  BIs = [
    {
      header: "	What is Power BI",
      description: `<p>Power BI is a business analytics service that delivers insights to enable fast, informed decisions.</p>
      <ul>
      <li>Transform data into stunning visuals and share them with colleagues on any device.</li>
      <li>Visually explore and analyze data&mdash;on-premises and in the cloud&mdash;all in one view.</li>
      <li>Collaborate on and share customized dashboards and interactive reports.</li>
      <li>Scale across your organization with built-in governance and security.</li>
      </ul>`,
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "	Why to go for Power BI for analytics ?",
      description: `<ul>
      <li>It is one of the largest and fastest growing business intelligence clouds</li>
      </ul>
      
      <ul>
      <li>For 12 consecutive years, Gartner has named Microsoft as a Magic Quadrant Leader among analytics and business intelligence platforms.</li>
      </ul>
      
      <ul>
      <li>Power BI Desktop is free to use and Power BI Pro is available for a low monthly price per user, you can cost-effectively offer everyone BI and analytics capabilities to drive a data culture across your org.</li>
      </ul>
      
      <ul>
      <li>Take advantage of the latest advances in Microsoft AI to help non-data scientists prepare data, build machine learning models, and find insights quickly from both structured and unstructured data, including text and images.</li>
      </ul>
      
      <ul>
      <li>Get unparalleled Excel integration</li>
      </ul>
      <ul>
      <li>Go from data to insights and insights to action with the Microsoft Power Platform&mdash;combining Power BI with PowerApps and</li>
      <li>Microsoft Flow to easily build business applications and automate workflows.</li>
      </ul>`,
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "	What are your offerings for Datawarehouse Solution ?",
      description: `
 <p>We do provide traditional Datawarehouse solution for simple as well very diverse data sources to get data.</p>
<p>We do have capability and experience to work on most of the domains and Datawarehouse tools.</p>
<p>We offer catalogue of right KPIs to choose from as per clientand need.</p>
<p>We recommend list of right KPIs to use on case to case basis to eachclient and create data in Datawarehouse accordingly</p>
<p>so that proper analytics could be achieved for these KPIs expect by a client.</p>`,
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: " What are your offerings for Power BI ?",
      description: `
      <p>With KPIs selected we do offer different options of Dashboards that suits the client&rsquo;s need based on their domain and group of KPIs to match the objective of actionable business insights.&nbsp;We use all advanced &amp; latest features in Power BI where we use AI&nbsp;extensively and where applicable.</p>
      <p>For ex: We use <strong>AI Insights</strong>&nbsp;feature in Power BI that blends machine&nbsp;learning into Power BI&rsquo;s data transformation process.</p>`,
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "What are ways you get engaged with clients",
      description: `
      <p>We provide senior resources to design solutions &amp; Architecture for any complex business problem in the initial stage.</p>
      <p> We work as Staff Augmentation as well and provide resources as per demand.</p>
      <p><strong>Blend of Tech &amp; Business :</strong></p>
      <p>Our Experienced resources bring good blend of Business knowledge and Technical excellence. Some resource we do have over 20 years of experience in the industry who have worked with likes of IBM and Accenture for leading clients of USA.</p>
      <p>Resources we provide would be helped by such mentors in our company even if senior folks aren&rsquo;t directly engaged in the account.</p>
      <p><strong>Resource commitment and turnaround timing</strong> :</p>
      <p>Typically within 4-6 weeks we can provide resources in Bangalore, Mumbai and NCR to start with.</p>
      <p>We request our clients to share the lead at the earliest so that it optimizes the turnaround time.</p>
      <p>We do maintain some bench at each location but time of availability may vary with time du to multiple engagement.</p>`,
      icon: "more-less glyphicon glyphicon-plus"
    }
  ];
  toggle(ID) {
    this.BIID = this.BIID == ID ? -1 : ID;

    for (var i = 0; i < this.BIs.length; i++) {
      if (i == ID) {
        if (this.BIs[i].icon == "more-less glyphicon glyphicon-plus") {
          this.BIs[ID].icon = "more-less glyphicon glyphicon-minus";
        } else {
          this.BIs[ID].icon = "more-less glyphicon glyphicon-plus";
        }
      } else this.BIs[i].icon = "more-less glyphicon glyphicon-plus";
    }
  }

}
