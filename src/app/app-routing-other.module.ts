import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContactUsComponent } from "./contact-us/contact-us.component";
import { PolicyComponent } from "./policy/policy.component";
import { ExperienceprofComponent } from "./experienceprof/experienceprof.component";
import { CompanyProfileComponent } from "./company-profile/company-profile.component";
import { CareerComponent } from "./career/career.component";
import { UsersitemapComponent } from './usersitemap/usersitemap.component';

const routes: Routes = [
  {
    path: "contactus",
    component: ContactUsComponent
  },
  {
    path: "experience-professional",
    component: ExperienceprofComponent
  },
  { path: "policy", component: PolicyComponent },
  { path: "Company-Profile", component: CompanyProfileComponent },
  {
    path: "career",
    component: CareerComponent
  },
  {
    path: "Usersitemap",
    component: UsersitemapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingMoule {}
