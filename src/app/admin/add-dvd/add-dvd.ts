// dvd add form
import { Component, OnInit } from '@angular/core';
import { DvdService } from '../../services/dvd.service';
import { Dvd } from '../../data/models/dvd';

@Component({
  selector: 'add-dvd',
  templateUrl: './add-dvd.html'
})
export class AddDvdComponent {

  dvd: Dvd;

  constructor(private dvdService: DvdService) {
    
    this.dvd = new Dvd({});
  }

  addDvd() {
    console.log('add dvd');

    console.log(this.dvd);

    this.dvdService.add(this.dvd);
  }

}
