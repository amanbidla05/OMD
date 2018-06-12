import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  
  
  user = {
    name: '',
    phno: '',
    slctMethod: '',
    gender: '',
    email: '',
    address: '',
    isSubscribe: '' 
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value:any){
    this.user.name =value.name;
    this.user.phno = value.phno;
    this.user.slctMethod= value.slctMethod;
    this.user.gender= value.gender;
    this.user.email= value.email;
    this.user.address= value.address;
    this.user.isSubscribe= value.isSubscribe;
    console.log(this.user);

  }

}
