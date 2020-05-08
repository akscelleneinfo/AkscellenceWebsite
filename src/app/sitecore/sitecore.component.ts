import { Component, OnInit } from "@angular/core";
import { MetaTagAndTitleService } from "../Service and Model/metaTags-Title.service";

@Component({
  selector: "app-sitecore",
  templateUrl: "./sitecore.component.html",
  styleUrls: ["./sitecore.component.css"]
})
export class SitecoreComponent implements OnInit {
  constructor(private metaTagAndTitleService: MetaTagAndTitleService) {}

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(2);
  }

  test() {
    alert("test");
  }

  sitecoreID: number;
  sitecores = [
    {
      header: "Sitecore services that Akscellence offers ",
      description: `<p> <strong>SITECORE IMPLEMENTATION</strong><br />Our expert and experienced Sitecore CMS consultants suggest the best Sitecore implementation practices for big enterprise level businesses and SMEs.</p>
      <p><strong>SITECORE DEVELOPMENT</strong><br />We help businesses with Sitecore development solutions and services. Get Sitecore CMS development services for better control and collaborative work environment for your business.</p>
      <p><strong>SITECORE MIGRATIO</strong>N<br />We help you migrate all your data to the latest Sitecore versions. Our expert Sitecore engineers are well versed with the migration tools and technology.</p>
      <p><strong>SITECORE SUPPORT</strong><br />We give complete support and maintenance to all our clients to make their businesses and processes smooth and hassle-free. We make sure that our customers have access to the best assistance.</p>
      <p><strong>SITECORE UPGRADATION</strong><br />Our efficient support service helps you in implementing the latest Sitecore technology by upgrading to the latest version 8.0 to making your business efficient, engaged, and effective.</p>
      <p><strong>SITECORE CONSULTATION</strong><br />Let’s create a connected commerce for your enterprise business. Get a complete consultation and learn how to leverage Sitecore to make your business more efficient and effective.</p>`,
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "Sitecore product overview.",
      description: `<p><strong>Sitecore</strong> is a <strong class="color1">customer experience</strong> management company thatprovides<strong style="color: blue;"> web content management</strong> and <strong style="color: blue;">multichannel marketing</strong>automation software to enable Digital Transformation.</p>
      <p>Sitecore Experience Platform is software for <strong style="color: blue;">content management</strong> and<strong style="color: blue;">contextual marketing.</strong></p>
      <p>The Sitecore platform offers numerous additional features including, <strong style="color: blue;">Personalization, Email Marketing,</strong> Machine Learning (<strong style="color: blue;">Sitecore Cortex</strong>),<strong style="color: blue;"> Analytics</strong> and more.</p>
      <p>SITECORE EXPERIENCE COMMERCE ™</p>
      <p>The ecommerce platform that transforms shoppers into lifelong customers.</p>
      <p>Easily create <strong style="color: blue;">personalized shopping experiences</strong> based on purchasehistory and content.</p>`,
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "Sitecore® Experience Manager (XM)",
      description: `<p> The most efficient, feature-rich and advanced .NET web content management system on the market. Includes features such as:</p>
      <p>Content editing with<strong style="color: blue;"> real-time personalization </strong></p>
      <p><strong style="color: blue;">Experience Explorer</strong> for previewing your website that visitors will<br />experience it</p>
      <p><strong style="color: blue;">Device and geo-IP registration</strong> (additional subscription fee)</p>
      <p>Managing <strong style="color: blue;">multiple websites</strong></p>
      <p>Content in <strong style="color: blue;">several languages</strong></p>
      <p>Advanced search options</p>
      <p><strong style="color: blue;">Multichannel support</strong> and Sitecore® Mobile SDK</p>`,
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "Sitecore® Experience Platform ™ (XP)",
      description: `<p> An integrated cloud-first marketing system that includes Sitecore XM, as well as a large data warehouse, so you can leverage contextual information about your customers to provide a tailor-made and personalized multi-channel<br />experience. Includes features such as:</p>
      <p>content Editor &amp; Experience Explorer , Advanced testing and optimization</p>
      <p>Device and geo-IP registration (additional subscription fee)</p>
      <p><strong style="color: blue;">Sitecore® Experience Database ™</strong> (xDB) for real-time customer insight andhistorical customer insights as well as advanced real-time personalization</p>
      <p>Campaign Creator Tool and Automation for Multichannel Marketing</p>
      <p><strong style="color: blue;">Federated Experience Manager</strong> module included</p>
      <p>Multichannel support and Sitecores Mobile SDK</p>
      <p>Advanced <strong style="color: blue;">client analyzes</strong> (Experience Analytics, Experience Profile, Path<br />Analyzer)</p>`,
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "Sitecore Experience Commerce ™ (XC)",
      description: `<p>Sitecore Experience Commerce lets you <strong style="color: blue;">market in the context</strong> of your customers' current or past interactions with your brand <strong style="color: blue;">before, during and after the purchase.</strong></p>
      <p><strong style="color: blue;">Personalized</strong> shopping experiences</p>
      <p>Managing stock orders, prices, campaigns, customer profiles and product catalog</p>
      <p>Integrates product search, shopping cart interactions and purchase with customer data from Sitecore XP</p>
      <p><strong style="color: blue;">Sitecore Connect ™ for Microsoft Dynamics 365</strong> is priced at a fixed fee based on the package you choose.</p>
      <p><strong style="color: blue;">The Sitecore® Commerce Connect</strong> module is included in XM and XP licenses for free.</p>`,
      icon: "more-less glyphicon glyphicon-plus"
    },
    {
      header: "Add-ons for omnichannel marketing",
      description: `<p>Add channel modules to ensure you deliver a multi-channel contextual experience.</p>
      <p><strong style="color: blue;">Sitecore® Email Experience Manager</strong> (or EXM, an add-on for XP or XC)</p>
      <p><strong style="color: blue;">Sitecore® Print Experience Manager</strong> (or PXM, an add-on for XP, XC or XM)</p>`,
      icon: "more-less glyphicon glyphicon-plus"
    }
  ];

  toggle(ID) {
    this.sitecoreID = this.sitecoreID == ID ? -1 : ID;

    for (var i = 0; i < this.sitecores.length; i++) {
      if (i == ID) {
        if (this.sitecores[i].icon == "more-less glyphicon glyphicon-plus") {
          this.sitecores[ID].icon = "more-less glyphicon glyphicon-minus";
        } else {
          this.sitecores[ID].icon = "more-less glyphicon glyphicon-plus";
        }
      } else this.sitecores[i].icon = "more-less glyphicon glyphicon-plus";
    }
  }
}
