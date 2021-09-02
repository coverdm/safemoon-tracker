import { Component } from '@angular/core';

@Component({
  selector: 'app-safemoon-ref',
  template: `
    <a href="http://safemoon.net">
      <img src="../../../../assets/safemoon-logo.svg" alt="Safemoon logo"/>
      Safemoon.net
    </a>
  `,
  styles: [
    `a {
      color: #fff;
      height: 100%;
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    img {
      margin-right: 10px;
    }
    `
  ]
})
export class SafemoonRefComponent {

}
