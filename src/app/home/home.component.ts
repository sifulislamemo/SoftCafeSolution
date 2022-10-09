import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Login } from '../login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login: Login[] = [];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getUser().subscribe(data => this.login = data);
  }

}
