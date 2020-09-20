import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'soar';
}
//  const refresh = interval(1000)
//  refresh.subscribe(
//    res =>console.log(res)
//  )