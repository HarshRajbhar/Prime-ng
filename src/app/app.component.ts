import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prime-ng-angular-app';
  items: MenuItem[] = [
    {
      label: 'Prim-ng Controller Form',
      url: '/input-Form',
      icon: 'pi pi-fw pi-table',
    },
    { label: 'Prim-ng Table', url: '/table' },
    { label: 'Prim-ng Grid', url: '/grid' },
    { label: 'AG Grid components', url: '/ag-grid' },
    { label: 'Prim-ng Other components', url: '/others' },
  ];

  activeItem: MenuItem = this.items[0];
}
