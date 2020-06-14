import { Component, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

interface Point {
    x: number,
    y: number,
    delay: number,
};

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
    readonly SYSTEM_Y = 80;

    svgWidth;
    svgHeight;
    svgContainer;
    rect;
    data: Point[] = [];

    ngAfterViewInit() {
	this.svgContainer = d3.select("svg.viz");
	this.svgWidth = parseInt(this.svgContainer.style("width")) - this.SYSTEM_X;
	this.svgHeight = parseInt(this.svgContainer.style("height"));
	this.buildFullPageSystem();
	 d3.select(window).on(
	     'resize', ()=>{
		 const heightRatio = parseInt(this.svgContainer.style("height")) / this.svgHeight;
		 const widthRatio = parseInt(this.svgContainer.style("width")) / this.svgWidth;
	 	 d3.selectAll("rect")
	 	     .attr("height", this.BLOCK_HEIGHT*heightRatio)
	 	     .attr("width", this.BLOCK_WIDTH*widthRatio)
	 	     .attr("x", (d:Point) => {return d.x*widthRatio})
	 	     .attr("y", (d:Point) => {return d.y*heightRatio});
	     }
	);
    }

    buildFullPageSystem() {
	const maxCols = (this.svgWidth - this.SYSTEM_X - this.BLOCK_WIDTH) / (this.BLOCK_WIDTH + this.GAP_LENGTH);
	const maxRows = (this.svgHeight - this.SYSTEM_Y - this.BLOCK_HEIGHT - this.GAP_LENGTH) / (this.BLOCK_HEIGHT + this.GAP_LENGTH);
	this.initializeData(maxRows, maxCols);
	let sel = this.svgContainer
	    .selectAll("rect")
	    .data(this.data);
	sel.enter()
	    .append("rect")
	    .attr("x", this.START_X)
	    .attr("y", this.START_Y)
	    .attr("width", this.BLOCK_WIDTH)
	    .attr("height", this.BLOCK_HEIGHT)
	    .attr("opacity", 0)
	    .transition()
	    .delay(d => d.delay)
	    .duration(this.DURATION)
	    .attr("x", d => d.x)
	    .attr("y", d => d.y)
	    .attr("opacity", 1);
	sel.exit();
    }

    // Builds a grid of rows x cols blocks.
    initializeData(rows: number, cols: number) {
	let delay = this.DELAY;
	let x = this.SYSTEM_X;
	for (let c = 0; c < cols; c++) {
	    let y = this.SYSTEM_Y;
	    for (let r = 0; r < rows; r++) {
		this.data.push({x, y, delay});
		y += this.BLOCK_HEIGHT + this.GAP_LENGTH;
		delay += this.DELAY;
	    }
	    x += this.BLOCK_WIDTH + this.GAP_LENGTH;
	}
    }
}
