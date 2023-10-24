import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient/httpclient.service';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.scss']
})
export class EspeciesComponent implements OnInit {
  constructor(private httpclientService:HttpclientService){}
  @Output() btnDetalhespage= new EventEmitter();

  lista:any
 
 
 
 
  ngOnInit(): void {
   this.httpclientService.get('species').subscribe((res)=>{
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
