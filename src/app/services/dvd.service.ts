import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { Dvd, sampleData } from '../models/dvd';
import * as _ from "lodash";
@Injectable()
export class DvdService {
    data: Dvd[];

    selectedDvd: Dvd; //save the currently selected dvd

    constructor(private http: Http) {
        this.data = [];
        sampleData.forEach(data => {
            this.data.push(new Dvd(data));
        })
    }

    add (Dvd: Dvd) {
        this.data.push(Dvd)
    }

    update(updatedDvd) {

        console.log('dvd service', updatedDvd);
        var match = _.find(this.data, (dvd) => {
            return dvd.id === updatedDvd.id;
        })
        if (match) {
            console.log(match);
            match.title = updatedDvd.title;
            match.image = updatedDvd.image;
            match.category = updatedDvd.category;
        }
    }

    // Assumption: id is unique
    //mutate data
    remove (id: number) {
        _.remove(this.data, (dvd) => {
            return dvd.id == id;
        })
    }

    filterByCategory( category: string) {
        //return new array of filtered data by category
        return _.filter(this.data, (dvd) => {
            console.log('each dvd', dvd);
            return dvd.category.indexOf(category) !== -1; // found
        });
    }
}

export { Dvd } from '../models/dvd';