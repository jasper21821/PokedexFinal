import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { PokemonService } from "../pokemon.service";
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {
  pokename: string;
  
  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
    
  }

  searchPokemon(pokename : string){
    this.pokemonService.getPokemon(pokename).subscribe(data => this.pokename = data.name);
    this.router.navigate(['/pokemons/'+pokename]);
  }

}
