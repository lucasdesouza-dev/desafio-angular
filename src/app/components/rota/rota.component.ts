import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-rota',
  templateUrl: './rota.component.html',
  styleUrls: ['./rota.component.scss']
})
export class RotaComponent implements OnInit {
  rota!: string
  rotaPrincipal!: string
  rotaDetalhes!: string
  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rota = event.url
      }
    });

  }
  ngOnInit(): void {
    const arrayRota = this.rota.split("/")
    this.rotaPrincipal = this.getRotaDetalhes(arrayRota, 2)
    this.rotaDetalhes = this.getRotaDetalhes(arrayRota, 3)


  }

  getRotaDetalhes(arrayRota: string[], posicao: number) {
    if (arrayRota.length >= posicao) {

      return arrayRota[posicao] ? arrayRota[posicao][0]?.toLocaleUpperCase() + arrayRota[posicao].substring(1) : ""
    } else
      return ""


  }

}
