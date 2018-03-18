import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes-card',
  templateUrl: './routes-card.component.html',
  styleUrls: ['./routes-card.component.css']
})
export class RoutesCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  panels = [
    {
      active: true,
      disabled: false,
      name: `<nz-tag [nzColor]="'pink'">pink</nz-tag>`,
      customStyle: {
        'border-radius': '4px',
        'margin-bottom': '24px',
        'border': '0px'
      }
    },
    {
      active: true,
      disabled: false,
      name: 'This is panel header 2',
      customStyle: {
        'border-radius': '4px',
        'margin-bottom': '24px',
        'border': '0px'
      }
    },
    {
      active: true,
      disabled: false,
      name: 'This is panel header 3',
      customStyle: {
        'border-radius': '4px',
        'margin-bottom': '24px',
        'border': '0px'
      }
    }
  ];

}
