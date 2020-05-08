import { Component, OnInit } from '@angular/core';
import { MetaTagAndTitleService } from '../Service and Model/metaTags-Title.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private metaTagAndTitleService: MetaTagAndTitleService) {
  }

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(10);
  }


  faqID: number;
  faqs = [
    {
      header: "What are the services provided by Akscellence ?",
      description: `<p>Some of the services we provide are as below,however it doesn't include ALL that we offer ==&gt;</p>
      <ul>
      <li>Build Custom applications using .Net,Sitecore, SQL server, Sharepoint  </li>
      <li>Cloud computing services end to end , since selection of cloud provider to configuring &amp; deployment of  application on cloud and its maintenance &amp; Support</li>
      <li>CMS solutions using Sitecore, Umbraco , PHP etc</li>
      <li>Oracle ERP solutions for all modules (version R11/12 etc )</li>
      <li>OpenERP/Odoo Solutions for all modules</li>
      <li>BI &amp; Analytics solutions using Power BI, Tableau, Qlik View/Qlik Sense</li>
      <li>Middleware Integration Services (WebSphere ,WeebLogic,Webmethods etc)</li>
      <li>CRM solutions using Salesforce and MS Dynamics.</li>
      </ul>`,
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
      <li class="_AXc">Do deployment of  application on cloud server</li>
      <li class="_AXc">Do Maintenance &amp; Support of cloud infrastructure and applications deployed</li>
      </ul>`,
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "What are BI & Analytics services provided by Akscellence ?",
      description: `<p>Current focus of BI and analytics platform markets is shifting from IT-led reporting to business-led self-service analytics. There are number of tools available for providing solutions around this.We provide BI &amp; Analytics solutions using Power BI , Tableau &amp; Qlik View / Qlik Sense.</p>
      <p>We specialize in providing end-to-end BI solution for businesses to help them aggregate and analyze their data and help them manage their data effectively. By connecting strategic, analytical, and operational initiatives, our BI solutions ensure our client’s competitive edge. </p>
      <p> Our services help to resolve today’s Business problems by removing following challenges faced by traditional BI techniques </p>
      <ul>
      <li>IT spends months or even years building out dashboards and reports based on user requirements. Users get their hands on the dashboards and reports and immediately request changes based on what they see. IT then spends more weeks or months implementing those changes. Users spend time with the new dashboards and reports, and then come up with more requirements as new questions come to mind. It’s a long, painful cycle.</li>
      <li>The extracted and filtered data need to be transformed into operational data warehouses by ETL (Extract, Transform and Load) processes. Then, techniques such as OLAP cubes are used to enhance the data storage to deliver better analytical performance. BUT as long as they are query- and cube-based solution, maintaining associations in the data requires hand coding — and therefore lots of time and money which results as higher cost solution.</li>
      <li>If business user wants to get deeper insight into an aspect of the business which required to add a new data source, then developer would have to go back and re-code the associations by hand all over again. Business users failed to explore data, make discoveries, and uncover insights that can be used to help them solve their problems in new ways.</li>
      <li>The performance gains are overshadowed by the enormous complexity and additional delays imposed by an ETL process.</li>
      <li>Traditional BI required Specialized consultants to perform ETL tasks and set up the Data Warehouses that few decision-makers will use.</li>
      </ul>`,
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "What are potential engagement models offered ?",
      description: `<p><span>Akscellence is open to  any engagement model with potential clients which takes care of mutual interest.</span></p>
      <p><span>For reference, Below are some of the typical engagement model often used in IT services:</span></p>
      <ul>
      <li><span>Fixed Price (FP) model based on Fixed scope</span>
      <ul>
      <li><span>Clearly defined scope exists, aligned to short term goals / objectives of the enterprise</span></li>
      </ul>
      </li>
      <li><span>Time and Material (T&amp;M) model </span>
      <ul>
      <li><span>Suitable for long term projects</span></li>
      <li><span>Scope is unknown and flexibility in scope change is expected</span></li>
      <li><span>First time engagement with the customer </span></li>
      </ul>
      </li>
      <li>Managed services model
      <ul>
      <li>Work clearly scoped out, with clearly marked out deliverables</li>
      <li>Service provider has an excellent understanding of the customer’s systems.</li>
      </ul>
      </li>
      <li>Dedicated team model<span> </span>
      <ul>
      <li><span> Projects of all sizes and scales with ongoing long term milestones </span></li>
      <li><span>Scope is unknown and flexibility in scope change is expected <br /> First time engagement with the particular customer</span></li>
      </ul>
      </li>
      <li>Outcome-based pricing model
      <ul>
      <li>Clearly defined output</li>
      <li>Output aligning to business process or where direct impact can be defined</li>
      <li>For customers who want to align the service provider’s goals with their business goals</li>
      </ul>
      </li>
      </ul>`,
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "Why to choose Akscellence for IT services ?",
      description: `<p>We do SAME thing (IT Services) but DIFFERENTLY  </p>
      <ul>
      <li>We ensure that we hire only from top 20 % of the IT task-force. These are the IT resource from the top 20 % of any IT company driving the rest of the 80 %.</li>
      <li>We maintain the cost advantage to our potential clients by using mix of resources in USA and India</li>
      <li><span>We partner with our clients, advising them how to use information technology to achieve their business objectives or solve their short term/long term business challenges. </span></li>
      <li><span>We are gaining essential competitive advantage through our customer-focus processes. Our processes are systematically aligned with customer expectations and their business goals.</span></li>
      <li><strong>Excellent Services @ Excellent Price. </strong>We focus to deliver services with “High quality @ lower cost with no pre-condition”. Typical IT Services Company would give you few folks with high level of experience and rest with lower experience. We use only very highly experienced resources so good quality is natural outcome of using good quality of resources.</li>
      <li>
      <ul>
      <li><strong>Our management and core team have experience of working with leading IT services companies like IBM, Accenture, Tata, and Fidelity and have served notable business companies like Bank Of America, American Express, SunTrust Bank, Kubota Tractors, and AmerisourceBergen</strong></li>
      <li><strong>Their experience and expertise matches the best possible in IT services industry. Same quality of services and experience are available at fraction of that cost and with utmost ease with no preconceived notion that what type of clients (based on revenue level, employee strength etc.) we want to be engaged with.</strong></li>
      <li><strong>It’s like getting the same quality of IT services that best business of the world are receiving from top IT service companies. And that too at much lower cost.</strong></li>
      </ul>
      </li>
      </ul>`,
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

 

}
