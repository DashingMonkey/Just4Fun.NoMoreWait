import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-direction-card',
  templateUrl: './direction-card.component.html',
  styleUrls: ['./direction-card.component.css']
})
export class DirectionCardComponent implements OnInit {

  directionTitle: string = 'Direction';

  loading: boolean = true;

  extraRouterLink: string = '/';

  currentLocation: number = 0;

  title0: string = '';

  desc0: string = '';


  title1: string = '';

  desc1: string = '';


  stepBarDirection: string = 'vertical';

  constructor() {
  }

  ngOnInit() {
    this.loadDirection()
  }


  private loadDirection(): void {
    this.title0 = 'title0';
    this.desc0 = 'desc0';
    this.title1 = 'title1';
    this.desc1 = 'desc1';
    this.loading = false;
  }

}
