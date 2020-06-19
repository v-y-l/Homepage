/** Details about the block. */
export interface Details {
    title: string,
    body: string,
    year: number,
    citations: Citation[],
}

export interface Citation {
    name: string,
    link: string,
    source: string,
}

export const DEFAULT_DETAIL: Details = {
    title: 'Thank you for reading',
    body: 'You\'ve read all of the landmark events that contribute to systemic racism in America that I know of. Please tweet at me using #systemicracismviz if I\'ve missed any events, made any typos, or committed any bugs. This is a labor of love, so while I may not update the visualization right away, I certainly appreciate your feedback.',
    year: 0,
    citations: [],


};

export const MORE_DETAIL: Details = {
    title: 'There are more events that don\'t fit the screen',
	body: 'Believe it or not, the injustices of systemic racism are too numerous to fit your screen. Please resize your browser and refresh or use a larger device.',
	year: 0,
	citations: [],
};

export const DETAILS: Details[] = [
    {
	title: 'Slavery in America',
	year: 1619,
	body: 'The first 19 or so Africans to reach the British colonies arrived in Point Comfort, Virginia, near Jamestown, in 1619, brought by British privateers who had seized them from a captured Portuguese slave ship. Slaves were usually baptized in Africa before embarking.',
	citations: [
	    {
		source: 'National Park Service',
		name: 'African slaves at Jamestown',
		link: 'https://www.nps.gov/jame/learn/historyculture/african-americans-at-jamestown.htm',
	    },
	    {
		source: 'Time Magazine'
		name: 'Africans in Virginia mark turning point for Slavery in America',
		link: 'https://time.com/5653369/august-1619-jamestown-history',
	    }
	],
    },

];
