import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registeredUsers: any[] = [];
  registerUserObject: any = {
    username:'',
    mobile:'',
    email:'',
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
    const isValidForm = this.registerUserObject.username && this.registerUserObject.mobile && this.registerUserObject.email && this.registerUserObject.password;
    if(isValidForm) {
      this.registeredUsers.push(this.registerUserObject);
      localStorage.setItem("registeredUsers", JSON.stringify(this.registeredUsers));
      this.registerUserObject = {
        username:'',
        mobile:'',
        email:'',
        password:''
      }
      this.router.navigate(['/login']);
    } else {
      alert("Please fill the form");
    }
  }
}
