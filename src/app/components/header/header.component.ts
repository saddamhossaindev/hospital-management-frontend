import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;



  ngOnInit(): void {
    if(localStorage.getItem("user")){
      this.user = JSON.parse(localStorage.getItem("user"));
    }
  }


  logout(){
    if(localStorage.getItem("token")){
      localStorage.removeItem("token");
    }
    if(localStorage.getItem("user")){
      localStorage.removeItem("user");
    }
  }

}
