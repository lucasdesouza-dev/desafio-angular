import { Component, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient/httpclient.service';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.scss']
})
export class EspeciesComponent implements OnInit {
  constructor(private httpclientService:HttpclientService){}
  lista:any
 
 
 
 
  ngOnInit(): void {
   this.httpclientService.get('species').subscribe((res)=>{
    this.setLista(res)
   })
  }


  setLista(res:any){
    this.lista = res.results

  }
}
