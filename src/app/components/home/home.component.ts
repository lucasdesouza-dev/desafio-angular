import { Component } from '@angular/core';
import { Button } from "../../../types/types"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  buttons: Button[] =
    [
      { titulo: "Pessoas", rota: "peoples" },
      { titulo: "Planetas", rota: "planets" },
      { titulo: "Filmes", rota: "films" },
      { titulo: "Espécies", rota: "species" },
      { titulo: "Veículos", rota: "vehicles" },
      { titulo: "Espaçonaves", rota: "starships" }
    ]

}
