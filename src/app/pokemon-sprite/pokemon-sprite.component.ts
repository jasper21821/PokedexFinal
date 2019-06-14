import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from "../pokemon.service";
import { Pokemon } from '../pokemon';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pokemon-sprite',
  templateUrl: './pokemon-sprite.component.html',
  styleUrls: ['./pokemon-sprite.component.css']
})
export class PokemonSpriteComponent implements OnInit {
  @Input("pokename") pokename: string; 
  pokemon: Pokemon;
  noSprite = 'assets/images/placeholder.png';
  loading: boolean = true;
  
  
  constructor(private pokemonService: PokemonService, private spinner: NgxSpinnerService) { }

  
  ngOnInit() {
    this.pokemonService.getPokemon(this.pokename).subscribe(data => {
      this.pokemon = data
      this.loading = false
    });
  }

}
