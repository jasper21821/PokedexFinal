import { Component, OnInit} from '@angular/core';
import { Pokemon } from '../pokemon';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService }  from '../pokemon.service';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {
  private pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(){
    const name = this.route.snapshot.paramMap.get('name');
    this.pokemonService.getPokemon(name).subscribe(data => this.pokemon = data);
  }

  goBack(): void {
    this.location.back();
  }
}
