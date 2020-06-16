/** Information about the block. */
export interface Details {
    title: string,
    body: string,
    year: number,
    citations: Citation[],
}

export interface Citation {
    name: string,
    link: string,
}

export const DETAILS_DATA: Details[] = [
    {
	title: 'Slavery in America',
	body: 'The first 19 or so Africans to reach the British colonies arrived in Point Comfort, Virginia, near Jamestown, in 1619, brought by British privateers who had seized them from a captured Portuguese slave ship. Slaves were usually baptized in Africa before embarking.',
	year: 1619,
	citations: [
	    {
		name: 'a',
		link: 'b',
	    },
	    {
		name: 'b',
		link: 'c',
	    }
	],
    },
];
