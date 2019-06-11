import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonService } from './pokemon.service';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { PokemonSpriteComponent } from './pokemon-sprite/pokemon-sprite.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokeDetailsComponent,
    PokemonSpriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
