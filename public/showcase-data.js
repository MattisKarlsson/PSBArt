const SHOWCASE_DATA = [
	{
		id: `1`,
		name: `Red mountain top`,
		image: `images/art/2021/Red.jpeg`,
		price: 75,
		isFeatured: true,
	},
	{
		id: `2`,
		name: `Viking ship`,
		image: `images/art/2021/Antons_J_Projekt.jpeg`,
		price: 75,
		isFeatured: true,
	},
	{
		id: `3`,
		name: `Cyber Icecream`,
		image: `images/art/2021/Dale_4_Sale.jpeg`,
		price: 75,
		isFeatured: true,
	},
	{
		id: `4`,
		name: `Fishman`,
		image: `images/art/2021/Fishman.jpg`,
		price: 75,
		isFeatured: true,
	},
	{
		id: `5`,
		name: `Neon City`,
		image: `images/art/2019/Neon_City.jpg`,
		price: 75,
		isFeatured: true,
	},
	{
		id: `6`,
		name: `Viking_Group`,
		image: `images/art/2020/Viking_Group.jpg`,
		price: 75,
		isFeatured: false,
	},
	{
		id: `7`,
		name: `Underwater Temple`,
		image: `images/art/2020/Underwater Temple.jpg`,
		price: 75,
		isFeatured: false,
	},
	{
		id: `8`,
		name: `Robba`,
		image: `images/art/2020/Robba.jpg`,
		price: 75,
		isFeatured: false,
	},
	{
		id: `9`,
		name: `Mystic Woman`,
		image: `images/art/2020/Girl_2.jpg`,
		price: 75,
		isFeatured: false,
	},
	{
		id: `10`,
		name: `Guapa`,
		image: `images/art/2020/Girl_1.jpg`,
		price: 75,
		isFeatured: true,
	},
	{
		id: `11`,
		name: `Bang Bang Bang`,
		image: `images/art/2019/Bang Bang Bang.jpg`,
		price: 75,
		isFeatured: false,
	},
];

export function getFeaturedItems() {
	return SHOWCASE_DATA.filter(item => item.isFeatured);
}

export function getAllItems() {
	return SHOWCASE_DATA;
}

export function getItemById(id) {
	return SHOWCASE_DATA.find(item => item.id === id);
}

// export function getFilteredItems(priceFilter) {
//   const { price } = priceFilter;

//   let filteredItems = SHOWCASE_DATA.filter((item) => {
//      item.price);
//   });

//   return filteredItems;
// }
