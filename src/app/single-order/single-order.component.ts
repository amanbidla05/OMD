import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit():void {
    this.dtOptions= {
      pagingType: 'full_numbers'
    };
  }

}
