import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { WcsAngularModule } from "wcs-angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BorderCardDirective } from './border-card.directive';

@NgModule({
  declarations: [AppComponent, BorderCardDirective],
  imports: [BrowserModule, AppRoutingModule, WcsAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
