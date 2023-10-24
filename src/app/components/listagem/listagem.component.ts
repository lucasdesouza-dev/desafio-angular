import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  rota!:string
  tab:number=0
  urlParts! :string[]
  urlDetalhes!:string
  constructor(
    
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rota = event.url
        this.urlParts = event.url.split('/');
      }
    });
   
  }
  btnDetalhespage(id:string,rota:string){
   let idFormat =id.replace(/\s/g, "-")
    let currentUrl = `/listagem/${rota}/${idFormat}`;
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {  
    this.router.navigate([currentUrl]);
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
    if (this.urlParts.length ===4) {
      this.tab = 7
    }
  }
}
