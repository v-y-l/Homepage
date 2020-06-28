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
    pointIndex: number = 0;

    map: any;

    @ViewChild('aboutBox') aboutBox: ElementRef;

    ngAfterViewInit() {
	const position = this.getCurrentPosition();
	const zoom = this.getCurrentZoom();
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
		zoom,
	    })
	});
    }

    getCurrentPosition() {
	return ol.proj.fromLonLat(
	    [this.points[this.pointIndex].longitude,
	     this.points[this.pointIndex].latitude]);
    }

    getCurrentZoom() {
	return this.points[this.pointIndex].zoom;
    }


    onPrevious() {
	this.pointIndex -= 1;
	const position = this.getCurrentPosition();
	const zoom = this.getCurrentZoom();
	this.flyTo(position, zoom);
    }

    onNext() {
	this.pointIndex += 1;
	const position = this.getCurrentPosition();
	const zoom = this.getCurrentZoom();
	this.flyTo(position, zoom);
    }

    flyTo(position, zoom) {
	const view = this.map.getView();
	var duration = 500;
	view.animate({
	    zoom,
	    center: position,
	});
    }
}
