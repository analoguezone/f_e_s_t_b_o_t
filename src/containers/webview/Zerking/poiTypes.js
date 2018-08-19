export const foodTypes = [
	{
		name:"Hamburger",
		key:"hotdog_hamburger"
	},
	{
		name:"Pizza",
		key:"pizza"
	},
	{
		name:"Mexican",
		key:"mexican"
	},
	{
		name:"Gyros",
		key:"gyros"
	},
	{
		name:"Healthy food",
		key:"healthy_food"
	},
	{
		name:"Breakfast",
		key:"breakfast"
	},
	{
		name:"Fish",
		key:"fish"
	},
	{
		name:"Vegan",
		key:"vegan"
	},
	{
		name:"Pasta",
		key:"pasta"
	},
	{
		name:"Soup",
		key:"soup"
	},
	{
		name:"Gluten free",
		key:"glutenfree"
	},
	{
		name:"Bakery",
		key:"bakery"
	},
	{
		name:"Fruits",
		key:"fruits"
	}
] 


export const drinkTypes = [
	{
		name:"Beer",
		key:"beer"
	},
	{
		name:"Wine",
		key:"wine"
	},
	{
		name:"Cocktails",
		key:"cocktails"
	},
	{
		name:"Whiskey",
		key:"whisky"
	},
	{
		name:"Coffee",
		key:"coffee"
	},
	{
		name:"Spirit",
		key:"shots"
	},
	{
		name:"Smoothie",
		key:"smoothie"
	}
] 

export const serviceTypes = [
	{
		name:"Toilet",
		key:"wc"
	},
	{
		name:"Camping",
		key:"camping"
	},
	{
		name:"Shower",
		key:"shower"
	},
	{
		name:"Entrance",
		key:"entrance"
	},
	{
		name:"Taxi",
		key:"taxi"
	},
	{
		name:"Grocery",
		key:"supermarket"
	},
	{
		name:"Parking",
		key:"parking"
	},
	{
		name:"Tobacco",
		key:"tobacco"
	},
	{
		name:"Lockers",
		key:"lockers"
	},
	{
		name:"Phone charging",
		key:"charging_station"
	},
	{
		name:"First Aid",
		key:"first_aid"
	},
	{
		name:"Information",
		key:"information"
	},
	{
		name:"ATM",
		key:"atm"
	},
	{
		name:"Massage",
		key:"massage"
	},
	{
		name:"Pharmacy",
		key:"pharmacy"
	},
	{
		name:"Bike Storage",
		key:"bike_storage"
	},
	{
		name:"Shisha",
		key:"shisha"
	}
] 


export const poiTypeOptions = () => {
	const poiTypes = foodTypes.concat(drinkTypes, serviceTypes);
	const typeOptions = poiTypes.map(poi => {
		return {
			value: poi.key,
			label: poi.name
		};
	});
	return typeOptions;
};

