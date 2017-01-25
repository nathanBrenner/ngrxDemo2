import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  session$; // $ is a convention to mark the property as of a rxjs Subject

  constructor(private _store: Store<any>){
    this.session$ = _store.select('session');
  }

  ngOnInit(){}
}
