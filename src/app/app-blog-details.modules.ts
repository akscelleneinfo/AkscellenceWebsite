import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { BlogDetailsRoutingModule } from "./app-routing-blog-details.modules";

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

@NgModule({
  declarations: [
    AnalyticsBeyondSpreadsheetComponent,
    MarketforBIAndDataAnalyticsComponent,
    PowerBIserviceComponent,
    FailureOfTraditionalBiComponent,
    ReportsVsAnalyticsComponent,
    SitecoreExperienceCommerceImplementationComponent,
    SitecoreExperiencePlatformImplementationComponent,
    SitecoreAndOtherCMSComponent,
    SitecoreDeploymentComponent,
    NewFeaturesInSitecoreComponent,
    OracleErpComponent,
    MoreRevenueForVideoContentCompanyComponent,
    ProductivityUsingSoftwareAutomationComponent,
    PublishingPowerBIReportsWithPythonVisualsComponent
  ],
  imports: [RouterModule, BlogDetailsRoutingModule, CommonModule]
})
export class BlogDetailsModule {}
