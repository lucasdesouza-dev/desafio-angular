import { Component, Input, OnInit } from '@angular/core';
import{List} from "../../../types/types"
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() lista!:List[]
  ngOnInit(): void {
  }


}
