import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

declare var ol: any;

@Component({
    selector: 'about',
    templateUrl: './about.ng.html',
    styleUrls: ['./about.css']
})
export class About implements AfterViewInit {
    latitude: number = 23.8629809;
    longitude: number = 121.16388;

    map: any;

    @ViewChild('overlay') overlayElement: ElementRef;

    ngAfterViewInit() {
	const overlay = new ol.Overlay({
	    positioning: 'top-center',
	    element : this.overlayElement.nativeElement,
	});
	this.map = new ol.Map({
	    target: 'map',
	    layers: [
		new ol.layer.Tile({
		    source: new ol.source.OSM()
		})
	    ],
	    overlays: [overlay],
	    view: new ol.View({
		center: ol.proj.fromLonLat([this.longitude, this.latitude]),
		zoom: 7,
	    })
	});
	this.addMarker();
    }

    addMarker() {
	 var layer = new ol.layer.Vector({
	     source: new ol.source.Vector({
		 features: [
		     new ol.Feature({
			 geometry: new ol.geom.Point(ol.proj.fromLonLat([this.longitude, this.latitude]))
		     })
		 ]
	     })
	 });
	this.map.addLayer(layer);
    }
}
