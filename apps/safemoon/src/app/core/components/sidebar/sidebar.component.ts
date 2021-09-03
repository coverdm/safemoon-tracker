import { Component, Injectable } from '@angular/core';
import { ActivationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent {

  active: string;

  constructor(private _router: Router) {
    _router.events
      .pipe(
        filter(event => event instanceof NavigationStart)
      )
      .subscribe((event) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.active = (event?.url as string).substring(1);
      });
  }

  items: any[] = [
    {
      title: 'Dashboard',
      route: '',
      icon: 'icon-dashboard'
    },
    {
      title: 'Reflections',
      route: 'reflections',
      icon: 'icon-reflections'
    },
    {
      title: 'Burning',
      route: 'burning',
      icon: 'icon-burning'
    },
    {
      title: 'Whales',
      route: 'whales',
      icon: 'icon-whale'
    },
    {
      title: 'Donations',
      route: 'donations',
      icon: 'icon-donations'
    },
    {
      title: 'About',
      route: 'about',
      icon: 'icon-about'
    }
  ]

}
