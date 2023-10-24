import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient/httpclient.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {
  constructor(private httpclientService:HttpclientService){}
  @Output() btnDetalhespage= new EventEmitter();

  lista:any
 
 
 
 
  ngOnInit(): void {
   this.httpclientService.get('films').subscribe((res)=>{
    this.setLista(res)
   })
  }

  btnDetalhes(id:string){
    this.btnDetalhespage.emit(id)
  }

  setLista(res:any){
    this.lista = res.results

  }
}
