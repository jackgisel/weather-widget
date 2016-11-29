import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 

import { FORECAST_KEY, FORECAST_ROOT } from '../constants/constants';


@Injectable ()

export class WeatherService { 

    constructor(private jsonp: Jsonp) { }

    getCurrentLocation():Observable<any> {
        if(navigator.geolocation) {
            return Observable.create(observer => {
                navigator.geolocation.getCurrentPosition(pos => {
                    observer.next(pos);
            }),
                err => {
                return Observable.throw(err);
                }
        });
    }   else {
            console.error("Geolocation is not available");
            return Observable.throw("Geolocation is not available");
        }
    }

    getCurrentWeather(lat: Number, long: Number): Observable<any> {
        const url = FORECAST_ROOT + FORECAST_KEY + '/' + lat + ',' + long;
        const queryParams = "?callback=JSONP_CALLBACK";

        return this.jsonp.get(url + queryParams)
        .map(data => data.json())
        .catch(err =>{
            console.error("Unable to get weather data -", err);
            return Observable.throw(err.json());
        })
    }
 }