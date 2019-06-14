import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../pokemon.service";
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon;
  pokemonCount: number;
  page: number = 1;
  count: number = 21;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons(){
    this.pokemonService.getPokemonData().subscribe(data => {
      this.pokemonCount = data.count
      this.pokemonService.getPokemons(0, this.pokemonCount).subscribe(data => this.pokemons = data)
    });
  }

}
