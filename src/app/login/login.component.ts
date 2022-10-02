import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  userlogin() {
    console.log(this.login);
    this.loginService.loginUser(this.login).subscribe(data => {
      this.router.navigate(['/home'])
      alert("Login Success")
    }, error => alert("Please enter correct username & password"))
  }
}
