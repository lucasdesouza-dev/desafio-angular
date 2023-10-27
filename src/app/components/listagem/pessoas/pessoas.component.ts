import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient/httpclient.service';
import { LoaderService } from '../../loaderNovo/loader.service';
import { List, SwapiResponse } from 'src/types/types';
@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {
  constructor(private httpclientService: HttpclientService, private loaderService: LoaderService) { }
  @Output() btnDetalhespage = new EventEmitter();


  lista!: List[]



  ngOnInit(): void {
    this.loaderService.show()

    this.httpclientService.get('people').subscribe((res: any) => {

      this.setLista(res)
      this.loaderService.hide()

    })
  }

  btnDetalhes(id: string) {
    this.btnDetalhespage.emit(id)
  }

  setLista(res: { results: List[] }) {

    this.lista = res.results


  }
}
