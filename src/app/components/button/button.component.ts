import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Button} from "../../../types/types"

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
 @Input() item!:Button

 constructor(
 
  private router: Router,
 
) { }

  rota(rota:string){
  const rotaAtualizada=  rota.toLocaleLowerCase()
  this.router.navigateByUrl(`listagem/${rotaAtualizada}`);
  console.log(rota)
}


}
