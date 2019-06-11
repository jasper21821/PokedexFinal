import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../pokemon.service";
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[];
  selectedPokemon: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons(){
    this.pokemonService.getPokemons(0, 20).subscribe(data => this.pokemons = data);   
  }

  onSelect(pokemon: Pokemon): void {
    this.pokemonService.getPokemon(pokemon.name).subscribe(data => this.selectedPokemon = data);
  }

}
