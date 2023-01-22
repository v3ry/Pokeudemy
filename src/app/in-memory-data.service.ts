import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { POKEMONS } from "./pokemon/mock-pokemon";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const pokemons = POKEMONS;
    return { pokemons };
  }
}
