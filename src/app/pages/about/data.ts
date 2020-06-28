export interface PointOfInterest {
    latitude: number,
    longitude: number,
    zoom: number,
    title: string,
    description: string,
}

export const POINTS: PointOfInterest[] = [
    {
	latitude: 49.1783514,
	longitude: -123.2764278,
	zoom: 8,
	title: 'Richmond, Canada',
	description: 'I was born here. My mom immigrated here right before the Third Taiwan Strait Crisis.',
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
