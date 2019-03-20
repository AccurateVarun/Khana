import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { restaTable } from '../models/restaTable.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableSelectionService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://192.168.1.101:8090/khana/restatable').pipe(
        map((response: any) => {
          return response.object;
        }
      ));
  }

  // public getData(): Observable<restaTable[]> {
  //   return this.http.get<Array<restaTable>>('http://192.168.1.100:8090/khana/restatable', {responseType : 'json'});
}