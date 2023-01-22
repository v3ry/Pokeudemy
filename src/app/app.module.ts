import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { WcsAngularModule } from "wcs-angular";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BorderCardDirective } from "./pokemon/border-card.directive";
import { DroppableDirective } from "./droppable.directive";
import { PokemonTypeColorPipe } from "./pokemon/pokemon-type-color.pipe";
import { ListPokemonComponent } from "./pokemon/list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./pokemon/detail-pokemon/detail-pokemon.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokemonModule } from "./pokemon/pokemon.module";
import { FormsModule } from "@angular/forms";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

@NgModule({
  declarations: [AppComponent, DroppableDirective, PageNotFoundComponent],
  imports: [
    BrowserModule,
    PokemonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    AppRoutingModule,
    WcsAngularModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
