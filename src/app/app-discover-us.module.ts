import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { DiscoverUSRoutingMoule } from "./app-routing-discover-us.module";

import { AboutUsComponent } from "./about-us/about-us.component";
import { LifeAtAksComponent } from "./life-at-aks/life-at-aks.component";
import { FaqComponent } from "./faq/faq.component";

@NgModule({
  declarations: [AboutUsComponent, LifeAtAksComponent, FaqComponent],
  imports: [RouterModule, DiscoverUSRoutingMoule, CommonModule]
})
export class DiscoverUsModule {}
