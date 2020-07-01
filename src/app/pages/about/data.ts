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
	description: 'I was born here. My mom immigrated to Richmond amid escalating tensions between Taiwan and China, right before the Third Taiwan Strait Crisis. I visited this city as an adult and experienced the cultural shock of expecting a place to be Western, only to learn that it was 53% Chinese. When going to the Richmond mall, so much of the signage was in Chinese that I thought maybe I had taken the plane to Taipei by mistake. In all honesty, I did not spend much time in Canada, nor do I know it\'s history well, but am thankful to hold its citizenship.',
    },
    {
	latitude: 23.8629809,
	longitude: 121.16388,
	zoom: 6,
	title: 'Taipei, Taiwan',
	description: 'I moved back to Taiwan as a toddler and spent my first 18 years here.',
    },
    {
	latitude: 33.7676334,
	longitude: -84.56103223,
	zoom: 6,
	title: 'Atlanta, Georgia',
	description: 'I went to Georgia Tech for undergrad.',
    },
    {
	latitude: 42.3142643,
	longitude: -71.110711,
	zoom: 6,
	title: 'Boston, Massachussetts',
	description: 'I moved to Boston for work after I graduated.',
    },
];
