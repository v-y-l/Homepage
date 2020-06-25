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
    latitude: number = 25.08580655;

    longitude: number = 121.56435563960218;

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
		center: ol.proj.fromLonLat([this.longitude, this.latitude]),
		zoom: 8,
	    })
	});
    }
}
