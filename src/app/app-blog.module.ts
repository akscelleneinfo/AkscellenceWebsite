import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { BlogComponent } from "./blog/blog.component";

import { BlogRoutingMoule } from "./app-routing-blog.module";

@NgModule({
  declarations: [BlogComponent],
  imports: [RouterModule, BlogRoutingMoule]
})
export class BlogModule {}
