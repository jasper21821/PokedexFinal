import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../pokemon.service";
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon;
  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => this.pokemons = data);
    this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => this.pokemon = data);
  }

}
