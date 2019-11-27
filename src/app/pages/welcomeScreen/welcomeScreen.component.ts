import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './welcomeScreen.component.html',
  styleUrls: ['./welcomScreen.component.css']
})
export class WelcomeScreenComponent implements OnInit {


  login_opened:boolean = false;
  register_opened:boolean = false;
  email: string;
  password: string;



  constructor() { }

  ngOnInit() {
  }

  loginClick() {
    console.log("Login show");
    this.login_opened = true;
  }

  registerClick(){
    this.register_opened = true;
  }
}
