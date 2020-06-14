import { Component, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
    selector: 'systemic-racism-viz',
    templateUrl: './systemic_racism.ng.html',
    styleUrls: ['./systemic_racism.css'],
})
export class SystemicRacismViz implements AfterViewInit {

    readonly BLOCK_HEIGHT = 30;
    readonly BLOCK_WIDTH = 30;
    readonly GAP_LENGTH = 5
    readonly DELAY = 100;
    readonly DURATION = 1000;
    // This is the (x,y) where the block is dropped from.
    readonly START_X = 50;
    readonly START_Y = 20;
    // This is the top-left corner of the system.
    readonly SYSTEM_X = 50;
    readonly SYSTEM_Y = 100;
    
    svgContainer;
    rect;

    ngAfterViewInit() {
	this.svgContainer = d3.select("svg.viz");
	this.buildFullPageSystem();
    }

    buildFullPageSystem() {
	let svgWidth = parseInt(this.svgContainer.style("width")) - this.SYSTEM_X;
	let svgHeight = parseInt(this.svgContainer.style("height"));
	const maxCols = (svgWidth - this.SYSTEM_X - this.BLOCK_WIDTH) / (this.BLOCK_WIDTH + this.GAP_LENGTH);
	const maxRows = (svgHeight - this.SYSTEM_Y - this.BLOCK_HEIGHT - this.GAP_LENGTH) / (this.BLOCK_HEIGHT + this.GAP_LENGTH);
	this.buildSystem(maxRows, maxCols);
    }

    // Builds a grid of rows x cols blocks.
    buildSystem(rows: number, cols: number) {
	let delay = this.DELAY;
	let x = this.SYSTEM_X;
	for (let c = 0; c < cols; c++) {
	    let y = this.SYSTEM_Y;
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
	    .attr("x", this.START_X)
	    .attr("y", this.START_Y)
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
