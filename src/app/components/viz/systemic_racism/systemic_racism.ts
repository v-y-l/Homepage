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
    readonly GAP_LENGTH = 5
    readonly DELAY = 500;
    readonly DURATION = 1500;
    
    svgContainer;
    rect;

    ngAfterViewInit() {
	this.svgContainer = d3.select("svg.viz");
	let svgWidth = parseInt(this.svgContainer.style("width"));
	let svgHeight = parseInt(this.svgContainer.style("height"));
	const maxCols = svgWidth / (this.BLOCK_WIDTH + this.GAP_LENGTH);
	const maxRows = svgHeight / (this.BLOCK_HEIGHT + this.GAP_LENGTH);
	this.buildSystem(maxRows, maxCols);
    }

    // Builds a grid of rows x cols blocks.
    buildSystem(rows: number, cols: number) {
	let delay = this.DELAY;
	let x = 20;
	for (let c = 0; c < cols; c++) {
	    let y = 200;
	    for (let r = 0; r < rows; r++) {
		this.addBlock(x, y, delay);
		y += this.BLOCK_HEIGHT + this.GAP_LENGTH;
		delay += this.DELAY;
	    }
	    x += this.BLOCK_WIDTH + this.GAP_LENGTH;
	}
    }

    // Adds a single block from source (20,10) to
    // destination (x,y) after the delay.
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
