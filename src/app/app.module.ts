import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonService } from './pokemon.service';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { PokemonSpriteComponent } from './pokemon-sprite/pokemon-sprite.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokeDetailsComponent,
    PokemonSpriteComponent,
    PokemonSearchComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [PokemonService, NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
