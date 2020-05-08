import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { OtherRoutingMoule } from "./app-routing-other.module";

import { PolicyComponent } from "./policy/policy.component";
import { ExperienceprofComponent } from "./experienceprof/experienceprof.component";
import { CompanyProfileComponent } from "./company-profile/company-profile.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { CareerComponent } from "./career/career.component";
import { UsersitemapComponent } from './usersitemap/usersitemap.component';
import { EmailService } from './Service and Model/email.service';

@NgModule({
  declarations: [
    PolicyComponent,
    ExperienceprofComponent,
    CompanyProfileComponent,
    ContactUsComponent,
    CareerComponent,
    UsersitemapComponent    
  ],
  imports: [RouterModule, OtherRoutingMoule,HttpClientModule,FormsModule],
  providers:[EmailService]
})
export class OtherModule {}
