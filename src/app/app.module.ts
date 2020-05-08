import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { SitecoreCardComponent } from "./sitecore-card/sitecore-card.component";

import { OverviewComponent } from "./overview/overview.component";
import { OurClienteleComponent } from "./our-clientele/our-clientele.component";
import { ClieltTestimonialComponent } from "./clielt-testimonial/clielt-testimonial.component";
import { LatestUpdateComponent } from "./latest-update/latest-update.component";
import { JoinUsComponent } from "./join-us/join-us.component";

import { CurrentOpeningComponent } from "./current-opening/current-opening.component";
import { ShowHideButtonComponent } from "./show-hide-button/show-hide-button.component";
import { MetaTagAndTitleService } from "./Service and Model/metaTags-Title.service";

import { BiCardComponent } from "./bi-card/bi-card.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SitecoreCardComponent,
    OverviewComponent,
    OurClienteleComponent,
    ClieltTestimonialComponent,
    LatestUpdateComponent,
    JoinUsComponent,
    CurrentOpeningComponent,
    ShowHideButtonComponent,
    BiCardComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MetaTagAndTitleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
