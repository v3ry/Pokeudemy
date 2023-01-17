import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "application de pokemon";
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected!: Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemonList);
    console.log(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    // const index: number = +(event.target as HTMLInputElement).value;
    const id = +pokemonId;
    // console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[id].name}`);
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );
    if (pokemon) {
      console.log("vous avez demandé le pokemon" + pokemon.name);
      this.pokemonSelected = pokemon;
    } else {
      console.log("not found this");
      this.pokemonSelected = pokemon;
    }
  }
}
