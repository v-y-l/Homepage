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
	const position =
	    ol.proj.fromLonLat([this.points[this.pointIndex].longitude,
				this.points[this.pointIndex].latitude]);
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

    onPrevious() {
	this.pointIndex -= 1;
	const position =
	    ol.proj.fromLonLat([this.points[this.pointIndex].longitude,
				this.points[this.pointIndex].latitude]);
	this.flyTo(position);
    }

    onNext() {
	this.pointIndex += 1;
	const position =
	    ol.proj.fromLonLat([this.points[this.pointIndex].longitude,
				this.points[this.pointIndex].latitude]);
	this.flyTo(position);
    }

    flyTo(location) {
	const view = this.map.getView();
	var duration = 2000;
	var zoom = view.getZoom();
	var parts = 2;
	var called = false;
	view.animate({
	    center: location,
	    duration: duration
	});
	view.animate({
	    zoom: zoom - 1,
	    duration: duration / 2
	}, {
	    zoom,
	    duration: duration / 2
	});
    }
}
