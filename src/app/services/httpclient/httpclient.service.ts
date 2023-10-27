import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { catchError, map, throwError } from 'rxjs';
import { environment } from "../../environments/environment"
import { List } from 'src/types/types';
import { LoaderService } from 'src/app/components/loaderNovo/loader.service';
@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private httpClient: HttpClient, private loaderService: LoaderService
  ) { }

  quantReq: number = 0



  get(segmento: string) {
    this.quantReq++
    this.loaderService.show()
    return this.httpClient.get(`${environment.API_URL}${segmento}`)
      .pipe(
        map(res => {
          this.quantReq--
          if (this.quantReq == 0) {
            this.loaderService.hide()
          }
          return res as List;
        }),
        catchError(error => {
          this.quantReq--
          if (this.quantReq == 0) {


            this.loaderService.hide()

            // Exibir um alerta com a mensagem de erro
            alert(`Ocorreu um erro: ${error.message}`);
          }

          // Re-lançar o erro para que outros operadores ou subscrições possam lidar com ele
          return throwError(() => error);
        })
      );
  }


}

