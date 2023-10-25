import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { map } from 'rxjs';
import { environment } from "../../environments/environment"
import { List } from 'src/types/types';
@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private httpClient: HttpClient) { }





  get(segmento: string) {
    return this.httpClient.get(`${environment.API_URL}${segmento}`)
      .pipe(
        map(res => {
          return res as List;
        }),
      );
  }
}

