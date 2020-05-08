import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AnalyticsBeyondSpreadsheetComponent } from "./analytics-beyond-spreadsheet/analytics-beyond-spreadsheet.component";
import { MarketforBIAndDataAnalyticsComponent } from "./marketfor-biand-data-analytics/marketfor-biand-data-analytics.component";
import { PowerBIserviceComponent } from "./power-biservice/power-biservice.component";
import { FailureOfTraditionalBiComponent } from "./failure-of-traditional-bi/failure-of-traditional-bi.component";
import { ReportsVsAnalyticsComponent } from "./reports-vs-analytics/reports-vs-analytics.component";
import { SitecoreExperiencePlatformImplementationComponent } from "./sitecore-experience-platform-implementation/sitecore-experience-platform-implementation.component";
import { SitecoreExperienceCommerceImplementationComponent } from "./sitecore-experience-commerce-implementation/sitecore-experience-commerce-implementation.component";
import { SitecoreAndOtherCMSComponent } from "./sitecore-and-other-cms/sitecore-and-other-cms.component";
import { SitecoreDeploymentComponent } from "./sitecore-deployment/sitecore-deployment.component";
import { NewFeaturesInSitecoreComponent } from "./new-features-in-sitecore/new-features-in-sitecore.component";
import { MoreRevenueForVideoContentCompanyComponent } from "./more-revenue-for-video-content-company/more-revenue-for-video-content-company.component";
import { OracleErpComponent } from "./oracle-erp/oracle-erp.component";
import { ProductivityUsingSoftwareAutomationComponent } from "./productivity-using-software-automation/productivity-using-software-automation.component";
import { PublishingPowerBIReportsWithPythonVisualsComponent } from "./publishing-power-bi-reports-with-python-visuals/publishing-power-bi-reports-with-python-visuals.component";

const routes: Routes = [
  // {
  //   path: "Analytics-Beyond-Spreadsheet",
  //   component: AnalyticsBeyondSpreadsheetComponent
  // },
  // {
  //   path: "Market-for-BI-Data-Analytics",
  //   component: MarketforBIAndDataAnalyticsComponent
  // },
  // { path: "Power-BI-service", component: PowerBIserviceComponent },
  // {
  //   path: "Publishing-Power-BI-reports-with-Python-visuals",
  //   component: PublishingPowerBIReportsWithPythonVisualsComponent
  // },
  // {
  //   path: "failure-of-traditional-bi",
  //   component: FailureOfTraditionalBiComponent
  // },
  // { path: "reports-vs-Analytics", component: ReportsVsAnalyticsComponent },
  // {
  //   path: "sitecore-experience-platform-implementation",
  //   component: SitecoreExperiencePlatformImplementationComponent
  // },
  // {
  //   path: "sitecore-experience-commerce-implementation",
  //   component: SitecoreExperienceCommerceImplementationComponent
  // },
  // { path: "Sitecore-and-Other-CMS", component: SitecoreAndOtherCMSComponent },
  // { path: "Sitecore-deployment", component: SitecoreDeploymentComponent },
  // {
  //   path: "new-features-in-sitecore",
  //   component: NewFeaturesInSitecoreComponent
  // },
  // {
  //   path: "more-revenue-for-video-content-company",
  //   component: MoreRevenueForVideoContentCompanyComponent
  // },
  // { path: "oracle-erp", component: OracleErpComponent },
  // {
  //   path: "Productivity-using-software-automation",
  //   component: ProductivityUsingSoftwareAutomationComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogDetailsRoutingModule {}
