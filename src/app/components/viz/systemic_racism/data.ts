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
	body: 'The English warship White Lion, as a privateer with a letter of marque, legally stole "20 and odd" slaves from a Portuguese ship headed to Veracruz. Most of the enslaved are believed to have been captured during an ongoing war between Portugal and the kingdom of Ndongo. These people were then traded away by the captain to the colony for food. This signals the custom of slavery in Virginia, from which laws later sprung from. Because slavery has yet been codified into law, these prisoners of war were technically indentured servants. Notably, this was a time of food scarcity, as Jamestown was built in a marsh of infertile land and malaria-harboring mosquitos, so with certainty, these "indentured servants" were put to good use.',
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
	body: 'This year instituted two racist weapons statutes in Virginia: the first "prohibits negroes, slave and free, from carrying weapons including clubs," while the second states that "all such free Mulattoes, Negroes and Indians...shall appear without arms". Altogether an unsurprising set of laws, seeing that Native Americans were antagonistic, saw the colonists as invaders, and reacted to their settlement by massacring almost 400 colonists in 1622 (a third of the Jamestown population).',
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
	title: 'The U.S. constitution does not apply to black people',
	year: 1857,
	body: 'The chief justice at this time, Roger Taney, was a former slave owner, as were four other justices on the Court. Dred Scott, an enslaved black man whose owners had taken him from slave-holding Missouri to the free territory (present day Minnesota) designated by the Missouri Compromise of 1820, sued his owner Sandford once he was in free territory. After eleven years, his case reached the Supreme Court, who ruled that as a black man, Scott was not a citizen of the United States and could not bring suit.',
	citations: [
	    {
		source: 'U.S. History',
		link: 'https://www.ushistory.org/us/32a.asp',
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
	title: 'Seven southern slave-holding states secede',
	year: 1861,
	body: 'We were so divided over slavery that we went to war with ourselves over it. The belief that a small group of rich slave owners had become so politically powerful (the Dred Scott vs. Sandford outcome was universally condemned in the Northern states) that they could seize the national government for themselves and expand the morally abhorrent practice of slavery became a festering sore in the American consciousness. As Lincoln describes to the Republican state convention: "A house divided against itself cannot stand. I believe this government cannot endure, permanently half slave and half free. I do not expect the Union to be dissolved - I do not expect the house to fall - but I do expect it will cease to be divided. It will become all one thing, or all the other. Either the opponents of slavery, will arrest the further spread of it, and place it where the public mind shall rest in the belief that it is in course of ultimate extinction; or its advocates will push it forward till it shall become alike lawful in all the States, old as well as new-North as well as South. Have we no tendency to the latter condition?" Shortly after Abraham Lincoln was inaugurated as the president, war broke out between the Union and Confederacy.',
	citations: [
	    {
		source: 'American History USA',
		link: 'https://www.americanhistoryusa.com/topic/slave-power/'
	    },
	    {
		source: 'National Park Service',
		link: 'https://www.nps.gov/liho/learn/historyculture/housedivided.htm',
	    }
	],
    },
    {
	title: 'Don\'t ride together',
	year: 1891,
	body: 'Tennesee state law: "All railroads carrying passengers in the state (other than street railroads) shall provide equal but separate accommodations for the white and colored races, by providing two or more passenger cars for each passenger train, or by dividing the cars by a partition, so as to secure separate accommodations."',
	citations: [
	    {
		source: 'Smithsonian National Museum of American History',
		link: 'https://americanhistory.si.edu/brown/history/1-segregated/jim-crow.html',
	    }
	],
    },
    {
	title: 'Separate but equal',
	year: 1896,
	body: 'Homer Plessy, a mulatto (7/8 white), seated himself in a white compartment, was challenged by the conductor, and got arrested for violating the state law. The supreme court under Justice Henry Brown confirms segregation into federal law: "We consider the underlying fallacy of the plaintiff’s argument to consist in the assumption that the enforced separation of the two races stamps the colored race with a badge of inferiority. If this be so, it is not by reason of anything found in the act, but solely because the colored race chooses to put that construction upon it... The argument also assumes that social prejudice may be overcome by legislation, and that equal rights cannot be secured except by an enforced commingling of the two races... If the civil and political rights of both races be equal, one cannot be inferior to the other civilly or politically. If one race be inferior to the other socially, the Constitution of the United States cannot put them upon the same plane."',
	citations: [
	    {
		source: 'U.S. Government Documents',
		link: 'University of Southern California',
	    },
	]
    },
    {
	title: 'America has her first blockbuster film',
	year: 1915,
	body: 'Birth of the Nation was a cinematic masterpiece. It was the first movie screened at the White House, the first 12-reel film, and the first to have its own orchestral musical score. It pioneered close-ups, fade-outs, and a carefully staged battle sequence with hundreds of extras made to look like thousands. It was also a hate film that glorified the KKK, depicting black people as scourges exerting undue influence on the Southern whites during Reconstruction. First, a black captain (Walter Long in blackface) from the Union army relentlessly pursuing a Confederate Colonel\'s little sister until she commits suicide, then a black member from the South Carolina legislature (this character of Silas Lynch has no basis in fact, since there were no black or mulatto men that served as the lieutenant governor of South Carolina during Reconstruction) threatens the governor\'s daughter to marry him, until clan members come in to restore the peace. In short, Hollywood\'s first smash box office success was white supremacist propaganda.',
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
	title: 'Black Wall Street gets burned down',
	year: 1921,
	body: 'By the 1920s, the African American community in Tulsa, Oklahoma emerged as a renowned entrepreneurial hub, with its Greenwood district known as "Black Wall Street". Black educator, entrepreneur, and landowner, O.W. Gurley owned rental properties, a rooming house, a grocery store, and a hotel. J.B. Stradford, a lawyer, owned another of the area’s several hotels. Simon Berry ran a jitney, a bus line, a charter plane service, and a hotel. The Williams Family owned a theater, a garage, a confectionery, and a rooming house. Dr. A.C. Jackson, called the “most able negro surgeon in America” by the Mayo brothers of the Mayo Clinic, broke the color line, attending to black and white patients alike. This was just a sliver of the talent in this burgeoning community, abruptly ended by the thousands of jealous armed white men, some carrying machine guns and deputized by local law enforcement, that invaded the Greenwood district. They gunned people down (including Dr. A.C. Jackson of the Mayo Clinic, who had his hands raised in surrender), set fires throughout the district, and organized planes to drop bombs on the Greenwood district. In less than 24 hours, a white mob reduced a vibrant, 35-block area to rubble and dead bodies. The majority of Tulsa\'s African American population became homeless by the end of the day and thousands were forced to spend that winter living in tents.',
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
    {
	title: 'Don\'t learn together',
	year: 1929,
	body: 'Missouri state law: "Separate free schools shall be established for the education of children of African descent; and it shall be unlawful for any colored child to attend any white school, or any white child to attend a colored school."',
	citations: [
	    {
		source: 'Smithsonian National Museum of American History',
		link: 'https://americanhistory.si.edu/brown/history/1-segregated/jim-crow.html',
	    }
	],
    },
    {
	title: 'Don\'t play together',
	year: 1930,
	body: 'City ordinance from Birmingham, Alabama: "It shall be unlawful for a negro and white person to play together or in company with each other in any game of cards or dice, dominoes or checkers."',
	citations: [
	    {
		source: 'American Social History Project',
		link: 'https://herb.ashp.cuny.edu/items/show/866',
	    }
	],
    },
    {
	title: 'The leader of civil rights movements gets assassinated',
	year: 1963,
	body: 'King, our apostle of non-violence, masterful orator, and defender of the poor, the needy, and the American dream, said during a speech supporting a sanitation workers\'s strike in Tennessee: "I’ve seen the promised land. I may not get there with you. But I want you to know tonight, that we, as a people, will get to the promised land. And I’m happy tonight. I’m not worried about anything. I’m not fearing any man. Mine eyes have seen the glory of the coming of the Lord." The following day, he was assassinated by racist and small-time criminal James Earl Ray.',
	citations: [
	    {
		source: 'History Channel',
		link: 'https://www.history.com/topics/black-history/martin-luther-king-jr-assassination',
	    },
	    {
		source: 'American Federation of State, County & Municipal Employees',
		link: 'https://www.afscme.org/about/history/mlk/mountaintop',
	    },
	],
    },
    {
	title: 'Four Los Angeles policemen acquitted of the savage beating of Rodney King',
	year: 1992,
	body: 'A year earlier, King led police on a high-speed chase through Los Angeles and was charged with driving under the influence. When the LAPD finally stopped King, they gave him a savage beating with batons for 15 minutes, until King\'s skull was fractured, bones  broken, teeth shattered, and brain damaged. All this was captured on camera. The four officers were charged with excessive use of force, but acquitted a year later by a jury consisting of 12 residents from the distant white suburb of Vetura County. LA residents rioted by setting fires, looting, and destroying liquor stores, grocery stores, retail shops and fast food restaurants. By the time the riots ended, 63 people had been killed, 2,383 people had been injured, more than 12,000 had been arrested, and estimates of property damage were over $1 billion, mostly in Koreatown.',
	citations: [
	    {
		source: 'NPR',
		link: 'https://www.npr.org/2017/04/26/524744989/when-la-erupted-in-anger-a-look-back-at-the-rodney-king-riots',
	    }
	],
    }
];
