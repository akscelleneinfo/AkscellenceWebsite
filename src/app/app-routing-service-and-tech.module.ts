import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BiComponent } from "./bi/bi.component";
import { IntegrationSolutionsComponent } from "./integration-solutions/integration-solutions.component";
import { ECommerceComponent } from "./e-commerce/e-commerce.component";
import { CMSSolutionComponent } from "./cms-solution/cms-solution.component";
import { DotNetSolutionComponent } from "./dot-net-solution/dot-net-solution.component";
import { SitecoreComponent } from "./sitecore/sitecore.component";

import { CommonModule } from "@angular/common";
import { BiUsecaseComponent } from './bi-usecase/bi-usecase.component';

const routes: Routes = [
  {
    path: "bi-analytics",
    component: BiComponent
  },
  {
    path: "Integration-Solutions",
    component: IntegrationSolutionsComponent
  },
  {
    path: "eCommerce",
    component: ECommerceComponent
  },
  {
    path: "CMS-Solution",
    component: CMSSolutionComponent
  },
  {
    path: ".Net-Solution",
    component: DotNetSolutionComponent
  },
  { path: "sitecore", component: SitecoreComponent },
  { path: "bi-usecase", component: BiUsecaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class ServiceAndTechRoutingMoule {}
