import { Component, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient/httpclient.service';

@Component({
  selector: 'app-espaconaves',
  templateUrl: './espaconaves.component.html',
  styleUrls: ['./espaconaves.component.scss']
})
export class EspaconavesComponent implements OnInit{
  constructor(private httpclientService:HttpclientService){}
  lista:any
 
 
 
 
  ngOnInit(): void {
   this.httpclientService.get('starships').subscribe((res)=>{
    this.setLista(res)
   })
  }


  setLista(res:any){
    this.lista = res.results

  }
}
