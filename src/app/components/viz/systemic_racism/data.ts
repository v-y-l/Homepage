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
    body: 'You\'ve read all of the landmark events that contribute to systemic racism in America that I know of. Please tweet at me using #systemicracismviz if I\'ve missed any events, made any typos, or committed any bugs. I hope you walk away with a better understanding of why we need to actively dismantle our racist legacy.',
    year: 0,
    citations: [],


};

export const MORE_DETAIL: Details = {
    title: 'There are more events that don\'t fit the screen',
	body: 'Believe it or not, the roots of systemic racism are too numerous to fit your screen. Please resize your browser and refresh or use a larger device.',
	year: 0,
	citations: [],
};

export const DETAILS: Details[] = [
    {
	title: '20 and odd slaves land in Virginia',
	year: 1619,
	body: 'As a privateer with a letter of marque, The English warship White Lion legally stole "20 and odd" slaves from a Portuguese ship headed to Veracruz. Most of the enslaved are believed to have been captured during an ongoing war between Portugal and the kingdom of Ndongo. These people were then traded away by the captain to the colony for food. This event marks the custom of slavery in Virginia, of which laws later spring from. Because slavery has not been codified into law yet, these prisoners of war were technically indentured servants. Notably, this was a time of food scarcity, as Jamestown was built in a marsh of infertile land and malaria-harboring mosquitos, so one can be certain that these "indentured servants" were put to good use.',
	citations: [
	    {
		source: 'National Park Service',
		name: 'African slaves at Jamestown',
		link: 'https://www.nps.gov/jame/learn/historyculture/african-americans-at-jamestown.htm',
	    },
	    {
		source: 'Time Magazine'
		name: 'Africans in Virginia mark turning point for slavery in America',
		link: 'https://time.com/5653369/august-1619-jamestown-history',
	    },
	    {
		source: 'Livingston Public School',
		name: 'The First Successful English Colony',
		link: 'https://www.livingston.org/cms/lib9/NJ01000562/Centricity/Domain/1461/Jamestown%20COMPLETE%20Notes.pdf',
	    },
	],
    },
    {
	title: 'The first racist gun law',
	year: 1639,
	body: 'This year saw the instutition of two racist weapons statutes in Virginia: the first "prohibits negroes, slave and free, from carrying weapons including clubs," while the second states that "all such free Mulattoes, Negroes and Indians...shall appear without arms". Altogether an unsurprising set of laws, seeing as Native Americans saw the colonists as invaders and reacted to their settlement by massacring almost 400 colonists in 1622, a third of the Jamestown population.',
	citations: [
	    {
		source: 'Sedgwick County',
		name: 'The Racist Origins of US Gun Control',
		link: 'https://www.sedgwickcounty.org/media/29093/the-racist-origins-of-us-gun-control.pdf',
	    },
	],
    },
    {
	title: 'The first slave in the eyes of the law',
	year: 1640,
	body: 'White indentured servants and black slaves shared a lot in common as a people who suffered under abusive masters, wanted to take a break from back-breaking farm labor, and missed their families. On July 1640, three servants escaped to Maryland and were captured there: Victor, "a Dutchman," and James Gregory, "a Scotchman," were sentenced to be whipped, with four years were added to their indentures. The third servant, "a negro named John Punch," was made a slave for life by the Virginia courts.',
	citations: [
	    {
		source: 'Encyclopedia Virginia in partnership with the Library of Virginia',
		name: 'Runaway Slaves and Servants in Colonial Virginia',
		link: 'https://www.encyclopediavirginia.org/Runaway_Slaves_and_Servants_in_Colonial_Virginia',
	    },
	],
    },
    {
	title: 'Slavery is now inheritable',
	year: 1662,
	body: 'A child born to an enslaved mother inherits her slave status. Straight from the Virginia book of statutes: "Whereas some doubts have arisen whether children got by any Englishman upon a Negro woman should be slave or free, be it therefore enacted and declared by this present Grand Assembly, that all children born in this country shall be held bond or free only according to the condition of the mother; and that if any Christian shall commit fornication with a Negro man or woman, he or she so offending shall pay double the fines imposed by the former act."',
	citations: [
	    {
		source: 'Swarthmore College',
		name: 'Virginia Slave Laws',
		link: 'https://www.swarthmore.edu/SocSci/bdorsey1/41docs/24-sla.html',
	    },
	],
    }
];
