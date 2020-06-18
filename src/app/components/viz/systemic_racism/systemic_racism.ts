import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, AfterViewInit, Inject, OnInit } from '@angular/core';
import { Details, DETAILS, MORE_DETAIL, DEFAULT_DETAIL } from './data';

import * as d3 from 'd3';

/** Each event represents a historic event reinforcing racism. */
interface Event {
    x: number,
    y: number,
    delay: number,
    details: Details,
};

@Component({
    selector: 'systemic-racism-viz',
    templateUrl: './systemic_racism.ng.html',
    styleUrls: ['./systemic_racism.css'],
})
export class SystemicRacismViz implements AfterViewInit {
    // Block dimensions.
    readonly BLOCK_HEIGHT = 30;
    readonly BLOCK_WIDTH = 30;
    // Distance between blocks.
    readonly GAP_LENGTH = 5
    // Initial delay in ms before first block gets launched.
    readonly DELAY = 100;
    // The transition time in ms.
    readonly DURATION = 1000;
    // Where the block will be dropped from.
    readonly START_X = 50;
    readonly START_Y = 20;
    // The top-left corner of the system.
    readonly SYSTEM_X = 50;
    readonly SYSTEM_Y = 20;

    // Useful for adjusting the viz so it's responsive
    svgWidth;
    svgHeight;
    svgContainer;

    events: Event[] = [];
    totalBlocks: number;
    details: Details[] = DETAILS;

    constructor(public dialog: MatDialog) {}

    ngAfterViewInit() {
	this.svgContainer = d3.select("svg.viz");
	this.svgWidth = parseInt(this.svgContainer.style("width"));
	this.svgHeight = parseInt(this.svgContainer.style("height"));

	this.initializeData();	
	setTimeout(this.initializeViz.bind(this), 0);

	d3.select(window).on(
	     'resize',
	     this.resizeBlocks.bind(this)
	);
    }

    // Function to call when the page gets resized
    resizeBlocks() {
	const heightRatio =
	    parseInt(this.svgContainer.style("height")) / this.svgHeight;
	const widthRatio =
	    parseInt(this.svgContainer.style("width")) / this.svgWidth;
	
	d3.selectAll("rect")
	    .attr("height", this.BLOCK_HEIGHT * heightRatio)
	    .attr("width", this.BLOCK_WIDTH * widthRatio)
	    .attr("x", (d:Event) => {return d.x * widthRatio})
	    .attr("y", (d:Event) => {return d.y * heightRatio});
    }

    // Instantiates the visualization based on the dataset
    initializeViz() {
	let sel = this.svgContainer
	    .selectAll("rect")
	    .data(this.events);

	sel.enter()
	    .append("rect")
	    .attr("x", this.START_X)
	    .attr("y", this.START_Y)
	    .attr("width", this.BLOCK_WIDTH)
	    .attr("height", this.BLOCK_HEIGHT)
	    .attr("opacity", 0)
	    .sort(function(a, b) {
		if (a.delay < b.delay) {
		    return 1;
		}
		return -1;
	    })
	    .on("mouseover", this.handleMouseOver)
            .on("mouseout", this.handleMouseOut)
	    .on("click", this.openDialog.bind(this))
	    .transition()
	    .delay(d => d.delay)
	    .duration(this.DURATION)
	    .attr("x", d => d.x)
	    .attr("y", d => d.y)
	    .attr("opacity", 1);

	sel.exit();
    }

    // Instantiates the dataset
    initializeData() {
	const cols = Math.ceil(
	    (this.svgWidth - this.SYSTEM_X - this.BLOCK_WIDTH * 2)
		/ (this.BLOCK_WIDTH + this.GAP_LENGTH)
	);
	const rows = Math.ceil(
	    (this.svgHeight - this.SYSTEM_Y - this.BLOCK_HEIGHT - this.GAP_LENGTH)
		/ (this.BLOCK_HEIGHT + this.GAP_LENGTH)
	);
	this.totalBlocks = rows*cols;
	let delay = this.DELAY;
	let x = this.SYSTEM_X;
	for (let c = 0; c < cols; c++) {
	    let y = this.SYSTEM_Y;
	    for (let r = 0; r < rows; r++) {
		const details = this.getDetail(rows, cols, r, c);
		this.events.push({x, y, delay, details});
		y += this.BLOCK_HEIGHT + this.GAP_LENGTH;
		delay += this.DELAY;
	    }
	    x += this.BLOCK_WIDTH + this.GAP_LENGTH;
	}
    }

    // Returns a detail, which could be a block about history,
    // a suggestion to tweet a detail at me, or a hint that if
    // you expanded the page and refreshed it, you'd get more
    // details.
    getDetail(rows, cols, r, c) {
	let details;
	const totalDetails = this.details.length;
	let index = c*rows+r;
	if (totalDetails < this.totalBlocks) {
	    if (index < totalDetails) {
		details = this.details[index];
	    } else {
		details = DEFAULT_DETAIL;
	    }
	} else {
	    if (index < this.totalBlocks - 1) {
		details = this.details[index];
	    } else {
		details = MORE_DETAIL;
	    }
	}
	return details;
    }    

    // Change the color of the rectangle when you hover over it
    handleMouseOver(d, i) { 
	d3.select(this as any)
	    .attr("fill", "red")
	    .style("cursor", "pointer");
    }

    handleMouseOut(d, i) {
	d3.select(this as any).attr("fill", "black");
    }

    openDialog(d, i): void {
	const dialogRef = this.dialog.open(SystemicRacismDialog, {
	    width: '80%',
	    data: {
		index: this.events.length - i - 1,
		events: this.events,
		totalBlocks: this.totalBlocks,
	    },
	});
    }
}

@Component({
    selector: 'systemic-racism-dialog',
    templateUrl: './dialog.ng.html',
    styleUrls: ['./dialog.css'],
})
export class SystemicRacismDialog implements OnInit {
    blockIndex;

    constructor(
	public dialogRef: MatDialogRef<SystemicRacismViz>,
	@Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit() {
	this.blockIndex = this.data.index;
    }

    onClose(): void {
      this.dialogRef.close();
    }

    onNext(): void {
	this.blockIndex += 1;
    }

    onPrevious(): void {
	this.blockIndex -= 1;
    }
}
