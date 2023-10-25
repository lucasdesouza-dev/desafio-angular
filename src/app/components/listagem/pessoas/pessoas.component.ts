import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient/httpclient.service';
@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {
  constructor(private httpclientService: HttpclientService) { }
  @Output() btnDetalhespage = new EventEmitter();


  lista: any



  ngOnInit(): void {
    this.httpclientService.get('people').subscribe((res) => {
      this.setLista(res)
    })
  }

  btnDetalhes(id: string) {
    this.btnDetalhespage.emit(id)
  }

  setLista(res: any) {
    this.lista = res.results


  }
}
