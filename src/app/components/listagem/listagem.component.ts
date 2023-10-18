import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  rota:string=""
  tab:number=0


  constructor(
    
    private router: Router
  ) {
    // Pegando rota pra inicializar formulário quando der refresh na página
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rota = event.url
      }
    });
   
  }
  
  
  ngOnInit(): void {
    if (this.rota === '/listagem') {
      this.router.navigateByUrl('')
    }
      
    if (this.rota === '/listagem/pessoas') {
      this.tab = 1
    }
    if (this.rota === '/listagem/planetas') {
      this.tab = 2
    }
    if (this.rota === '/listagem/filmes') {
      this.tab = 3
    }
    if (this.rota === '/listagem/especies') {
      this.tab = 4
    }
    if (this.rota === '/listagem/veiculos') {
      this.tab = 5
    }
    if (this.rota === '/listagem/espaconaves') {
      this.tab = 6
    }
  }
}
