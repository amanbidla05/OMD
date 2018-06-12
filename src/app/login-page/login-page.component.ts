import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  loginUser(e) {
  	e.preventDefault();
  	var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    //console.log(username, password);

    if(username == 'testuser' && password == 'test1234')
      this.router.navigate(['dashboard'])
  	
  }


}
