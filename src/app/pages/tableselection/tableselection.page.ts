import { Component, OnInit } from '@angular/core';
import { TableSelectionService } from '../../services/table-selection.service';
import {restaTable  } from '../../models/restaTable.model';

import { from } from 'rxjs';


@Component({
  selector: 'app-tableselection',
  templateUrl: './tableselection.page.html',
  styleUrls: ['./tableselection.page.scss'],
})
export class TableselectionPage implements OnInit {
  tables: restaTable[];
  count:number;
  style:string;
  constructor(private _tableSelectionService:TableSelectionService ) {
   }

  ngOnInit() {
    this._tableSelectionService.getData().subscribe(
      (response: any) => {
        //console.log(response);
        this.tables = response;
        this.count=this.tables.length;
        this.style="aa";
      }
    );
  }

  

}
