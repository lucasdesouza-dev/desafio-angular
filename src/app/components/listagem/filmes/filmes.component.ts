import { Component, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient/httpclient.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {
  constructor(private httpclientService:HttpclientService){}
  lista:any
 
 
 
 
  ngOnInit(): void {
   this.httpclientService.get('films').subscribe((res)=>{
    this.setLista(res)
   })
  }


  setLista(res:any){
    this.lista = res.results

  }
}
