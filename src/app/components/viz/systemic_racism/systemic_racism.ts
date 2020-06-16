import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, AfterViewInit, Inject } from '@angular/core';
import { Details, DETAILS_DATA } from './data';

import * as d3 from 'd3';

/** Each block represents a historic event reinforcing racism. */
interface Block {
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
    readonly SYSTEM_Y = 20;

    svgWidth;
    svgHeight;
    svgContainer;
    rect;
    data: Block[] = [];
    details: Details[] = DETAILS_DATA;
    radius = 6;
    text = '';
    citation = '';

    constructor(public dialog: MatDialog) {}

    ngAfterViewInit() {
	this.svgContainer = d3.select("svg.viz");
	this.svgWidth = parseInt(this.svgContainer.style("width"));
	this.svgHeight = parseInt(this.svgContainer.style("height"));

	this.initializeData();	
	this.initializeViz();

	d3.select(window).on(
	    'resize',
	    this.resizeBlocks.bind(this)
	);
    }

    // Function to call when the page gets resized
    resizeBlocks() {
	const heightRatio = parseInt(this.svgContainer.style("height")) / this.svgHeight;
	const widthRatio = parseInt(this.svgContainer.style("width")) / this.svgWidth;
	
	d3.selectAll("rect")
	    .attr("height", this.BLOCK_HEIGHT * heightRatio)
	    .attr("width", this.BLOCK_WIDTH * widthRatio)
	    .attr("x", (d:Block) => {return d.x * widthRatio})
	    .attr("y", (d:Block) => {return d.y * heightRatio});
    }

    // Instantiates the visualization based on the dataset
    initializeViz() {
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
	const cols = (this.svgWidth - this.SYSTEM_X - this.BLOCK_WIDTH * 2)
	    / (this.BLOCK_WIDTH + this.GAP_LENGTH);
	const rows = (this.svgHeight - this.SYSTEM_Y - this.BLOCK_HEIGHT - this.GAP_LENGTH)
	    / (this.BLOCK_HEIGHT + this.GAP_LENGTH);

	let delay = this.DELAY;
	let x = this.SYSTEM_X;
	for (let c = 0; c < cols; c++) {
	    let y = this.SYSTEM_Y;
	    for (let r = 0; r < rows; r++) {
		const details = c*rows+r < this.details.length ?
		    this.details[c*rows+r] :
		    {text: "default", citation: "citation"};
		this.data.push({x, y, delay, details});
		y += this.BLOCK_HEIGHT + this.GAP_LENGTH;
		delay += this.DELAY;
	    }
	    x += this.BLOCK_WIDTH + this.GAP_LENGTH;
	}
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

    handleClick(d, i) {
	this.text = d.details.text;
	this.citation = d.details.citation;
    }

    openDialog(): void {
	const dialogRef = this.dialog.open(SystemicRacismDialog, {
	    width: '80%',
	    data: this.data[0],
	});

	dialogRef.afterClosed().subscribe(result => {
	    console.log('The dialog was closed');
	});
    }
}

@Component({
    selector: 'systemic-racism-dialog',
    templateUrl: './dialog.ng.html',
    styleUrls: ['./dialog.css'],
})
export class SystemicRacismDialog {

  constructor(
    public dialogRef: MatDialogRef<SystemicRacismViz>,
    @Inject(MAT_DIALOG_DATA) public data: Details) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
