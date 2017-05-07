import { Component, OnInit } from '@angular/core';

import { DvdService } from '../../services/dvd.service';

@Component({
  selector: 'dvd-list',
  templateUrl: './dvd-list.html'
})
export class DvdListComponent implements OnInit {

  DvdCollection;

  constructor(private dvdService: DvdService) { }

  ngOnInit() {
    this.DvdCollection = this.dvdService.data;
  }

}
