import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hospital Management';

  isLayout = false;
  layoutExcludedIn = [
    '/login',
    '/register',
  ]

  constructor(
    private router: Router,
  ) {
    this.routeEvent(this.router);
  }

  routeEvent(router: Router){
    router.events.subscribe(e => {
      if(e instanceof NavigationStart){
        if(!this.layoutExcludedIn.includes(e.url)){
          this.isLayout = true;
        }else{
          this.isLayout = false;
        }
      }
    });
  }
}
