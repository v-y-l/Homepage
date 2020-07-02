export interface PointOfInterest {
    latitude: number,
    longitude: number,
    zoom: number,
    title: string,
    description: string,
}

export const POINTS: PointOfInterest[] = [
    {
	latitude: 49.1283514,
	longitude: -123.2264278,
	zoom: 10,
	title: 'Richmond, Canada',
	description: 'I was born here. My mom immigrated to Richmond amid escalating tensions between Taiwan and China, right before the Third Taiwan Strait Crisis. Visiting this city as an adult, I experienced the cultural shock of expecting a place to be Western, only to learn that it was 53% Chinese. So much of the signage at Richmond Centre was in Chinese that I thought perhaps I accidentally flew to Taipei. Although I neither spent much time in Canada, nor know its history well, I am immensely grateful to hold Canadian citizenship.',
    },
    {
	latitude: 23.8629809,
	longitude: 121.16388,
	zoom: 6,
	title: 'Taipei, Taiwan',
	description: 'I moved to Taipei as a toddler and spent my first 18 years there. Taiwan is a culinary paradise,  a humidity hell, and a vibrant democracy where one can freely make fun of its president on Twitter. Here, I routinely had Boba tea before it was mainstream. I first went to a public school, Da\'an Elementary school, then a private international school, Taipei American School. For this reason I speak both Mandarin and English, and feel within myself a melting pot of the two cultures. I recognize my privilege having attended a wealthy, exclusive school - which juxtaposed against my public school experience - and it was with this strong sense of gratitude that I went to college in the states.',
    },
    {
	latitude: 33.7676334,
	longitude: -84.56103223,
	zoom: 6,
	title: 'Atlanta, Georgia',
	description: 'I went to Georgia Tech for undergrad. This was the city where I went as a boy and left as a man. There, I was greeted with Southern hospitality, stuffed with delicious slow-cooked pulled-pork, grits, and biscuits, and confounded by the spectacular number of Peachtree roads, streets, and avenues. I made terrific friends from all over the world, of different upbringings, and studied many a night at Wafflehouse and the CULC. Because it was the city that solidified my American identity, in a strange way, I think of myself as a Southerner.',
    },
    {
	latitude: 42.3142643,
	longitude: -71.110711,
	zoom: 6,
	title: 'Boston, Massachussetts',
	description: 'I moved to Boston for work after I graduated. Bostonians strike me as some of the most down-to-earth, intelligent people on the planet. This is certainly true of most of my friends, who are from Tufts, of my colleagues at NextJump and now Google, and of my girlfriend who is from Medford. It was here, during the COVID-19 quarantine, that I decided to start working on this blog.',
    },
];
