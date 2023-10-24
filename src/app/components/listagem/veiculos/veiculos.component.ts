import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient/httpclient.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {
  constructor(private httpclientService:HttpclientService){}
  @Output() btnDetalhespage= new EventEmitter();

  lista:any
 
 
 
 
  ngOnInit(): void {
   this.httpclientService.get('vehicles').subscribe((res)=>{
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
