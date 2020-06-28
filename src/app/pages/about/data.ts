export interface PointOfInterest {
    latitude: number,
    longitude: number,
    title: string,
    description: string,
}

export const POINTS: PointOfInterest[] = [
    {
	latitude: 49.1783514,
	longitude: -123.2764278,
	title: 'Richmond, Canada',
	description: 'This is were I was born.',
    },
    {
	latitude: 23.8629809,
	longitude: 121.16388,
	title: 'Taipei, Taiwan',
	description: 'This is were I spent my years up until high school.',
    },
];
