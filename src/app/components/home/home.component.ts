import { Component } from '@angular/core';
import {Button} from "../../../types/types"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  buttons:Button[] = 
  [
    {titulo:"Pessoas",rota:"pessoas"},
    {titulo:"Planetas",rota:"planetas"},
    {titulo:"Filmes",rota:"filmes"},
    {titulo:"Espécies",rota:"especies"},
    {titulo:"Veículos",rota:"veiculos"},
    {titulo:"Espaçonaves",rota:"espaconaves"}
  ]

}
