import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-multiple-order',
  templateUrl: './multiple-order.component.html',
  styleUrls: ['./multiple-order.component.css']
})
export class MultipleOrderComponent implements OnInit {

  dtOptions: Promise<DataTables.Settings>;


  constructor( private router: Router,@Inject(Http) private http: Http) { }

  ngOnInit(): void {
    this.dtOptions = this.http.get('data/dtOptions.json')
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError);
  }
  mulorder(){
    this.router.navigate(['multiple-order'])
  }

  options: DatepickerOptions = {
    locale: enLocale,
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
