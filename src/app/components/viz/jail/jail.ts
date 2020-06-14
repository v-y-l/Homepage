import { Component, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
    selector: 'jail-viz',
    templateUrl: './jail.ng.html',
    styleUrls: ['./jail.css'],
})
export class JailViz implements AfterViewInit {
    svgContainer;

    ngAfterViewInit() {
	this.svgContainer = d3.select("svg.viz");
	this.initializeRectangles();
    }

    initializeRectangles() {
	this.svgContainer.append("rect")
	    .attr("x", 100)
	    .attr("y", 100)
	    .attr("width", 50)
	    .attr("height", 50)
    }
}
