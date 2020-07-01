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
	description: 'I was born here. My mom immigrated to Richmond amid escalating tensions between Taiwan and China, right before the Third Taiwan Strait Crisis. I visited this city as an adult, experiencing the cultural shock of expecting a place to be Western, only to learn that it was 53% Chinese. When shopping at the Richmond Centre, so much of the signage was in Chinese that I thought perhaps I wrongly took the plane to Taipei. In all honesty, I neither spent much time in Canada, nor know its history well, but am immensely grateful to hold Canadian citizenship. Thanks mom!',
    },
    {
	latitude: 23.8629809,
	longitude: 121.16388,
	zoom: 6,
	title: 'Taipei, Taiwan',
	description: 'I moved to Taipei as a toddler and spent my first 18 years there. Taiwan is a culinary paradise and a humidity hell. It is a vibrant democracy, where one can freely make fun of its president on Twitter. I went to a public school first, Da\'an Elementary school, then a private international school, Taipei American School. For this reason I speak both Mandarin and English fluently and feel within myself both cultures. I recognize my privilege having attended a wealthy, exclusive school, which juxtaposes sharply against my public school experience. I should also mention that I had Boba tea before it was mainstream.',
    },
    {
	latitude: 33.7676334,
	longitude: -84.56103223,
	zoom: 6,
	title: 'Atlanta, Georgia',
	description: 'I went to Georgia Tech for undergrad. There, I was greeted with Southern hospitality, stuffed with delicious slow-cooked pulled-pork, grits, and biscuits, and confounded by the spectacular number of Peachtree roads, streets, and avenues. I made terrific friends from all over the world, of different upbringings, and studied many a night at Wafflehouse and the CULC. In short, I went to Atlanta as a boy and left as a man. Because it was the city that solidified my American identity, in a strange way, I think of myself as a Southerner.',
    },
    {
	latitude: 42.3142643,
	longitude: -71.110711,
	zoom: 6,
	title: 'Boston, Massachussetts',
	description: 'I moved to Boston for work after I graduated.',
    },
];
