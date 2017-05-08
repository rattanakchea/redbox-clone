import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Dvd, DvdService } from '../../services/dvd.service';
import { Router } from '@angular/router'
import * as _ from "lodash";
@Component({
  selector: 'dvd-list',
  templateUrl: './dvd-list.html'
})
export class DvdListComponent implements OnInit {

  DvdCollection;
  selectedDvd: Dvd;

  constructor(private router: Router, private dvdService: DvdService) {
    router.events.subscribe((val) => {
        //console.log(val) 
    });
  }

  ngOnInit() {
    console.log('ng on init');
    this.DvdCollection = this.dvdService.data;
  }

  remove(id: number) {
    this.dvdService.remove(id);
  }

  edit(dvd) {
    console.log('edit dvd');
    this.selectedDvd = dvd;
  }

  saveEdit( f) {
    console.log('new selectedDvd', f.value);
    var newDvd = new Dvd(f.value);
    this.dvdService.update(newDvd);
  }

  filterCategory(category: string) {
    if (!category) {
      this.DvdCollection = this.dvdService.data;
      return;
    }
    //console.log('filter by category: ', category);
    this.DvdCollection = this.dvdService.filterByCategory(category);
  }

}
