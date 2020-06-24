import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

declare var ol: any;

@Component({
    selector: 'about',
    templateUrl: './about.ng.html',
    styleUrls: ['./about.css']
})
export class About implements OnInit {
    latitude: number = 18.5204;
    longitude: number = 73.8567;

    map: any;

    ngOnInit() {
	this.map = new ol.Map({
	    target: 'map',
	    layers: [
		new ol.layer.Tile({
		    source: new ol.source.OSM()
		})
	    ],
	    view: new ol.View({
		center: ol.proj.fromLonLat([73.8567, 18.5204]),
		zoom: 8,
	    })
	});
    }

    goToTaipei() {
	const tpLonLat = [25.0330, 121.121.5654];
	this.map.getView().setCenter(tpLonLat);
    }
}
