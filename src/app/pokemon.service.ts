import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemons(offset: number, limit: number): Observable<Pokemon>{
    return this.http.get<Pokemon>(this.baseUrl+"?offset="+offset+"&limit="+limit);
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseUrl+'/'+name);
  }

  searchPokemon(pokename: string): Observable<Pokemon>{
    if (!pokename.trim()){
      return of ();
    }
    return this.http.get<Pokemon>(this.baseUrl+'/'+pokename);
  }

}
