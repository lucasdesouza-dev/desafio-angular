import { Component, Input, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient/httpclient.service';
import { List } from 'src/types/types';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  urlDetalhes!: string[]
  constructor(private httpclientService: HttpclientService) { }
  detalhes!: List
  name!: string


  ngOnInit(): void {
    this.urlDetalhes = JSON.parse(sessionStorage.getItem('@url') ?? "")

    this.httpclientService.get(`${this.urlDetalhes[0]}/${this.urlDetalhes[1]}`).subscribe((res) => {
      this.setLista(res)
    })
  }
  setLista(res: List) {
    this.detalhes = res
    console.log(this.detalhes)
  }
  getName() {
    const name = this.detalhes?.name ? this.detalhes.name : this.detalhes?.title
    return name
  }
  getFilmes(film: string) {
    const filmUrl = film.split('/')
    const name = this.httpclientService.get(`${filmUrl[4]}/${filmUrl[5]}`).subscribe((res) => {
      console.log(res)
      return res
    })
    return name
  }
}
