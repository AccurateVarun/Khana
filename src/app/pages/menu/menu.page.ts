import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './menu.service';
import { MenuCategories } from './model/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  @ViewChild('categoryRow') categoryRow;  

  localImgUrl = '../../assets/img/boisson.ico';
  groupCategories: [MenuCategories[]] = [MenuCategories[0]];
  menuCategories: MenuCategories[];

  constructor(
    private router: Router,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    var counter = 1; 
    this.menuService.getMenuGroup().subscribe(
      (response: any) => {
        this.menuCategories = response;
        //console.log(this.menuCategories);
        var arrayMenuCat: MenuCategories[]=[];
        this.groupCategories.pop()
        this.menuCategories.forEach(element => {
          arrayMenuCat.push(element);
          if(counter % 3 === 0){
            this.groupCategories.push(arrayMenuCat);
            arrayMenuCat = [];
            counter =0;
            //console.log(this.groupCategories);
          }
          counter +=1;
        });
        this.groupCategories.push(arrayMenuCat);
        //console.log(this.groupCategories);
      }
    );
  }

  getCategoryRow() {
    //debugger;
    this.categoryRow.el.hidden =false;
    //console.log(this.categoryRow);
  }

  
  getImgUrl(name){
    return `../../assets/KHANA_images/${name}.jpg`;
    return  this.localImgUrl;
  }

  goBack(){
    this.router.navigate(['/home']);
  }

}
