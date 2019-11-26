import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './welcomeScreen.component.html',
  styleUrls: ['./welcomScreen.component.css']
})
export class WelcomeScreenComponent implements OnInit {

  text = 'First string';
  inputBoxValue = '';
  nomi: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  hello() {
    console.log('Clicked Button');
  }
}
