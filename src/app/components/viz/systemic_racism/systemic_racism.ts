import { Component, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
    selector: 'systemic-racism-viz',
    templateUrl: './systemic_racism.ng.html',
    styleUrls: ['./systemic_racism.css'],
})
export class SystemicRacismViz implements AfterViewInit {

    readonly BLOCK_HEIGHT = 50;
    readonly BLOCK_WIDTH = 50;
    readonly GAP_LENGHT = 5
    readonly DELAY = 500;
    readonly DURATION = 1500;
    
    svgContainer;
    rect;

    ngAfterViewInit() {
	this.svgContainer = d3.select("svg.viz");
	this.addBlock(20, 200, this.DELAY);
	this.addBlock(20, 300, this.DELAY*2);
    }

    buildSystem(rows: number, cols: number) {
	for (var c = 1; c <= cols; c++) {
	    for (var r = 1; r <= rows; r++) {
	    }
	}
    }

    // x is the destination x, y is the destination y
    // delay is the time until transition
    addBlock(x: number, y: number, delay: number) {
	this.rect = this.svgContainer.append("rect")
	    .attr("x", 20)
	    .attr("y", 10)
	    .attr("width", this.BLOCK_WIDTH)
	    .attr("height", this.BLOCK_HEIGHT)
	    .attr("opacity", 0);

	this.rect
	    .transition()
	    .delay(delay)
	    .duration(this.DURATION)
	    .attr("x", x)
	    .attr("y", y)
	    .attr("opacity", 1);
    }
}
