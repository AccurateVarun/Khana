import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MenuGroup } from '../model/menu.model';
import { MenuGroupService } from './menu-group.service';

@Component({
  selector: 'app-menu-group',
  templateUrl: './menu-group.page.html',
  styleUrls: ['./menu-group.page.scss'],
})
export class MenuGroupPage implements OnInit {
  localImgUrl = '../../assets/img/bolo.ico';
  groupId = 0;
  menuGroupList : MenuGroup[];
  hasMoreThenOneGroup = false;
  groupMenuGroups: [MenuGroup[]] = [MenuGroup[0]];

  constructor(private route: ActivatedRoute,
   private menuGroupService: MenuGroupService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.groupId = +params['id'];
        }
      );
      console.log(this.groupId);
      this.getMenuGroup(this.groupId);
  }

  getMenuGroup(groupId) {
    var counter = 1; 
    this.menuGroupService.getMenuGroup(groupId).subscribe(
      (response: any) => {
        this.menuGroupList = response;
        console.log(this.menuGroupList);
        if(this.menuGroupList.length> 1)
          this.hasMoreThenOneGroup =true;
        //console.log(this.menuGroupList);
        var arrayMenuGroup: MenuGroup[]=[];
        this.groupMenuGroups.pop()
        this.menuGroupList.forEach(element => {
          arrayMenuGroup.push(element);
          if(counter % 3 === 0){
            this.groupMenuGroups.push(arrayMenuGroup);
            arrayMenuGroup = [];
            counter =0;
            //console.log(this.groupMenuGroups);
          }
          counter +=1;
        });
        this.groupMenuGroups.push(arrayMenuGroup);
        //console.log(this.groupMenuGroups);
      }
      );
    }

    getImgUrl(name){
      // return `../../assets/img/${name}.png`;
      return  this.localImgUrl;
    }

}
