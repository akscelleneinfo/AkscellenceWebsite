import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LeadershipAshishSharmaComponent } from "./leadership-ashish-sharma/leadership-ashish-sharma.component";
import { LeadershipKamleshJhaComponent } from "./leadership-kamlesh-jha/leadership-kamlesh-jha.component";
import { LeadershipPranayGuptaComponent } from "./leadership-pranay-gupta/leadership-pranay-gupta.component";
import { LeadershipSanjayKumarComponent } from "./leadership-sanjay-kumar/leadership-sanjay-kumar.component";

const routes: Routes = [
  {
    path: "leaderShip-Ashish-Sharma",
    component: LeadershipAshishSharmaComponent
  },
  {
    path: "leaderShip-Kamlesh-Jha",
    component: LeadershipKamleshJhaComponent
  },
  {
    path: "leaderShip-Pranay-Gupta",
    component: LeadershipPranayGuptaComponent
  },
  {
    path: "leaderShip-Sanjay-Kumar",
    component: LeadershipSanjayKumarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderShipRoutingMoule {}
