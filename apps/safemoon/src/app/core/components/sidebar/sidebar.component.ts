import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent {

  items: any[] = [
    {
      title: 'Dashboard',
      route: 'dashboard',
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
