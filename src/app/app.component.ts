import { Component } from '@angular/core';
// @ts-ignore
import * as data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = data;
  constructor() {}
}
