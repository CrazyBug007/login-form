import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.css']
})
export class AppViewComponent implements OnInit {
  appName!: string;
  logedinUser: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.appName = this.route.snapshot.params['appName'];
    const loginUser = localStorage.getItem("loginUser");
    if(loginUser !=null) {
      this.logedinUser = JSON.parse(loginUser);
    }
    console.log(this.appName,this.logedinUser);
  } 


}
