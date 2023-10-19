import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-rota',
  templateUrl: './rota.component.html',
  styleUrls: ['./rota.component.scss']
})
export class RotaComponent implements OnInit {
  rota:string=""
  rotaExibicao:string=""
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
 this.rotaExibicao = arrayRota[arrayRota.length-1]
  }

}
