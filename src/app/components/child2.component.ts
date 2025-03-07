import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'child-two',
  template: `
    <h3>Routing Two</h3>
    <ul>
      <li
        *ngFor="let item of items"
        [contextMenu]="routingMenu"
        [contextMenuValue]="item"
      >
        Right Click: {{ item?.name }}
      </li>
    </ul>
    <context-menu #routingMenu>
      <ng-template contextMenuItem (execute)="showMessage('Hi, ' + $event)">
        Go!
      </ng-template>
    </context-menu>
  `,
})
export class ChildTwoComponent {
  public items = [
    {
      name: 'One',
      url: '/one',
    },
    {
      name: 'Two',
      url: '/two',
    },
  ];

  constructor(private router: Router) {}

  public showMessage(message: any) {
    console.log(message);
  }

  public go(item: any) {
    this.router.navigateByUrl(item.url);
  }
}
