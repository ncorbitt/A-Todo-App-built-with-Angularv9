import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  constructor(private router:Router) {}

// navigateTo(to) {
//    console.log(`Navigating to ${to}`);
//    // this.router.navigate([`${ to }`])
// }

// activatedRoute = to get url params
// route:activatedRoute
// route.snapshot.params[<param>] -->

}
