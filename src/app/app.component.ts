import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass', '../bulma.min.css']
})
export class AppComponent {
  title = 'SPres';
  router: string;
  constructor(public _router: Router){
    this.router = _router.url;
  }
}
