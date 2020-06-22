/** Details about the block. */
export interface Details {
    title: string,
    body: string,
    year: number,
    citations: Citation[],
}

export interface Citation {
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
	body: 'Believe it or not, the roots of systemic racism are too numerous to fit your screen. Please resize your browser and refresh, or use a larger device.',
	year: 0,
	citations: [],
};

export const DETAILS: Details[] = [
    {
	title: '20 and odd slaves land in Virginia',
	year: 1619,
	body: 'As a privateer with a letter of marque, The English warship White Lion legally stole "20 and odd" slaves from a Portuguese ship headed to Veracruz. Most of the enslaved are believed to have been captured during an ongoing war between Portugal and the kingdom of Ndongo. These people were then traded away by the captain to the colony for food. This marks the custom of slavery in Virginia, of which laws later sprung. Because slavery has yet been codified into law, these prisoners of war were technically indentured servants. Notably, this was a time of food scarcity, as Jamestown was built in a marsh of infertile land and malaria-harboring mosquitos, so with certainty, these "indentured servants" were put to good use.',
	citations: [
	    {
		source: 'National Park Service',
		link: 'https://www.nps.gov/jame/learn/historyculture/african-americans-at-jamestown.htm',
	    },
	    {
		source: 'Time Magazine',
		link: 'https://time.com/5653369/august-1619-jamestown-history',
	    },
	    {
		source: 'Livingston Public School',
		link: 'https://www.livingston.org/cms/lib9/NJ01000562/Centricity/Domain/1461/Jamestown%20COMPLETE%20Notes.pdf',
	    },
	],
    },
    {
	title: 'The first racist gun law',
	year: 1639,
	body: 'This year saw the instutition of two racist weapons statutes in Virginia: the first "prohibits negroes, slave and free, from carrying weapons including clubs," while the second states that "all such free Mulattoes, Negroes and Indians...shall appear without arms". Altogether an unsurprising set of laws, seeing as Native Americans saw the colonists as invaders and reacted to their settlement by massacring almost 400 colonists in 1622 (a third of the Jamestown population).',
	citations: [
	    {
		source: 'Sedgwick County',
		link: 'https://www.sedgwickcounty.org/media/29093/the-racist-origins-of-us-gun-control.pdf',
	    },
	],
    },
    {
	title: 'The first slave in the eyes of the law',
	year: 1640,
	body: 'White indentured servants and black slaves share a lot in common as a people who suffer under abusive masters, want to take breaks from back-breaking farm labor, and miss their families. On July 1640, three servants escaped to Maryland and were captured there: Victor, "a Dutchman," and James Gregory, "a Scotchman," were sentenced to be whipped, with four years added to their indentures. The third servant, "a negro named John Punch," was made a slave for life by the Virginia courts.',
	citations: [
	    {
		source: 'Encyclopedia Virginia in partnership with the Library of Virginia',
		link: 'https://www.encyclopediavirginia.org/Runaway_Slaves_and_Servants_in_Colonial_Virginia',
	    },
	],
    },
    {
	title: 'Slavery is now inheritable',
	year: 1662,
	body: 'The sons and daughters of slave masters born to their enslaved mother are now considered property. Straight from the Virginia book of statutes: "Whereas some doubts have arisen whether children got by any Englishman upon a Negro woman should be slave or free, be it therefore enacted and declared by this present Grand Assembly, that all children born in this country shall be held bond or free only according to the condition of the mother; and that if any Christian shall commit fornication with a Negro man or woman, he or she so offending shall pay double the fines imposed by the former act."',
	citations: [
	    {
		source: 'Swarthmore College',
		link: 'https://www.swarthmore.edu/SocSci/bdorsey1/41docs/24-sla.html',
	    },
	],
    },
    {
	title: 'The largest slave auction in American history',
	year: 1859,
	body: 'At a horse racetrack outside Savannah, Georgia, more than 400 enslaved people were auctioned off. They came from Major Pierce Butler’s plantations and had spent all of their lives enslaved together. Two and three generations deep, the men, women and children were separated and sold all across the continent. According to one account, "the man and wife might be sold to the pine woods of North Carolina, their brothers and sisters be scattered through the cotton fields of Alabama and the rice swamps of Louisiana, while the parents might be left on the old plantation to wear out their weary lives in heavy grief, and lay their heads in far-off graves, over which their children might never weep."',
	citations: [
	    {
		source: 'Washington Post',
		link: 'https://www.washingtonpost.com/education/2019/08/28/historians-slavery-myths/?arc404=true',
	    },
	],
    },
    {
	title: 'Separate but equal',
	year: 1877,
	body: '',
	citations: [
	    {
		source: 'University of Southern California',
		link: 'https://onlinellm.usc.edu/a-brief-history-of-jim-crow-laws',
	    },
	    {
		source: 'Constitutional Rights Foundation',
		link: 'https://www.crf-usa.org/black-history-month/a-brief-history-of-jim-crow',
	    },
	]
    },

    {
	title: 'America has her first blockbuster film',
	year: 1915,
	body: 'Birth of the Nation was a cinematic masterpiece. It was the first movie screened at the White House, the first 12-reel film, and the first to have its own orchestral musical score. It pioneered close-ups, fade-outs, and a carefully staged battle sequence with hundreds of extras made to look like thousands. It was also a hate film that glorified the KKK, about black people exerting undue influence on the Southern whites during Reconstruction. First, a black captain (Walter Long in blackface) from the Union army relentlessly pursuing a Confederate Colonel\'s little sister until she commits suicide, then a black member from the South Carolina legislature (this character of Silas Lynch has no basis in fact, since there were no black or mulatto men that served as the lieutenant governor of South Carolina during Reconstruction) threatens the governor\'s daughter to marry him, until clan members come in to restore the peace. In short, Hollywood\'s first smashing box office success was also white supremacist propaganda.',
	citations: [
	    {
		source: 'NPR',
		link: 'https://www.npr.org/sections/codeswitch/2015/02/08/383279630/100-years-later-whats-the-legacy-of-birth-of-a-nation',
	    },
	    {
		source: 'Facing History and Ourselves Non-Profit',
		link: 'https://www.facinghistory.org/reconstruction-era/influence-birth-nation',
	    },
	],
    },
    {
	title: 'Black Wall Street gets burned down and slaughtered',
	year: 1921,
	body: 'By the 1920s, the African American community in Tulsa, Oklahoma emerged as a renownd entrepreneurial hub, with its Greenwood district known as "Black Wall Street". Black educator, entrepreneur, and landowner, O.W. Gurley owned rental properties, a rooming house, a grocery store, and a hotel. J.B. Stradford, a lawyer, owned another of the area’s several hotels. Simon Berry ran a jitney, a bus line, a charter plane service, and a hotel. The Williams Family owned a theater, a garage, a confectionery, and a rooming house. Dr. A.C. Jackson, called the “most able negro surgeon in America” by the Mayo brothers of the Mayo Clinic, broke the color line, attending to black and white patients alike. This was just a sliver of the talent in this burgeoning community, abruptly ended by the thousands of jealous armed white men, some carrying machine guns and deputized by local law enforcement, that invaded the Greenwood district. They gunned people down (including Dr. A.C. Jackson of the Mayo Clinic, who had his hands raised in surrender), set fires throughout the district, and organized planes to drop bombs on the Greenwood district. In less than 24 hours, a white mob reduced a vibrant, 35-block area to rubble and dead bodies. The majority of Tulsa\'s African American population became homeless by the end of the day and thousands were forced to spend that winter living in tents.',
	citations: [
	    {
		source: 'Oklahoma Historical Society',
		link: 'https://www.okhistory.org/publications/enc/entry.php?entry=TU013',
	    },
	    {
		source: 'The Guardian',
		link: 'https://www.theguardian.com/commentisfree/2020/jun/19/tulsa-1921-massacre-trump-violence-legacy',
	    },
	],
    },
];
