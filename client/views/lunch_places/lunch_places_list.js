var lunchPlacesData = [
    {
	name: 'Bal',
	url: 'https://www.facebook.com/balnazablociu',
	description: 'Karkowka'
    },
    {
	name: 'Ogrod Kulinarny',
	url: 'https://www.facebook.com/OgrodKulinarny',
	description: 'Almost good restaurant'
    },
    {
	name: 'Gruzin',
	url: 'https://www.facebook.com/slowgrill',
	description: 'You never know.'
    }
];
Template.lunchPlacesList.helpers({
    lunchPlaces: lunchPlacesData
});
