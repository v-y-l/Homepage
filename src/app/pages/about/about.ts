import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { POINTS, PointOfInterest } from './data';

declare var ol: any;

@Component({
    selector: 'about',
    templateUrl: './about.ng.html',
    styleUrls: ['./about.css']
})
export class About implements AfterViewInit {
    points: PointOfInterest[] = POINTS;
    point: PointOfInterest = this.points[0];

    map: any;

    @ViewChild('aboutBox') aboutBox: ElementRef;

    ngAfterViewInit() {
	const position =
	    ol.proj.fromLonLat([this.point.longitude, this.point.latitude]);
	const overlay = new ol.control.Control({
	    element : this.aboutBox.nativeElement,
	});
	this.map = new ol.Map({
	    target: 'map',
	    layers: [
		new ol.layer.Tile({
		    source: new ol.source.OSM()
		})
	    ],
	    controls: [overlay],
	    view: new ol.View({
		center: position,
		zoom: 7,
	    })
	});
    }
}
