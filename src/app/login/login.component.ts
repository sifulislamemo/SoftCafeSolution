import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // login: Login = new Login();
  loginForm = new FormGroup({
    userName: new FormControl(''),
    passWord: new FormControl('')

  })
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  userlogin() {
    this.loginService.loginUser(this.loginForm.value).subscribe(data => {
      this.router.navigate(['/home'])
      alert("Login Success")
    }, error => alert("Please enter correct username & password"))
  }
}
