require('dotenv').config()

async function getItemPrice(itemId: number) {
	const apiKey = process.env.API_KET_STEAM;
	const endpoint = `https://api.steampowered.com/ISteamEconomy/GetAssetPrices/v1/?key=${apiKey}&appid=440&currency=1&item_nameid=${itemId}`;

	try {
		const response = await fetch(endpoint);
		const json = await response.json();
		return json.result;
	} catch (error) {
		console.error(error);
	}
}

async function getMinItemPrice(itemId: number) {
	const itemPrices = await getItemPrice(itemId);
	let minPrice = itemPrices.assets[0].prices.RUB;
	for (let key in itemPrices.assets) {
		if (minPrice > itemPrices.assets[key].prices.RUB) {
			minPrice = itemPrices.assets[key].prices.RUB
		}
	}
	console.log(minPrice)
	return minPrice;
}

console.log(getMinItemPrice(164251970))
