import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoaderService } from './loader.service'


@Component({
  selector: 'app-loadernovo',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  

  constructor(public  loaderService:LoaderService){

  }
  
  public loading : Observable<boolean> = this.loaderService.isLoading$
  
  
  
  ngOnInit(): void {
  console.log(this.loading)

  }

}
