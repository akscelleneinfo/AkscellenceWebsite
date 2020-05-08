import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LeadershipAshishSharmaComponent } from "./leadership-ashish-sharma/leadership-ashish-sharma.component";
import { LeadershipKamleshJhaComponent } from "./leadership-kamlesh-jha/leadership-kamlesh-jha.component";
import { LeadershipPranayGuptaComponent } from "./leadership-pranay-gupta/leadership-pranay-gupta.component";
import { LeadershipSanjayKumarComponent } from "./leadership-sanjay-kumar/leadership-sanjay-kumar.component";

import { LeaderShipRoutingMoule } from "./app-routing-leadership.module";

@NgModule({
  declarations: [
    LeadershipAshishSharmaComponent,
    LeadershipKamleshJhaComponent,
    LeadershipPranayGuptaComponent,
    LeadershipSanjayKumarComponent
  ],
  imports: [RouterModule, LeaderShipRoutingMoule]
})
export class LeaderShipModule {}
