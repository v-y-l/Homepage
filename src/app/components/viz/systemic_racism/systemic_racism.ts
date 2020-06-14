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
	this.addBlock(20, 200, 500);
	this.addBlock(20, 300, 1000);
    }

    // x is the destination x, y is the destination y
    // delay is the time until transition
    addBlock(x, y, delay) {
	this.rect = this.svgContainer.append("rect")
	    .attr("x", 20)
	    .attr("y", 10)
	    .attr("width", 50)
	    .attr("height", 50)
	    .attr("opacity", 0);

	this.rect
	    .transition()
	    .delay(delay)
	    .duration(1500)
	    .attr("x", x)
	    .attr("y", y)
	    .attr("opacity", 1);
    }
}
