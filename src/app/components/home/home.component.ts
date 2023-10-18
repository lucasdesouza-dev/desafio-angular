import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  buttons: Array<string> = ["Pessoas", " Planetas", "Filmes", "Espécies", "Veículos", "Espaçonaves"]
}
