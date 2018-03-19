/*
 * MIT License
 *
 * Copyright (c) 2018 
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
