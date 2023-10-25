import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List } from "../../../types/types"
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  @Output() btnDetalhes = new EventEmitter();

  @Input() lista!: List[]
  ngOnInit(): void {
  }

  detalhes(idtitle: string, url: string) {
    this.btnDetalhes.emit(idtitle)
    sessionStorage.setItem("@url", JSON.stringify(this.geturlReaftorado(url)))
  }

  geturlReaftorado(url: string) {
    const rota = url.split('/')
    return [rota[4], rota[5]]
  }
}
