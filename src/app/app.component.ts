import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  // template: '<store></store>',
  // templateUrl: './app.component.html',
  // template: '<div class="bg-success p-2 text-center text-white"> This is my sports catalogue </div>',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sports-store';
}
