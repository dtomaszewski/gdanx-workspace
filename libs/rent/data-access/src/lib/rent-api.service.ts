import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentApiService {
  constructor() {}

  getData(): Observable<{}> {
    return of({});
  }
}
