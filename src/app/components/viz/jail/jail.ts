import { Component, AfterContentInit, ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';

@Component({
    selector: 'jail-viz',
    templateUrl: './jail.ng.html',
    styleUrls: ['./jail.css'],
    encapsulation: ViewEncapsulation.None,
})
export class JailViz implements AfterContentInit {

    ngAfterContentInit() {
	var svgContainer = d3.select("svg.viz");
	var rectangle = svgContainer.append("rect")
	    .attr("x", 100)
	    .attr("y", 100)
	    .attr("width", 50)
	    .attr("height", 50)
    }
}
