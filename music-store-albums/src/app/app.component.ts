import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
import { filter } from 'rxjs/operators';
import '@c1/gravity-wc/dist/loading';
import 'music-store-common-sdk/components/header/index.js';
import 'music-store-common-sdk/components/footer/index.js';

@Component({
  selector: 'app-root',
  styleUrls: [ './app.component.css' ],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  loadingModule: boolean;
  url: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.url = this.router.url;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(ev => ev instanceof NavigationEnd))
      .subscribe(this.handleRouterEvent.bind(this));
    this.router.events
      .pipe(filter(ev => ev instanceof NavigationStart))
      .subscribe(this.showLoadingSpinner.bind(this));
  }

  private handleRouterEvent(ev: NavigationEnd): void {
    this.loadingModule = false;
  }

  private showLoadingSpinner(): void {
    this.loadingModule = true;
  }
}
