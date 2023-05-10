import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_NAME } from '../constant/app-view.constant'

@Component({
  selector: 'app-portal',
  templateUrl: './app-portal.component.html',
  styleUrls: ['./app-portal.component.css']
})
export class AppPortalComponent implements OnInit {
  appNames: any = APP_NAME;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  appView(appName: any) {
    this.router.navigate(['/app-view',appName]);
  }

}
