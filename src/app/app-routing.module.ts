import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";

import { CurrentOpeningComponent } from "./current-opening/current-opening.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "careers",
    component: CurrentOpeningComponent
  },
  {
    path: "",
    loadChildren: () =>
      import("./app-service-and-tech.module").then(m => m.ServiceAndTechModule)
  },
  {
    path: "",
    loadChildren: () =>
      import("./app-discover-us.module").then(m => m.DiscoverUsModule)
  },
  {
    path: "",
    loadChildren: () =>
      import("./app-blog-details.modules").then(m => m.BlogDetailsModule)
  },
  {
    path: "",
    loadChildren: () =>
      import("./app-leadership.module").then(m => m.LeaderShipModule)
  },
  {
    path: "",
    loadChildren: () => import("./app-blog.module").then(m => m.BlogModule)
  },
  {
    path: "",
    loadChildren: () => import("./app-other.modules").then(m => m.OtherModule)
  },
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
