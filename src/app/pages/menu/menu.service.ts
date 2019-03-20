import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MenuCategories } from  './model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  finalMenuCategories: MenuCategories[] = [];
  url: string = "http://192.168.1.101:8090/khana/";

  constructor(private http: HttpClient) { }

  getMenuGroup() {
    // const localJsonUrl = '../../../assets/MenuCategories.json'
    const url = this.url +"menucategory";
    return this.http.get(url).pipe(
      map(
        (response: any) => {
          // console.log(response.json());
            const menuCategories: MenuCategories[] = response.object;
            for (let category of menuCategories) {
              // console.log(category);
              if (category['TYPE'] === 'IM HAUS') {
                this.finalMenuCategories.push(category);
              }
            }
            // console.log(this.finalMenuCategories);
            return this.finalMenuCategories;
        }
      )
    );
  }
}
