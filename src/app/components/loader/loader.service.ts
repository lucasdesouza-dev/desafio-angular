import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _isLoading = new BehaviorSubject<boolean>(false);
  public isLoading$ = this._isLoading.asObservable();

  constructor() { }

  show() {
    this._isLoading.next(true);
  }

  hide() {
    this._isLoading.next(false);
  }
}
