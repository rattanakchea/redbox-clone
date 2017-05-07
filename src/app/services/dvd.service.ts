import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { Dvd, sampleData } from '../data/models/dvd';

@Injectable()
export class DvdService {
    data: Dvd[];

    constructor(private http: Http) {
        this.data = [];
        sampleData.forEach(data => {
            this.data.push(new Dvd(data));
        })
    }

    add (Dvd: Dvd) {
        this.data.push(Dvd)
    }


}