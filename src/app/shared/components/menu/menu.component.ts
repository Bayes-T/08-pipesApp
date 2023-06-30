import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {
            label: 'Pipes de Angular',
            icon: 'pi pi-camera',
            routerLink: ["''"],
            items: [
              {label: 'Textos y fechas',
               icon: 'pi pi-calendar',
               routerLink: ["''"]
              },
              {
                label: 'Números',
                icon: 'pi pi-dollar',
                routerLink: ['numbers']
              },
              {
                label: 'No comunes',
                icon: 'pi pi-gift',
                routerLink: ['uncommon'],
              }
            ]
          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [
              {label: 'Otros pipes',
               icon: 'pi pi-cog',
               routerLink: ['custom']
              }
            ]
          }
      ];
  }

}
