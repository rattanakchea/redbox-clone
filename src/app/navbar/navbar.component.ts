import { Component, OnInit } from '@angular/core';
import { Dvd, DvdService } from '../services/dvd.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dvdService: DvdService) { }

  ngOnInit() {
  }

  filter (category) {
    console.log('filter fromn nav bar');

    this.dvdService.filterByCategory2(category);
  }

}
