import { Component } from '@angular/core';
import "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // private var_one: any;
  constructor(){}

  // ngOnInit(){
  //   this.service.getOrders().subscribe(res=>this.var_one=res,
  //   err=>console.log(err));
  // }
}
