import { Component, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient/httpclient.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.scss']
})
export class PlanetasComponent implements OnInit{
  constructor(private httpclientService:HttpclientService){}
  lista:any
 
 
 
 
  ngOnInit(): void {
   this.httpclientService.get('planets').subscribe((res)=>{
    this.setLista(res)
   })
  }


  setLista(res:any){
    this.lista = res.results

  }
}
