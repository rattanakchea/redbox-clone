import { Component, OnInit } from '@angular/core';
import { DvdService } from '../services/dvd.service';
import { Dvd } from '../models/dvd';

@Component({
  selector: 'home',
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {

  DvdCollection : Dvd[];

  constructor(private dvdService: DvdService) {

    this.DvdCollection = this.dvdService.data;

  }

  ngOnInit() {
  }

}
