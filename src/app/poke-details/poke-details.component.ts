import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {
  @Input("pokemon") pokemon : Pokemon;

  constructor() { }

  ngOnInit() {

  }

}
