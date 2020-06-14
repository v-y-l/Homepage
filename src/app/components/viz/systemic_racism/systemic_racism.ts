import { Component, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
    selector: 'systemic-racism-viz',
    templateUrl: './systemic_racism.ng.html',
    styleUrls: ['./systemic_racism.css'],
})
export class SystemicRacismViz implements AfterViewInit {
    svgContainer;
    rect;

    ngAfterViewInit() {
	this.svgContainer = d3.select("svg.viz");
	this.initializeRectangles();
    }

    initializeRectangles() {
	this.rect = this.svgContainer.append("rect")
	    .attr("x", 100)
	    .attr("y", 100)
	    .attr("width", 50)
	    .attr("height", 50)
	    .attr("opacity", 0);

	this.move();
    }

    move() {
	this.rect
	    .transition()
	    .delay(500)
	    .duration(1500)
	    .attr("x", 100)
	    .attr("y", 200)
	    .attr("opacity", 1);
    }
}
