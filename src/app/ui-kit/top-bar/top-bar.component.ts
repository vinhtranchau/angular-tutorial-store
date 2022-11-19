import { Component, OnInit } from '@angular/core';

import { storeRoute } from '../../core/routes';

@Component({
  selector: 'my-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  storeRoute = storeRoute;

  constructor() { }

  ngOnInit(): void {
  }

}
