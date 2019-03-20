import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MenuGroup } from  '../model/menu.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuGroupService {
  url: string = "http://192.168.1.101:8090/khana/";

  constructor(private http: HttpClient) { }

  getMenuGroup(groupId) {
    const url = this.url +"menuGroup/" + groupId;
    return this.http.get(url).pipe(
      map(
        (response: any) => {
            //console.log(response.json().object);
            return response.object;
        }
      )
    );
  }
}
