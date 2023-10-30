import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List } from "../../../types/types"
import { LoaderService } from '../loader/loader.service';
import { Observable, map } from 'rxjs';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  constructor(private loaderService: LoaderService) { }
  @Output() btnDetalhes = new EventEmitter();
  loader: Observable<boolean> = this.loaderService.isLoading$.pipe(map(val => !val))
  @Input() lista!: List[]
  searchResults: List[] = []
  ngOnInit(): void {

  }
  handleSearchEvent(results: any): void {
    this.searchResults = results
    console.log(results)
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
