import { Component, Input, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient/httpclient.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  @Input() urlDetalhes!:string

  constructor(private httpclientService:HttpclientService){}
  detalhes!:Object



ngOnInit(): void {
  console.log(this.urlDetalhes)

  this.httpclientService.get(this.urlDetalhes).subscribe((res)=>{
   this.setLista(res)
  })
  console.log(this.detalhes)
 }
 setLista(res: Object) {
  this.detalhes= res
}


}
