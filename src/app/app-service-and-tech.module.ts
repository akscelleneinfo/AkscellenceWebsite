import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ServiceAndTechRoutingMoule } from "./app-routing-service-and-tech.module";

import { BiComponent } from "./bi/bi.component";
import { IntegrationSolutionsComponent } from "./integration-solutions/integration-solutions.component";
import { ECommerceComponent } from "./e-commerce/e-commerce.component";
import { CMSSolutionComponent } from "./cms-solution/cms-solution.component";
import { DotNetSolutionComponent } from "./dot-net-solution/dot-net-solution.component";
import { SitecoreComponent } from "./sitecore/sitecore.component";

@NgModule({
  declarations: [
    BiComponent,
    IntegrationSolutionsComponent,
    ECommerceComponent,
    CMSSolutionComponent,
    DotNetSolutionComponent,
    SitecoreComponent
  ],
  imports: [RouterModule, ServiceAndTechRoutingMoule, CommonModule]
})
export class ServiceAndTechModule {}
