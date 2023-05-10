import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registeredUsers: any[] = [];
  loginUser: any = {
    username:'',
    password:''
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem("registeredUsers");
    if(localData !=null) {
      this.registeredUsers = JSON.parse(localData);
    }
  }

  onSubmit() {
    const isValiddUser = this.registeredUsers.find((user)=>(user.username==this.loginUser.username || user.mobile==this.loginUser.username || user.email==this.loginUser.username) && user.password==this.loginUser.password);
    if(isValiddUser) {
      localStorage.setItem("loginUser", JSON.stringify(this.loginUser));
      this.router.navigate(['/app-portal']);
    } else {
      alert("wrong credentials");
    }
  }
}