// dvd add form
import { Component, OnInit } from '@angular/core';
import { DvdService } from '../../services/dvd.service';
import { Dvd } from '../../models/dvd';

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
    var newDvd = new Dvd(this.dvd);
    console.log('new dvd:', newDvd);

    this.dvdService.add(newDvd);
    this.dvd = new Dvd({});
  }

}
