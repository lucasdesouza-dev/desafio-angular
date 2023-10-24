import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import{List} from "../../../types/types"
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  @Output() btnDetalhes= new EventEmitter();

  @Input() lista!:List[]
  ngOnInit(): void {
  }

detalhes(id:string){
  this.btnDetalhes.emit(id)
}
}
