import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'music-store-common-sdk/components/header/index.js';
import 'music-store-common-sdk/components/footer/index.js';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {
  url: string;

  constructor(
    private router: Router) {
    this.url = this.router.url;
  }

  ngOnInit(): void {
  }
}

