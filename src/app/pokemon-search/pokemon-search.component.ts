import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { PokemonService } from "../pokemon.service";
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {
  pokemons$: Observable<Pokemon>;
  private searchPokename = new Subject<string>();

  constructor(private pokemonService: PokemonService) { }

  search(pokename: string): void{
    this.searchPokename.next(pokename);
  }

  ngOnInit() {
    this.pokemons$ = this.searchPokename.pipe(
      debounceTime(2000),
      
      distinctUntilChanged(),
 
      switchMap((pokename: string) => this.pokemonService.searchPokemon(pokename)),
    );
  }

}
