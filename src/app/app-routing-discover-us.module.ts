import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutUsComponent } from "./about-us/about-us.component";
import { LifeAtAksComponent } from "./life-at-aks/life-at-aks.component";
import { FaqComponent } from "./faq/faq.component";

const routes: Routes = [
  {
    path: "aboutus",
    component: AboutUsComponent
  },
  { path: "faq", component: FaqComponent },
  {
    path: "life-at-Aks",
    component: LifeAtAksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverUSRoutingMoule {}
