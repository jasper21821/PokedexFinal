import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from "../pokemon.service";
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-sprite',
  templateUrl: './pokemon-sprite.component.html',
  styleUrls: ['./pokemon-sprite.component.css']
})
export class PokemonSpriteComponent implements OnInit {
  @Input("pokename") pokename: string; 
  pokemon: Pokemon;
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemon(this.pokename).subscribe(data => this.pokemon = data);
  }

}
