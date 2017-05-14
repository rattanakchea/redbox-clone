import { Injectable, Output, EventEmitter } from '@angular/core';
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
    @Output() emitter = new EventEmitter();

    data: Dvd[];
    copyData: Dvd[];
    selectedDvd: Dvd; //save the currently selected dvd
    cart: Dvd[];

    constructor(private http: Http) {
        this.data = [];
        this.copyData = [];
        this.cart = [];
        sampleData.forEach(data => {
            this.data.push(new Dvd(data));
            this.copyData.push(new Dvd(data));
        })
    }

    addToCart(Dvd: Dvd) {
        this.cart.push(Dvd);
        console.log(this.cart);
    }

    removeFromCart(dvdId) {
        //this.cart.push(Dvd);
        //mutate cart array
        _.remove(this.cart, (dvd) => {
            return dvd.id == dvdId;
        })
    }

    getCopyData() {
        return this.copyData;
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
            //console.log('each dvd', dvd);
            return dvd.category.indexOf(category) !== -1; // found
        });
    }

    // mutate data, not good
    filterByCategory2( category: string) {
        if (!category) {
           this.emitter.emit(this.data);
           return;
        }
        console.log('filter by: ', category);
        //return new array of filtered data by category
        this.copyData = _.filter(this.data, (dvd) => {
            console.log('each dvd', dvd.category, dvd.category.indexOf(category));
            return (dvd.category.indexOf(category) !== -1 )// found
        
        });
        this.emitter.emit(this.copyData);
    }
}

export { Dvd } from '../models/dvd';
